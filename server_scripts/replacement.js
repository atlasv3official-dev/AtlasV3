// Replacment recipes for primitive circuits below !!
const control = { // shoulda added this sooner </3
    "type": "forge:nbt",
    "item": "kubejs:primitive_circuit_board",
    "nbt": {type: "Control"}
}
const relay = { 
    "type": "forge:nbt",
    "item": "kubejs:primitive_circuit_board",
    "nbt": {type: "Relay"}
}
const sequence = { 
    "type": "forge:nbt",
    "item": "kubejs:primitive_circuit_board",
    "nbt": {type: "Sequence"}
}
const progressionLockedItems = [
    'mekanismgenerators:fission_reactor_casing',
    'mekanismgenerators:fission_fuel_assembly',
    'mekanismgenerators:fusion_reactor_frame'
]
ServerEvents.recipes(event => {
    // Mods that are going to be released !!
    event.remove({mod: "create_radar"}) 
    event.remove({ mod: "ae2"})

    // The list below edits (in order):
    // 1) drive bay, 2) terminal, 3) crafting terminal, 4) energy acceptor, 
    // 5) energy acceptor alt, 6) energy acceptor cable, 7) charger, 
    // 8) handcrank, 9) quartz fiber, 10) fluix crystal, 
    // 11) Fluix Glass Cable, 12) Covered Cable, 13) Smart cable, 
    // 14) Dense cable, 15) 1k Drive, 16) 4k Drive,
    // 17) Formation Core, 18) annihilation core, 19) house, 20) illuminated panel,
    // 21) 1k storage component, 22) 4k storage component, 23) second 1k drive,
    // 24) second 4k drive, 25) quartz glass, 26) Certus Quartz Block,
    // 27) damaged bud, 28) chipped bud, 29) flawed bud, 30) certus quartz alt,
    // 31) charged certus quartz
    // TO edit: Drive bay, 1k, 4k, terminal, craft terminal
    // (craft 1)
    event.custom({ "type": "minecraft:crafting_shaped", "category": "misc", "key": { "a": { "tag": "forge:ingots/iron" }, "b": relay, "c": { "item": "ae2:fluix_glass_cable" } }, "pattern": [ "aba", "c c", "aaa" ], "result": { "item": "ae2:drive" }, "show_notification": true })
    // (craft 2)
    event.custom({ "type": "minecraft:crafting_shapeless", "category": "misc", "ingredients": [ { "item": "ae2:formation_core" }, { "tag": "ae2:illuminated_panel" }, control, { "item": "ae2:annihilation_core" } ], "result": { "item": "ae2:terminal" } })
    // (craft 3)
    event.custom({ "type": "minecraft:crafting_shapeless", "category": "misc", "ingredients": [ { "item": "ae2:terminal" }, { "item": "minecraft:crafting_table" }, sequence ], "result": { "item": "ae2:crafting_terminal" } })
    // (craft 4)
    event.custom({ "type": "minecraft:crafting_shaped", "category": "misc", "key": { "a": { "tag": "forge:ingots/iron" }, "b": { "item": "ae2:quartz_glass" }, "c": { "tag": "forge:ingots/copper" } }, "pattern": [ "aba", "bcb", "aba" ], "result": { "item": "ae2:energy_acceptor" }, "show_notification": true })
    // (craft 5)
    event.custom({ "type": "minecraft:crafting_shapeless", "category": "misc", "ingredients": [ { "item": "ae2:cable_energy_acceptor" } ], "result": { "item": "ae2:energy_acceptor" } })
    // (craft 6)
    event.custom({ "type": "minecraft:crafting_shapeless", "category": "misc", "ingredients": [ { "item": "ae2:energy_acceptor" } ], "result": { "item": "ae2:cable_energy_acceptor" } })
    // (craft 7)
    event.custom({ "type": "minecraft:crafting_shaped", "category": "misc", "key": { "a": { "tag": "forge:ingots/iron" }, "b": { "tag": "forge:ingots/copper" } }, "pattern": [ "aba", "a  ", "aba" ], "result": { "item": "ae2:charger" }, "show_notification": true })
    // (craft 8)
    event.custom({ "type": "minecraft:crafting_shaped", "category": "misc", "key": { "a": { "tag": "forge:rods/wooden" }, "b": { "tag": "forge:ingots/copper" } }, "pattern": [ "aaa", " a ", " b " ], "result": { "item": "ae2:crank" }, "show_notification": true })
    // (craft 9)
    event.custom({ "type": "minecraft:crafting_shaped", "category": "misc", "key": { "a": { "tag": "forge:glass" }, "b": { "tag": "ae2:all_quartz_dust" } }, "pattern": [ "aaa", "bbb", "aaa" ], "result": { "count": 3, "item": "ae2:quartz_fiber" }, "show_notification": true })
    // (craft 10)
    event.custom({ "type": "ae2:transform", "circumstance": { "type": "fluid", "tag": "minecraft:water" }, "ingredients": [ { "item": "ae2:charged_certus_quartz_crystal" }, { "item": "minecraft:redstone" }, { "item": "minecraft:quartz" } ], "result": { "count": 2, "item": "ae2:fluix_crystal" } })
    // (craft 11)
    event.custom({ "type": "minecraft:crafting_shapeless", "category": "misc", "ingredients": [ { "item": "ae2:quartz_fiber" }, { "tag": "ae2:all_fluix" }, { "tag": "ae2:all_fluix" } ], "result": { "count": 4, "item": "ae2:fluix_glass_cable" } })
    // (craft 12)
    event.custom({ "type": "minecraft:crafting_shapeless", "category": "misc", "ingredients": [ { "tag": "minecraft:wool" }, { "item": "ae2:fluix_glass_cable" } ], "result": { "item": "ae2:fluix_covered_cable" } })
    // (craft 13)
    event.custom({ "type": "minecraft:crafting_shapeless", "category": "misc", "ingredients": [ { "item": "ae2:fluix_covered_cable" }, { "tag": "forge:dusts/redstone" }, { "tag": "forge:dusts/glowstone" } ], "result": { "item": "ae2:fluix_smart_cable" } })
    // (craft 14)
    event.custom({ "type": "minecraft:crafting_shapeless", "category": "misc", "ingredients": [ { "item": "ae2:fluix_covered_cable" }, { "item": "ae2:fluix_covered_cable" }, { "item": "ae2:fluix_covered_cable" }, { "item": "ae2:fluix_covered_cable" } ], "result": { "item": "ae2:fluix_covered_dense_cable" } })
    // (craft 15)
    event.custom({ "type": "minecraft:crafting_shaped", "category": "misc", "key": { "a": { "item": "ae2:quartz_glass" }, "b": { "tag": "forge:dusts/redstone" }, "c": { "item": "ae2:cell_component_1k" }, "d": { "tag": "forge:ingots/iron" } }, "pattern": [ "aba", "bcb", "ddd" ], "result": { "item": "ae2:item_storage_cell_1k" }, "show_notification": true })
    // (craft 16)
    event.custom({ "type": "minecraft:crafting_shaped", "category": "misc", "key": { "a": { "item": "ae2:quartz_glass" }, "b": { "tag": "forge:dusts/redstone" }, "c": { "item": "ae2:cell_component_4k" }, "d": { "tag": "forge:ingots/iron" } }, "pattern": [ "aba", "bcb", "ddd" ], "result": { "item": "ae2:item_storage_cell_4k" }, "show_notification": true })
    // (craft 17)
    event.custom({ "type": "minecraft:crafting_shaped", "category": "misc", "key": { "a": { "tag": "ae2:all_certus_quartz" }, "b": { "tag": "forge:dusts/fluix" }, "c":  sequence  }, "pattern": [ "abc" ], "result": { "count": 2, "item": "ae2:formation_core" }, "show_notification": true })
    // (craft 18)
    event.custom({ "type": "minecraft:crafting_shaped", "category": "misc", "key": { "a": { "tag": "ae2:all_nether_quartz" }, "b": { "tag": "forge:dusts/fluix" }, "c":  sequence  }, "pattern": [ "abc" ], "result": { "count": 2, "item": "ae2:annihilation_core" }, "show_notification": true })
    // (craft 19)
    event.custom({ "type": "minecraft:crafting_shaped", "category": "misc", "key": { "a": { "item": "ae2:quartz_glass" }, "b": { "tag": "forge:dusts/redstone" }, "c": { "tag": "forge:ingots/iron" } }, "pattern": [ "aba", "b b", "ccc" ], "result": { "item": "ae2:item_cell_housing" }, "show_notification": true })
    // (craft 20)
    event.custom({ "type": "minecraft:crafting_shaped", "category": "misc", "key": { "a": { "tag": "forge:dusts/glowstone" }, "b": { "item": "ae2:quartz_glass" }, "c": { "tag": "forge:ingots/iron" }, "d": { "tag": "forge:dusts/redstone" } }, "pattern": [ " ab", "cdb", " ab" ], "result": { "count": 3, "item": "ae2:semi_dark_monitor" }, "show_notification": true })
    // (craft 21)
    event.custom({ "type": "minecraft:crafting_shaped", "category": "misc", "key": { "a": { "tag": "forge:dusts/redstone" }, "b": { "tag": "ae2:all_certus_quartz" }, "c": sequence }, "pattern": [ "aba", "bcb", "aba" ], "result": { "item": "ae2:cell_component_1k" }, "show_notification": true })
    // (craft 22)
    event.custom({ "type": "minecraft:crafting_shaped", "category": "misc", "key": { "a": { "tag": "forge:dusts/redstone" }, "b": relay, "c": { "item": "ae2:cell_component_1k" }, "d": { "item": "ae2:quartz_glass" } }, "pattern": [ "aba", "cdc", "aca" ], "result": { "item": "ae2:cell_component_4k" }, "show_notification": true })
    // (craft 23)
    event.custom({ "type": "minecraft:crafting_shapeless", "category": "misc", "ingredients": [ { "item": "ae2:item_cell_housing" }, { "item": "ae2:cell_component_1k" } ], "result": { "item": "ae2:item_storage_cell_1k" } })
    // (craft 24)
    event.custom({ "type": "minecraft:crafting_shapeless", "category": "misc", "ingredients": [ { "item": "ae2:item_cell_housing" }, { "item": "ae2:cell_component_4k" } ], "result": { "item": "ae2:item_storage_cell_4k" } })
    // (craft 25)
    event.custom({ "type": "minecraft:crafting_shaped", "category": "misc", "key": { "a": { "tag": "ae2:all_quartz_dust" }, "b": { "tag": "forge:glass" } }, "pattern": [ "aba", "bab", "aba" ], "result": { "count": 4, "item": "ae2:quartz_glass" }, "show_notification": true })
    // (craft 26)
    event.custom({ "type": "minecraft:crafting_shaped", "category": "misc", "key": { "a": { "item": "ae2:certus_quartz_crystal" } }, "pattern": [ "aa", "aa" ], "result": { "item": "ae2:quartz_block" }, "show_notification": true })
    // (craft 27)
    event.custom({ "type": "ae2:transform", "circumstance": { "type": "fluid", "tag": "minecraft:water" }, "ingredients": [ { "item": "ae2:charged_certus_quartz_crystal" }, { "item": "ae2:quartz_block" } ], "result": { "item": "ae2:damaged_budding_quartz" } })
    // (craft 28)
    event.custom({ "type": "ae2:transform", "circumstance": { "type": "fluid", "tag": "minecraft:water" }, "ingredients": [ { "item": "ae2:charged_certus_quartz_crystal" }, { "item": "ae2:damaged_budding_quartz" } ], "result": { "item": "ae2:chipped_budding_quartz" } })
    // (craft 29)
    event.custom({ "type": "ae2:transform", "circumstance": { "type": "fluid", "tag": "minecraft:water" }, "ingredients": [ { "item": "ae2:charged_certus_quartz_crystal" }, { "item": "ae2:chipped_budding_quartz" } ], "result": { "item": "ae2:flawed_budding_quartz" } })
    // (craft 30)
    event.custom({ "type": "ae2:transform", "circumstance": { "type": "fluid", "tag": "minecraft:water" }, "ingredients": [ { "item": "ae2:charged_certus_quartz_crystal" }, { "item": "ae2:certus_quartz_dust" } ], "result": { "count": 2, "item": "ae2:certus_quartz_crystal" } })
    // (craft 31)
    event.custom({ "type": "ae2:charger", "ingredient": { "item": "ae2:certus_quartz_crystal" }, "result": { "item": "ae2:charged_certus_quartz_crystal" } })
    
    
    
    // (craft 1)
    event.custom({ "type": "minecraft:crafting_shaped", "category": "misc", "key": { "A": { "item": "create:andesite_casing" }, "B": { "item": "minecraft:lightning_rod" } }, "pattern": [ "AB" ], "result": { "item": "create_radar:radar_receiver_block" }, "show_notification": true })
    // (craft 2)
    event.custom({ "type": "minecraft:crafting_shaped", "category": "misc", "key": { "A": { "item": "create:mechanical_bearing" }, "B": { "tag": "forge:plates/iron" } }, "pattern": [ "B", "A" ], "result": { "item": "create_radar:radar_bearing" }, "show_notification": true })
    // (craft 3)
    event.custom({ "type": "minecraft:crafting_shaped", "category": "misc", "key": { "A": { "item": "minecraft:redstone_torch" }, "B": { "item": "create:brass_casing" }, "C": { "item": "minecraft:copper_ingot" } }, "pattern": [ "A", "B", "C" ], "result": { "item": "create_radar:data_link" }, "show_notification": true })
    // (craft 4) 
    event.custom({ "type": "minecraft:crafting_shaped", "category": "misc", "key": { "A": { "item": "create:gearbox" }, "B": { "item": "create:precision_mechanism" } }, "pattern": [ "B", "A" ], "result": { "item": "create_radar:auto_yaw_controller" }, "show_notification": true })
    // (craft 5)
    event.custom({ "type": "minecraft:crafting_shaped", "category": "misc", "key": { "A": { "item": "create:gearbox" }, "B": { "item": "create:precision_mechanism" } }, "pattern": [ "BA" ], "result": { "item": "create_radar:auto_pitch_controller" }, "show_notification": true })
    // (craft 6)
    event.custom({ "type": "create:cutting", "ingredients": [ { "item": "minecraft:quartz_slab" } ], "processingTime": 50, "results": [ { "item": "create_radar:radar_plate_block" } ] } )
    // (craft 7)
    event.custom({ "type": "create:cutting", "ingredients": [ { "item": "minecraft:iron_bars" } ], "processingTime": 50, "results": [ { "item": "create_radar:radar_dish_block" } ] })
    // (craft 8)
    event.custom({ "type": "minecraft:crafting_shaped", "category": "misc", "key": { "A": { "item": "create_radar:data_link" }, "B": { "item": "create:brass_casing" }, "C": { "item": "minecraft:copper_ingot" } }, "pattern": [ "A", "B", "C" ], "result": { "item": "create_radar:network_filterer" }, "show_notification": true })
    // (craft 9)
    event.custom({ "type": "minecraft:crafting_shaped", "category": "misc", "key": { "A": { "item": "create:brass_casing" }, "B": { "item": "create:electron_tube" }, "C": { "item": "create:precision_mechanism" } }, "pattern": [ "B", "A", "C" ], "result": { "count": 3, "item": "kubejs:monitor" }, "show_notification": true })
    // (craft 10)
    event.custom({ "type": "minecraft:crafting_shaped", "category": "misc", "key": { "A": { "item": "create:brass_casing" }, "B": { "item": "create:electron_tube" }, "D": { "item": "ae2:drive" } }, "pattern": [ " B ", "ADA" ], "result": { "count": 1, "item": "mbd2:circuit_rack" }, "show_notification": true })
    // Control Circuit
    event.remove({ output: 'mekanism:basic_control_circuit' })
    event.custom({"type":"minecraft:crafting_shaped","key":{"#":{"item":"minecraft:furnace"},"I":{"tag":"forge:ingots/iron"},"O":{"tag":"forge:ingots/osmium"},"R":{"tag":"forge:dusts/redstone"}},"pattern":["I#I","ROR","I#I"],"result":{"item":"mekanism:metallurgic_infuser"}})
    event.custom({"type":"mekanism:metallurgic_infusing","chemicalInput":{"amount":20,"tag":"mekanism:redstone"},"itemInput":{"ingredient":{"type": "forge:nbt","item":"kubejs:primitive_circuit_board","nbt": {type: "Control"}}},"output":{"item":"mekanism:basic_control_circuit"}})

    // Basic Motor Extension
    event.remove({ output: 'create_new_age:basic_motor_extension' })
    event.shaped( Item.of('create_new_age:basic_motor_extension', 1), [ 'AAA', 'BCD', 'AAA' ], { A: 'create_new_age:overcharged_iron_sheet', B: 'create_new_age:basic_motor', C: Item.of("kubejs:primitive_circuit_board", '{type: "Relay"}').strongNBT(), D: Item.of("kubejs:primitive_circuit_board", '{type: "Control"}').strongNBT() } )
    event.shaped( Item.of('create_new_age:basic_motor_extension', 1), [ 'AAA', 'B C', 'AAA' ], { A: 'create_new_age:overcharged_iron_sheet', B: 'create_new_age:basic_motor', C: Item.of("kubejs:modified_breadboard", '{circuits: [1,1,0], CustomModelData: 6}').strongNBT() } )

    // Motor Extension
    event.remove({ output: 'create_new_age:advanced_motor_extension' })
    event.custom({ type: "create:mechanical_crafting", acceptMirrored: true, key: { A: { item: "create_new_age:overcharged_iron_sheet" }, B: { item: "create_new_age:overcharged_diamond" }, C: { type: "forge:nbt", item: "kubejs:primitive_circuit_board", nbt: { type: "Relay" } }, D: { type: "forge:nbt", item: "kubejs:primitive_circuit_board", nbt: { type: "Control" } }, E: { item: "create_new_age:advanced_motor" } }, pattern: [ "AAAAA", "BCEDB", "AAAAA" ], result: { item: "create_new_age:advanced_motor_extension" } })
    event.custom({ type: "create:mechanical_crafting", acceptMirrored: true, key: { A: { item: "create_new_age:overcharged_iron_sheet" }, B: { item: "create_new_age:overcharged_diamond" }, C: { type: "forge:nbt", item: "kubejs:modified_breadboard", nbt: { circuits: [1, 1, 0], CustomModelData: 6 } }, E: { item: "create_new_age:advanced_motor" } }, pattern: [ "AAAAA", "BCE B", "AAAAA" ], result: { item: "create_new_age:advanced_motor_extension" } })
    // Fluid Pump
    event.remove({ output: "vs_logistics:fluid_pump"})
    event.shaped(Item.of("vs_logistics:fluid_pump", 1), ["ABA","ACA","ADA"], {A: Item.of("tfmg:steel_ingot"), B: Item.of("kubejs:primitive_circuit_board", '{type: "Control"}').strongNBT(), C: "minecraft:dried_kelp_block",D: Item.of("tfmg:steel_fluid_tank")})

    // O2 bubble generator
    event.remove({ output: "beyond_oxygen:bubble_generator"})

    // IC (ComputerCraft)
    event.replaceInput({ input: "ccbr:basic_integrated_circuit" }, 'ccbr:basic_integrated_circuit',  Item.of("kubejs:primitive_circuit_board", '{type: "Control"}').strongNBT())       
    event.replaceInput({ input: "ccbr:integrated_circuit" }, 'ccbr:integrated_circuit',  Item.of("kubejs:modified_breadboard", '{circuits: [1,1,1], CustomModelData: 7}').strongNBT())       

    // Nuclear Controller 
    event.remove({ output: "createnuclear:reactor_controller" })
    event.custom({ "type": "create:mechanical_crafting", "acceptMirrored": true, "key": { "C": { "item": "createnuclear:reactor_casing" }, "N": { "item": "minecraft:netherite_ingot" }, "O": { "item": "create:content_observer" }, "G": { "type": "forge:nbt", "item": "kubejs:primitive_circuit_board", "nbt": {type: "Control"} }, "T": { "type": "forge:nbt", "item": "kubejs:primitive_circuit_board", "nbt": {type: "Control"} }, "V": { "item": "create:item_vault" }, "X": { "type": "forge:nbt", "item": "kubejs:primitive_circuit_board", "nbt": {type: "Control"} } }, "pattern": [ "CCCCC", "CNONC", "CTXGC", "CNVNC", "CCCCC" ], "result": { "item": "createnuclear:reactor_controller" } })
    event.custom({ "type": "create:mechanical_crafting", "acceptMirrored": true, "key": { "C": { "item": "createnuclear:reactor_casing" }, "N": { "item": "minecraft:netherite_ingot" }, "O": { "item": "create:content_observer" }, "V": { "item": "create:item_vault" }, "X": { "type": "forge:nbt", "item": "kubejs:modified_breadboard", "nbt": {circuits: [1,1,1], CustomModelData: 7} } }, "pattern": [ "CCCCC", "CNONC", "C X C", "CNVNC", "CCCCC" ], "result": { "item": "createnuclear:reactor_controller" } })

        //TFMG
    event.remove({ output: "tfmg:flamethrower" })
    event.remove({ output: "tfmg:engine_controller" })
    event.remove({ output: "tfmg:advanced_potato_cannon" })
    event.remove({ output: "tfmg:fireproof_chemical_vat" })

    event.custom({ "type": "create:mechanical_crafting", "acceptMirrored": false, "key": { "B": { "item": "tfmg:aluminum_bars" }, "C": { "type": "forge:nbt", 'item': "kubejs:primitive_circuit_board", 'nbt':{type: "Control"} }, "M": { "item": "tfmg:steel_mechanism" }, "O": { "tag": "forge:ingots/steel" }, "P": { "item": "tfmg:steel_pipe" }, "S": { "item": "tfmg:spark_plug" }, "T": { "item": "tfmg:steel_fluid_tank" }, "W": { "tag": "forge:wires/copper" } }, "pattern": [ "BWC ", "PPTM", "S O " ], "result": { "item": "tfmg:flamethrower" } } )
    event.custom({ "type": "create:mechanical_crafting", "acceptMirrored": false, "key": { "C": { "item": "tfmg:heavy_machinery_casing" }, "M": { "item": "tfmg:steel_mechanism" }, "R": { "item": "tfmg:rubber_sheet" }, "S": { "item": "create:shaft" }, "V": { "item": "tfmg:voltmeter" }, "W": { "tag": "forge:wires/copper" }, "Z": { "type": "forge:nbt", "item": "kubejs:primitive_circuit_board", "nbt":{type:"Control"} }, "X": { "type": "forge:nbt", "item": "kubejs:primitive_circuit_board", "nbt":{type:"Relay"} } }, "pattern": [ "RRR", "VSV", "WCW", "ZMX" ], "result": { "item": "tfmg:engine_controller" } })
    event.custom({ "type": "create:mechanical_crafting", "acceptMirrored": false, "key": { "C": control, "M": { "item": "tfmg:steel_mechanism" }, "O": { "item": "tfmg:rebar" }, "P": { "item": "tfmg:steel_pipe" }, "T": { "item": "tfmg:steel_fluid_tank" } }, "pattern": [ "PPPT", " MCO" ], "result": { "item": "tfmg:advanced_potato_cannon" } })
    event.custom({ "type": "minecraft:crafting_shaped", "category": "misc", "key": { "H": { "item": "tfmg:heavy_machinery_casing" }, "N": relay, "F": sequence, "P": { "item": "tfmg:fireproof_bricks" }, "R": { "item": "tfmg:rubber_sheet" }, "T": { "item": "tfmg:steel_chemical_vat" } }, "pattern": [ "PRP", "NTF", "PHP" ], "result": { "item": "tfmg:fireproof_chemical_vat" }, "show_notification": true })


    //Misc:
    event.remove({ output: "tfmg:circuit_board" })
    event.replaceInput({}, 'tfmg:circuit_board', {'type': 'forge:nbt', 'item': 'kubejs:primitive_circuit_board','nbt':{type: "Control"}})
    event.replaceInput({}, "create_connected:control_chip", sequence)
    event.remove({ output: "computercraft:monitor_advanced"})
    event.shaped( Item.of("computercraft:monitor_advanced", 4), [ 'AAA', 'ABA', 'ACA' ], { A: 'create:brass_ingot', B: {"tag": "forge:glass_panes"}, C: {'type': 'forge:nbt', 'item': 'kubejs:modified_breadboard','nbt':{circuits:[1,0,1],CustomModelData:5}} } )
    event.replaceInput({output: "#kubejs:smart_pipes"}, "create:electron_tube", control)
    event.replaceInput({output: "create:contraption_controls"}, "create:electron_tube", control)
    // PROGRESSION LOCKED ITEMS:
    for (const id of progressionLockedItems) {
      event.remove({output: id})
    }


})
