// let control = Item.of('kubejs:primitive_circuit_board', {type: 'Sequence'})
// ServerEvents.recipes(event => {
//     // Control Circuit
//     event.remove({ output: 'mekanism:basic_control_circuit' })
//     event.custom({"type":"mekanism:metallurgic_infusing","chemicalInput":{"amount":20,"tag":"mekanism:redstone"},"itemInput":{"ingredient":{"type": "forge:nbt","item":"kubejs:primitive_circuit_board","nbt": {type: "Control"}}},"output":{"item":"mekanism:basic_control_circuit"}})
//     // Basic Motor Extension
//     event.remove({ output: 'create_new_age:basic_motor_extension' })
//     console.log("MICROSLOP CREATE BASIC MOTOR EXTENSION WITH BREADBOARD")
//     circuit_breadboarder(event,'create_new_age:basic_motor_extension',1,
//         [
//             'AAA',
//             'BCD', 
//             'AAA'
//         ],
//         {
//             A: 'create_new_age:overcharged_iron',
//             B: 'create_new_age:basic_motor', 
//             C: Item.of('kubejs:primitive_circuit_board', {type: 'Control'}),
//             D: Item.of('kubejs:primitive_circuit_board', {type: 'Sequence'})
//         },
//         2
//     )
// })
// function circuit_breadboarder(event,id,quant,rows,items,breadboard_slot) { // item id, quantity, rows (eg: control = ['111','222','333'], items (eg var = {A:"dsadas",B:"SDSAD"}), circuits used)
//     let circuit_storage = []
//     let items_redefined = {}
//     let non_circuit_items = {}
//     let circuit = [0,0,0] // Control, Relay, Sequence
//     let non_circuit_final_key = 0
//     console.log("ITEMS_INPUT",items)
//     Object.entries(items).forEach(([key, item]) => {
//         console.log`SPECIAL_WORD KEY: ${key} ITEM: `
//         if (!item?.nbt?.type) {items_redefined[key] = item, non_circuit_items[key] = item, non_circuit_final_key += 1}
//         else {
//             circuit_storage.push(item.nbt.type)
//             console.log("ITEM.NBT.TYPE",item.nbt.type)
//             items_redefined[key] = Item.of('kubejs:primitive_circuit_board', {type: item.nbt.type})
//     }});
//     console.log("ITEMS_REDEFINED",items_redefined)
//     console.log("CONTROL STORAGE",circuit_storage)
//     Object.entries(circuit_storage).forEach(([key, item]) => {
//         if (item == "Control") {circuit[0] = 1}
//         else if (item == "Relay") {circuit[1] = 1}
//         else if (item == "Sequence") {circuit[2] = 1}
//     });
//     non_circuit_items[breadboard_slot] = Item.of('kubejs:modified_breadboard', {circuits: circuit})
//     event.shaped(
//         Item.of(id,quant),
//         rows,
//         items_redefined
//     )
//     event.shaped(
//         Item.of(id,quant),
//         rows,
//         non_circuit_items
//     )

// }