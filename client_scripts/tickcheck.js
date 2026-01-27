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
let h = 1 // note to self, 1/20 = seconds | tested 1/20, god it is sensitive like that. Kinda works, but maybe keep threshold values lower?
let prevPrevX = 0 
let prevPrevY = 0
let prevPrevZ = 0
let testing_value = 0
let G_REF = planet_attributes["minecraft:overworld"].surface_gravity // using earth gravity as reference cause apparently that's what people do
let startup = false
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
    let somethingx = (x - prevX).toFixed(4)
    let somethingy = (y - prevY).toFixed(4)
    let somethingz = (z - prevZ).toFixed(4)
    let secondx = (prevX - prevPrevX).toFixed(4)
    let secondy = (prevY - prevPrevY).toFixed(4)
    let secondz = (prevZ - prevPrevZ).toFixed(4)
    let d1 = Math.sqrt(somethingx*somethingx + somethingy*somethingy + somethingz*somethingz)/h
    let d2 = Math.sqrt(secondx*secondx + secondy*secondy + secondz*secondz)/h
    let acceleration = (d1 - d2)/h
    // let g_force = acceleration * (current_gravity / G_REF)
    let g_force = acceleration / G_REF // multiplied by 5 for the love of the game (hwk needs it or else thresholds are too strict)
    let gravity_ratio = Math.min(current_gravity / G_REF, 1.0)
    blackout_threshold = lerp(30, 15, gravity_ratio)
    redout_threshold = lerp(-34, -17, gravity_ratio)
    global.GForce.setBlackoutColor(current_force, 0.0, 0.0)
    if (g_force >= blackout_threshold) {
        if (desired_force == 0.0) global.GForce.startBlackout()
        else if (desired_force > 0.0) {
            desired_force = 0.0, global.GForce.startBlackout()
        }
    }
    else if (g_force <= redout_threshold) {
        if (desired_force == 1.0) global.GForce.startBlackout()
        else if (desired_force < 1.0) {
            desired_force = 1.0, global.GForce.startBlackout()
        }
    }
    else { // Broken, upcoming gforce logic should fix it 
        // global.GForce.stopBlackout()
    }
    // if (g_force > testing_value) testing_value = g_force, player.tell("Speed: " + g_force)
    if (player.mainHandItem == "minecraft:stick") player.tell("Accel: " + g_force)
    if (player.mainHandItem == "minecraft:blaze_rod") player.tell("Gravity at y-Level " + y + ": " + current_gravity.toFixed(5))
    if (player.mainHandItem == "minecraft:bone") player.tell(g_force.toFixed(3) + " G's")
    if (player.mainHandItem == "minecraft:feather") player.tell("X" + x.toFixed(4) + " prevX" + prevX.toFixed(4) + " PrevPrevX" + prevPrevX.toFixed(4) + " Gforce: " + g_force.toFixed(4) + " G's")
    if (player.mainHandItem == "minecraft:wooden_sword") player.tell("Y: " + y.toFixed(4) + " prevY: " + prevY.toFixed(4) + " PrevPrevY: " + prevPrevY.toFixed(4) + " Gforce: " + g_force.toFixed(4) + " G's")
    if (player.mainHandItem == "minecraft:paper") current_force = 0.0, desired_force = 1.0, player.tell("Current Force: " + current_force.toFixed(3))
    if (player.mainHandItem == "minecraft:diamond") current_force = 1.0, desired_force = 0.0, player.tell("Current Force: " + current_force.toFixed(3))
    if (player.mainHandItem == "minecraft:book") global.GForce.setBlackoutColor(current_force, 0.0, 0.0)
    if (player.mainHandItem == "minecraft:string") player.tell("Blackout Threshold: " + blackout_threshold.toFixed(3))
    if (player.mainHandItem == "minecraft:cobweb") player.tell("Redout Threshold: " + redout_threshold.toFixed(3))



    prevPrevX = prevX
    prevPrevY = prevY
    prevPrevZ = prevZ
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