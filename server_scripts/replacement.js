// let control = Item.of('kubejs:primitive_circuit_board', {type: 'Sequence'})
ServerEvents.recipes(event => {
    // Control Circuit
    event.remove({ output: 'mekanism:basic_control_circuit' })
    event.custom({"type":"mekanism:metallurgic_infusing","chemicalInput":{"amount":20,"tag":"mekanism:redstone"},"itemInput":{"ingredient":{"type": "forge:nbt","item":"kubejs:primitive_circuit_board","nbt": {type: "Control"}}},"output":{"item":"mekanism:basic_control_circuit"}})
    console.log("MICROSLOP")
    // Basic Motor Extension
    event.remove({ output: 'create_new_age:basic_motor_extension' })
    event.shaped(
    Item.of('create_new_age:basic_motor_extension', 1), 
    [
        'AAA',
        'BCD', 
        'AAA'
    ],
    {
        A: 'create_new_age:overcharged_iron_sheet',
        B: 'create_new_age:basic_motor',  
        C: Item.of("kubejs:primitive_circuit_board", '{type: "Relay"}').strongNBT(),
        D: Item.of("kubejs:primitive_circuit_board", '{type: "Control"}').strongNBT()
    }
    )
    event.shaped(
    Item.of('create_new_age:basic_motor_extension', 1), 
    [
        'AAA',
        'B C', 
        'AAA'
    ],
    {
        A: 'create_new_age:overcharged_iron_sheet',
        B: 'create_new_age:basic_motor',  
        C: Item.of("kubejs:modified_breadboard", '{circuits: [1,1,0], CustomModelData: 6}').strongNBT()
    }
    )
})

