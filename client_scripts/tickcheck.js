const { lerp, calculateGravity, calculateRadius } = global.Utils;
const planet_attributes = {
    "minecraft:overworld": {"surface_gravity": 0.09807, "sea_level": 63, "escape_height": 10000},
    "minecraft:the_nether": {"surface_gravity": 0.06, "sea_level": 63, "escape_height": 10000},
    "minecraft:the_end": {"surface_gravity": 0.04, "sea_level": 63, "escape_height": 10000},
    "cosmos:mercury_wasteland": {"surface_gravity": 0.037, "sea_level": 63, "escape_height": 10000},
    "cosmos:uranus_lands": {"surface_gravity": 0.0869, "sea_level": 63, "escape_height": 10000},
    "cosmos:venuslands": {"surface_gravity": 0.0887, "sea_level": 63, "escape_height": 10000},
    "cosmos:jupiterlands": {"surface_gravity": 0.2479, "sea_level": 63, "escape_height": 10000},
    "cosmos:marslands": {"surface_gravity": 0.0373, "sea_level": 63, "escape_height": 10000},
    "cosmos:gaia_bh_1": {"surface_gravity": 0.0062, "sea_level": 63, "escape_height": 10000},
    "cosmos:plutowastelands": {"surface_gravity": 0.0062, "sea_level": 63, "escape_height": 10000},
    "cosmos:saturn_lands": {"surface_gravity": 0.1044, "sea_level": 63, "escape_height": 10000},
    "cosmos:solar_system": {"surface_gravity": 0.001, "sea_level": 63, "escape_height": 10000},
    "cosmos:b_1400_centauri": {"surface_gravity": 0.025, "sea_level": 63, "escape_height": 10000},
    "cosmos:j_1900": {"surface_gravity": 0.12, "sea_level": 63, "escape_height": 10000},
    "cosmos:europa_lands": {"surface_gravity": 0.12, "sea_level": 63, "escape_height": 10000},
    "cosmos:j_1407blands": {"surface_gravity": 0.12, "sea_level": 63, "escape_height": 10000},
    "cosmos:alpha_system": {"surface_gravity": 0.12, "sea_level": 63, "escape_height": 10000},
    "cosmos:earth_moon": {"surface_gravity": 0.0162, "sea_level": 63, "escape_height": 10000},
    "lostcities:lostcity": {"surface_gravity": 0.08, "sea_level": 63, "escape_height": 10000},
    "cosmos:glacio_lands": {"surface_gravity": 0.08, "sea_level": 63, "escape_height": 10000},
    "cosmos:neptune_lands": {"surface_gravity": 0.1115, "sea_level": 63, "escape_height": 10000},
    "ae2:spatial_storage": {"surface_gravity": 0.08, "sea_level": 63, "escape_height": 10000}
}
let planet_radius = {
    "minecraft:overworld": 0.00,
    "minecraft:the_nether": 0.00,
    "minecraft:the_end": 0.00,
    "cosmos:mercury_wasteland": 0.000,
    "cosmos:uranus_lands": 0.0000,
    "cosmos:venuslands": 0.0000,
    "cosmos:jupiterlands": 0.00,
    "cosmos:marslands": 0.00,
    "cosmos:gaia_bh_1": 0.000,
    "cosmos:plutowastelands": 0.000,
    "cosmos:saturn_lands": 0.00,
    "cosmos:solar_system": 0.000,
    "cosmos:b_1400_centauri": 0.0,
    "cosmos:j_1900": 0.00,
    "cosmos:europa_lands": 0.00,
    "cosmos:j_1407blands": 0.00,
    "cosmos:alpha_system": 0.00,
    "cosmos:earth_moon": 0.0000,
    "lostcities:lostcity": 0.00,
    "cosmos:glacio_lands": 0.00,
    "cosmos:neptune_lands": 0.0000,
    "minecraft:the_end": 0.00,
    "ae2:spatial_storage": 0.00
}
let blackout_threshold = 0.0
let redout_threshold = -0.0 
let current_force = 0.0
let desired_force = 0.0 // for lerping
let lerp_speed = 0.05
let gforce_enabled = false
let prevX = 0
let prevY = 0
let prevZ = 0
let h = 1     // note to self, 1/20 = seconds | tested 1/20, god it is sensitive like that. Kinda works, but maybe keep threshold values lower?
let prevVX = 0
let prevVY = 0
let prevVZ = 0
let decel_g = 0
let testing_value = 0
let G_REF = planet_attributes["minecraft:overworld"].surface_gravity // using earth gravity as reference cause apparently that's what people do
let startup = false
let blackout_active = false
let reddout_active = false
ClientEvents.tick(event => {
    current_force = lerp(current_force,desired_force,lerp_speed)
    const player = event.player
    const dimension = player.level.dimension
    const radius = planet_radius[dimension]
    let y = event.player.y
    let x = event.player.x
    let z = event.player.z
    if (!startup) {
        for (const [key, value] of Object.entries(planet_attributes)) {
            let radius = calculateRadius(value["surface_gravity"],value["sea_level"],value["escape_height"],planet_attributes)
            planet_radius[key] = radius
        }
        startup = true
    }
    let current_gravity = calculateGravity(dimension, y - planet_attributes[dimension].sea_level, radius,planet_attributes)
    // Needed for reddout and accel_mag
    let vx = (x - prevX) / h
    let vy = (y - prevY) / h
    let vz = (z - prevZ) / h

    let ax = (vx - prevVX) / h
    let ay = (vy - prevVY) / h
    let az = (vz - prevVZ) / h
    let accel_mag = Math.sqrt(ax*ax + ay*ay + az*az)
    let speed = Math.sqrt(vx*vx + vy*vy + vz*vz)

    let tangentialAccel = speed > 1e-5
    ? (ax*vx + ay*vy + az*vz) / speed
    : 0

    let tangential_g = tangentialAccel / G_REF
    let gravity_ratio = Math.min(current_gravity / G_REF, 1.0)
    blackout_threshold = lerp(8, 1.5, gravity_ratio) // NEED TO BE TWEAKED !!!!
    redout_threshold   = lerp(-10, -1.5, gravity_ratio)// NEED TO BE TWEAKED !!!!
    global.GForce.setBlackoutColor(current_force, 0.0, 0.0)
    if (tangential_g > 0) { // Blackout
    if (tangential_g >= blackout_threshold) {
        desired_force = 0.0
        global.GForce.startBlackout()
        blackout_active = true
    } else {
        blackout_active = false
        if (!reddout_active) global.GForce.stopBlackout()
    }
    }
    else if (tangential_g < 0) { // Redout
    if (tangential_g >= redout_threshold) {
        desired_force = 1.0
        global.GForce.startBlackout()
        player.tell("It's gettin' red")
        reddout_active = true
    } else {
        reddout_active = false
        if (!blackout_active) global.GForce.stopBlackout()
    }
    }
    else {
    global.GForce.stopBlackout()
    }
    // if (g_force > testing_value) testing_value = g_force, player.tell("Speed: " + g_force)
    if (player.mainHandItem == "minecraft:stick") player.tell("Accel: " + g_force)
    if (player.mainHandItem == "minecraft:blaze_rod") player.tell("Gravity at y-Level " + y + ": " + current_gravity.toFixed(5))
    if (player.mainHandItem == "minecraft:bone") player.tell(g_force.toFixed(3) + " G's")
    if (player.mainHandItem == "minecraft:feather") player.tell("TangAccel: " + String(tangentialAccel.toFixed(3)))
    if (player.mainHandItem == "minecraft:wooden_sword") player.tell("TangG's: " + tangential_g)
    if (player.mainHandItem == "minecraft:paper") current_force = 0.0, desired_force = 1.0, player.tell("Current Force: " + current_force.toFixed(3))
    if (player.mainHandItem == "minecraft:diamond") current_force = 1.0, desired_force = 0.0, player.tell("Current Force: " + current_force.toFixed(3))
    if (player.mainHandItem == "minecraft:book") global.GForce.setBlackoutColor(current_force, 0.0, 0.0)
    if (player.mainHandItem == "minecraft:string") player.tell("Blackout Threshold: " + blackout_threshold.toFixed(3))
    if (player.mainHandItem == "minecraft:cobweb") player.tell("Redout Threshold: " + redout_threshold.toFixed(3))
    prevVX = vx
    prevVY = vy
    prevVZ = vz
    prevX = x
    prevY = y // do people even read these?
    prevZ = z // Then this ebony bird beguiling my sad fancy into smiling, 
    // by the grave and stern decorum of the countenance it wore, 
    // "Though thy crest be shorn and shaven, thou," I said, 
    // "art sure no craven, ghastly grim and ancient raven wandering from the Nightly shore— 
    // Tell me what thy lordly name is on the Night's Plutonian shore!" 
    // Quoth the Raven "Nevermore."

    // Much I marvelled this ungainly fowl to hear discourse so plainly,
    // Though its answer little meaning - little relevency bore;
    // For we can not help agreeing no living human being 
    // Ever yet was blessed with seeing bird above his chamber door-
    // Bird or beast upon the sculptured bust above his chamber door,
    // With such a name as "Nevermore."
})