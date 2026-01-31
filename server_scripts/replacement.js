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
    event.remove({mod:"ae2"})
    // Control Circuit
    event.remove({ output: 'mekanism:basic_control_circuit' })
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
    event.remove({ output: "tfmg:steel_distillation_controller" })
    event.remove({ output: "tfmg:fireproof_chemical_vat" })

    event.custom({ "type": "create:mechanical_crafting", "acceptMirrored": false, "key": { "B": { "item": "tfmg:aluminum_bars" }, "C": { "type": "forge:nbt", 'item': "kubejs:primitive_circuit_board", 'nbt':{type: "Control"} }, "M": { "item": "tfmg:steel_mechanism" }, "O": { "tag": "forge:ingots/steel" }, "P": { "item": "tfmg:steel_pipe" }, "S": { "item": "tfmg:spark_plug" }, "T": { "item": "tfmg:steel_fluid_tank" }, "W": { "tag": "forge:wires/copper" } }, "pattern": [ "BWC ", "PPTM", "S O " ], "result": { "item": "tfmg:flamethrower" } } )
    event.custom({ "type": "create:mechanical_crafting", "acceptMirrored": false, "key": { "C": { "item": "tfmg:heavy_machinery_casing" }, "M": { "item": "tfmg:steel_mechanism" }, "R": { "item": "tfmg:rubber_sheet" }, "S": { "item": "create:shaft" }, "V": { "item": "tfmg:voltmeter" }, "W": { "tag": "forge:wires/copper" }, "Z": { "type": "forge:nbt", "item": "kubejs:primitive_circuit_board", "nbt":{type:"Control"} }, "X": { "type": "forge:nbt", "item": "kubejs:primitive_circuit_board", "nbt":{type:"Relay"} } }, "pattern": [ "RRR", "VSV", "WCW", "ZMX" ], "result": { "item": "tfmg:engine_controller" } })
    event.custom({ "type": "create:mechanical_crafting", "acceptMirrored": false, "key": { "C": control, "M": { "item": "tfmg:steel_mechanism" }, "O": { "item": "tfmg:rebar" }, "P": { "item": "tfmg:steel_pipe" }, "T": { "item": "tfmg:steel_fluid_tank" } }, "pattern": [ "PPPT", " MCO" ], "result": { "item": "tfmg:advanced_potato_cannon" } })
    event.custom({ "type": "minecraft:crafting_shaped", "category": "misc", "key": { "C": { "item": "minecraft:compass" }, "E": relay, "F": control, "H": { "item": "tfmg:heavy_machinery_casing" }, "M": { "item": "tfmg:steel_mechanism" }, "P": { "item": "tfmg:industrial_pipe" }, "S": { "tag": "forge:plates/lead" } }, "pattern": [ "SPS", "ECF", "MHM" ], "result": { "item": "tfmg:steel_distillation_controller" }, "show_notification": true })
    event.custom({ "type": "minecraft:crafting_shaped", "category": "misc", "key": { "H": { "item": "tfmg:heavy_machinery_casing" }, "N": relay, "F": sequence, "P": { "item": "tfmg:fireproof_bricks" }, "R": { "item": "tfmg:rubber_sheet" }, "T": { "item": "tfmg:steel_chemical_vat" } }, "pattern": [ "PRP", "NTF", "PHP" ], "result": { "item": "tfmg:fireproof_chemical_vat" }, "show_notification": true })

    //Misc:
    event.remove({ output: "tfmg:circuit_board" })
    event.replaceInput({}, 'tfmg:circuit_board', {'type': 'forge:nbt', 'item': 'kubejs:primitive_circuit_board','nbt':{type: "Control"}})
    event.replaceInput({}, "create_connected:control_chip", sequence)
    event.remove({ output: "computercraft:monitor_advanced"})
    event.shaped( Item.of("computercraft:monitor_advanced", 4), [ 'AAA', 'ABA', 'ACA' ], { A: 'create:brass_ingot', B: {"tag": "forge:glass_panes"}, C: {'type': 'forge:nbt', 'item': 'kubejs:modified_breadboard','nbt':{circuits:[1,0,1],CustomModelData:5}} } )
    event.replaceInput({output: "create:smart_chute"}, "create:electron_tube", control)
    event.replaceInput({output: "#kubejs:smart_pipes"}, "create:electron_tube", control)
    event.replaceInput({output: "create:contraption_controls"}, "create:electron_tube", control)
    event.replaceInput({output: "create:sequenced_gearshift"}, "create:electron_tube", control)
    event.replaceInput({output: "destroy:keypunch"}, "create:electron_tube", {'type': 'forge:nbt','item':'kubejs:modified_breadboard','nbt':{circuits:[1,0,1],CustomModelData:5}})

    // PROGRESSION LOCKED ITEMS:
    for (const id of progressionLockedItems) {
      event.remove({output: id})
    }


})