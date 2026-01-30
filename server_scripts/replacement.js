// let control = Item.of('kubejs:primitive_circuit_board', {type: 'Sequence'})
ServerEvents.recipes(event => {
    // Control Circuit
    event.remove({ output: 'mekanism:basic_control_circuit' })
    event.custom({"type":"mekanism:metallurgic_infusing","chemicalInput":{"amount":20,"tag":"mekanism:redstone"},"itemInput":{"ingredient":{"type": "forge:nbt","item":"kubejs:primitive_circuit_board","nbt": {type: "Control"}}},"output":{"item":"mekanism:basic_control_circuit"}})
    console.log("MICROSLOP")
    // Basic Motor Extension
    event.remove({ output: 'create_new_age:basic_motor_extension' })
    event.shaped(Item.of('create_new_age:basic_motor_extension', 1), [ 'AAA', 'BCD', 'AAA' ], { A: 'create_new_age:overcharged_iron_sheet', B: 'create_new_age:basic_motor', C: Item.of("kubejs:primitive_circuit_board", '{type: "Relay"}').strongNBT(), D: Item.of("kubejs:primitive_circuit_board", '{type: "Control"}').strongNBT() } )
    event.shaped( Item.of('create_new_age:basic_motor_extension', 1), [ 'AAA', 'B C', 'AAA' ], { A: 'create_new_age:overcharged_iron_sheet', B: 'create_new_age:basic_motor', C: Item.of("kubejs:modified_breadboard", '{circuits: [1,1,0], CustomModelData: 6}').strongNBT() } )
    console.log("MICROSLOP")
    // Motor Extension
    event.remove({ output: 'create_new_age:advanced_motor_extension' })
    event.custom({ type: "create:mechanical_crafting", acceptMirrored: true, key: { A: { item: "create_new_age:overcharged_iron_sheet" }, B: { item: "create_new_age:overcharged_diamond" }, C: { type: "forge:nbt", item: "kubejs:primitive_circuit_board", nbt: { type: "Relay" } }, D: { type: "forge:nbt", item: "kubejs:primitive_circuit_board", nbt: { type: "Control" } }, E: { item: "create_new_age:advanced_motor" } }, pattern: [ "AAAAA", "BCEDB", "AAAAA" ], result: { item: "create_new_age:advanced_motor_extension" } })
    event.custom({ type: "create:mechanical_crafting", acceptMirrored: true, key: { A: { item: "create_new_age:overcharged_iron_sheet" }, B: { item: "create_new_age:overcharged_diamond" }, C: { type: "forge:nbt", item: "kubejs:modified_breadboard", nbt: { circuits: [1, 1, 0], CustomModelData: 6 } }, E: { item: "create_new_age:advanced_motor" } }, pattern: [ "AAAAA", "BCE B", "AAAAA" ], result: { item: "create_new_age:advanced_motor_extension" } })
    // Fluid Pump
    event.remove({ output: "vs_logistics:fluid_pump"})
    event.shaped(Item.of("vs_logistics:fluid_pump", 1), ["ABA","ACA","AAA"], {A: Item.of("vs_logistics:fluid_pump"), B: Item.of("kubejs:primitive_circuit_board", '{type: "Control"}').strongNBT(), C: "minecraft:dried_kelp_block"})
    console.log("MICROSLOP")
    // O2 bubble generator
    event.remove({ output: "beyond_oxygen:bubble_generator"})
    console.log("MICROSLOP")
    // IC (ComputerCraft)
    event.replaceInput({ input: "ccbr:basic_integrated_circuit" }, 'ccbr:basic_integrated_circuit',  Item.of("kubejs:primitive_circuit_board", '{type: "Control"}').strongNBT())       
    event.replaceInput({ input: "ccbr:integrated_circuit" }, 'ccbr:integrated_circuit',  Item.of("kubejs:modified_breadboard", '{circuits: [1,1,1], CustomModelData: 7}').strongNBT())       
    console.log("MICROSLOP")
    // 
})