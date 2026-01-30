// const { lerp, calculateGravity, calculateRadius, ltp, roundToPointFive } = global.Utils

// const planet_attributes = {
//   "minecraft:overworld": {"surface_gravity": 0.09807, "sea_level": 63, "escape_height": 10000},
//   "minecraft:the_nether": {"surface_gravity": 0.06, "sea_level": 63, "escape_height": 10000},
//   "minecraft:the_end": {"surface_gravity": 0.04, "sea_level": 63, "escape_height": 10000},
//   "cosmos:mercury_wasteland": {"surface_gravity": 0.037, "sea_level": 63, "escape_height": 10000},
//   "cosmos:uranus_lands": {"surface_gravity": 0.0869, "sea_level": 63, "escape_height": 10000},
//   "cosmos:venuslands": {"surface_gravity": 0.0887, "sea_level": 63, "escape_height": 10000},
//   "cosmos:jupiterlands": {"surface_gravity": 0.2479, "sea_level": 63, "escape_height": 10000},
//   "cosmos:marslands": {"surface_gravity": 0.0373, "sea_level": 63, "escape_height": 10000},
//   "cosmos:gaia_bh_1": {"surface_gravity": 0.0062, "sea_level": 63, "escape_height": 10000},
//   "cosmos:plutowastelands": {"surface_gravity": 0.0062, "sea_level": 63, "escape_height": 10000},
//   "cosmos:saturn_lands": {"surface_gravity": 0.1044, "sea_level": 63, "escape_height": 10000},
//   "cosmos:solar_system": {"surface_gravity": 0.001, "sea_level": 63, "escape_height": 10000},
//   "cosmos:b_1400_centauri": {"surface_gravity": 0.025, "sea_level": 63, "escape_height": 10000},
//   "cosmos:j_1900": {"surface_gravity": 0.12, "sea_level": 63, "escape_height": 10000},
//   "cosmos:europa_lands": {"surface_gravity": 0.12, "sea_level": 63, "escape_height": 10000},
//   "cosmos:j_1407blands": {"surface_gravity": 0.12, "sea_level": 63, "escape_height": 10000},
//   "cosmos:alpha_system": {"surface_gravity": 0.12, "sea_level": 63, "escape_height": 10000},
//   "cosmos:earth_moon": {"surface_gravity": 0.0162, "sea_level": 63, "escape_height": 10000},
//   "lostcities:lostcity": {"surface_gravity": 0.08, "sea_level": 63, "escape_height": 10000},
//   "cosmos:glacio_lands": {"surface_gravity": 0.08, "sea_level": 63, "escape_height": 10000},
//   "cosmos:neptune_lands": {"surface_gravity": 0.1115, "sea_level": 63, "escape_height": 10000},
//   "ae2:spatial_storage": {"surface_gravity": 0.08, "sea_level": 63, "escape_height": 10000}
// }
// let planet_radius = {}
// let startup = false

// const h = 1
// const G_REF = 0.09807

// let prevPos = { x: 0, y: 0, z: 0 }
// let smoothVel = { x: 0, y: 0, z: 0 }
// let prevSmoothVel = { x: 0, y: 0, z: 0 }

// const TOTAL_BLOOD = 6000            // 6000mb or 6B
// const HEAD_FRACTION = 0.067         // ong it had to be this   
// const BASE_PRESSURE = 1.0
// const VASCULAR_RESISTANCE = 0.04    // higher = slower
// const PUMP_RATE = 0.005             // pumpin rate
// const OXYGEN_DIFFUSION = 0.02
// const BRAIN_O2_CONSUMPTION = 5.5    // per tick
// global.blood ??= { // i deadass don't know why, but kubejs was tweaking out with noraml decleration. Ended up just stealing this
//   head: {
//     volume: TOTAL_BLOOD * HEAD_FRACTION,
//     pressure: BASE_PRESSURE,
//     oxygen: 1.0
//   },
//   body: {
//     volume: TOTAL_BLOOD * (1 - HEAD_FRACTION),
//     pressure: BASE_PRESSURE,
//     oxygen: 1.0
//   }
// }

// const blood = global.blood
// let currentHalfHeart = 20
// let halfHeartStorage = 150
// let halfHeartPuncture = 2.5 // 3 seconds for full drain
// let remainingBleedVolume = 0
// let lastMissingHealth = 0

// let heartHealth = 1.0

// let ambientOxygen = 1.0            

// let brainOxygenDebt = 0    

// let currentOverlayIntensity = 0
// let isRedout = false

// let G_BLACKOUT_THRESHOLD = 5
// let G_REDOUT_THRESHOLD = -5

// ClientEvents.tick(event => {
//     const player = event.player
//     const dimStr = player.level.dimension.toString()

//     if (!startup) {
//         for (const [key, value] of Object.entries(planet_attributes)) {
//             planet_radius[key] = calculateRadius(value.surface_gravity, value.sea_level, value.escape_height, planet_attributes)
//         }
//         prevPos.x = player.x; prevPos.y = player.y; prevPos.z = player.z
//         startup = true
//     }
//     ambientOxygen = event.entity.getAirSupply() / 300.0
//     currentHalfHeart = roundToPointFive(player.getHealth())
//     let missingHealth = player.maxHealth - currentHalfHeart
//     let newDamage = missingHealth - lastMissingHealth

//     if (newDamage > 0) {
//         remainingBleedVolume += newDamage * halfHeartStorage
//     }

//     lastMissingHealth = missingHealth

//     remainingBleedVolume = missingHealth * halfHeartStorage
    
//     let bleedThisTick = Math.min(
//         halfHeartPuncture,
//         remainingBleedVolume
//     )
//     blood.body.volume -= bleedThisTick
//     remainingBleedVolume -= bleedThisTick
//     blood.body.volume = Math.max(0, blood.body.volume)
//     let totalBlood = blood.body.volume + blood.head.volume
//     if (totalBlood > TOTAL_BLOOD) {
//         blood.body.volume -= (totalBlood - TOTAL_BLOOD)
//     }

//     const attr = planet_attributes[dimStr] || planet_attributes["minecraft:overworld"]
//     const radius = planet_radius[dimStr] || 10000
    
//     // Grav
//     const localG = calculateGravity(dimStr, player.y - attr.sea_level, radius, planet_attributes) || 0.098
    
//     // Velocity
//     const rawVel = {
//         x: (player.x - prevPos.x) / h,
//         y: (player.y - prevPos.y) / h,
//         z: (player.z - prevPos.z) / h
//     }

//     const filterAlpha = 0.2
//     smoothVel.x = lerp(smoothVel.x, rawVel.x, filterAlpha)
//     smoothVel.y = lerp(smoothVel.y, rawVel.y, filterAlpha)
//     smoothVel.z = lerp(smoothVel.z, rawVel.z, filterAlpha)

//     // Acceleration logic
//     const acc = {
//         x: (smoothVel.x - prevSmoothVel.x) / h,
//         y: (smoothVel.y - prevSmoothVel.y) / h,
//         z: (smoothVel.z - prevSmoothVel.z) / h
//     }
//     const properAcc = {
//         x: acc.x,
//         y: acc.y + localG,
//         z: acc.z
//     }
//     let speed = Math.sqrt(smoothVel.x*smoothVel.x + smoothVel.y*smoothVel.y + smoothVel.z*smoothVel.z)
//     let tangentialAccel = speed > 1e-5
//     ? (properAcc.x*smoothVel.x + properAcc.y*smoothVel.y + properAcc.z*smoothVel.z) / speed
//     : 0
//     let tangential_g = tangentialAccel / G_REF


//     blood_sim(tangential_g)
//     ltp(player,"minecraft:bone","Gforce: " + tangential_g.toFixed(3) + "G's")
//     ltp(player,"minecraft:stick", "Health: " + player.getFoodLevel())
//     prevSmoothVel.x = smoothVel.x; prevSmoothVel.y = smoothVel.y; prevSmoothVel.z = smoothVel.z
//     prevPos.x = player.x; prevPos.y = player.y; prevPos.z = player.z

// })
// function blood_sim(gforce) { // function cause otherwise it takes up space

//     const cardiacOutput = PUMP_RATE * heartHealth
//     blood.head.pressure += cardiacOutput
//     blood.body.pressure += cardiacOutput

//     const gEffect = gforce * 0.15
//     blood.head.pressure -= gEffect
//     blood.body.pressure += gEffect

//     blood.head.pressure = Math.max(0, blood.head.pressure)
//     blood.body.pressure = Math.max(0, blood.body.pressure)

//     const pressureDiff = blood.body.pressure - blood.head.pressure
//     const flow = pressureDiff * VASCULAR_RESISTANCE // Ohms law? More like.. ohms.. suggestion.

//     blood.body.volume -= flow
//     blood.head.volume += flow

//     blood.head.volume = Math.max(0, blood.head.volume)
//     blood.body.volume = Math.max(0, blood.body.volume)

//     blood.body.oxygen += (ambientOxygen - blood.body.oxygen) * OXYGEN_DIFFUSION
//     if (flow > 0) {
//     const oxygenTransfer = flow * blood.body.oxygen
//     blood.head.oxygen += oxygenTransfer * 0.001
//     }
//     blood.head.oxygen = Math.min(1.0, blood.head.oxygen)


//     const brainO2Supply =
//         blood.head.volume *
//         blood.head.pressure *
//         blood.head.oxygen

  
//     const netO2 = brainO2Supply - BRAIN_O2_CONSUMPTION

//     if (netO2 < 0) {
//         brainOxygenDebt += Math.abs(netO2)
//     } else {
//         brainOxygenDebt = Math.max(0, brainOxygenDebt - netO2)
//     }

//     blood.head.pressure *= 0.98 // decay
//     blood.body.pressure *= 0.98
// }