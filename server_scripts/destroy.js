ServerEvents.recipes(event => {
    event.custom({
    "type": "minecraft:crafting_shaped",
    "pattern": [
      "TPS",
      "PCP",
      " P "
    ],
    "key": {
      "T": {
        "item": "minecraft:string"
      },
      "P": {
        "tag": "destroy:plastics/rigid"
      },
      "S": {
        "item": "minecraft:string"
      },
      "C": {
        "type": "destroy:circuit_pattern_item",
        "item": "destroy:circuit_mask",
        "pattern": "destroy:shared_atlas_0"
      }
    },
    "result": {
      "item": "minecraft:stone"
    }})
    console.log('Destroy Recipes WORKING!!!!11!')
   event.shapeless(
  Item.of('kubejs:computer_chip_beta',{doping: "undoped"}), // arg 1: output
  [
    'minecraft:stone',
    'minecraft:yellow_dye'  
  ]
  
)
event.shapeless(
Item.of('kubejs:computer_chip_beta',{doping: "p_doped"}), // arg 1: output
  [
    'minecraft:stone',
    'minecraft:red_dye'  
  ]
)
event.shapeless(
Item.of('kubejs:computer_chip_beta',{doping: "pn_doped"}), // arg 1: output
  [
    'minecraft:stone',
    'minecraft:blue_dye'  
  ]
)
event.shapeless(
"minecraft:red_dye", // arg 1: output
  [
    'minecraft:stone',
    Item.of('kubejs:computer_chip_beta',{doping: "undoped"}).strongNBT()  
  ]
)
event.shapeless(
Item.of('kubejs:logic_core',{doping: "pn_doped",CustomModelData: 2}), // arg 1: output
  [
    'minecraft:glass',
    'minecraft:blue_dye'  
  ]
)
event.shapeless(
Item.of('kubejs:logic_core',{doping: "p_doped",CustomModelData: 1}), // arg 1: output
  [
    'minecraft:glass',
    'minecraft:red_dye'  
  ]
)
event.shapeless(
Item.of('kubejs:exposed_wafer',{type: "circuit",CustomModelData: 4}), // arg 1: output
  [
    'minecraft:glass',
    'minecraft:yellow_dye'  
  ]
)
event.shapeless(
Item.of('kubejs:exposed_wafer',{type: "ram",CustomModelData: 2}), // arg 1: output
  [
    'minecraft:glass',
    'minecraft:stone',
    'minecraft:yellow_dye'  
  ]
)
event.shapeless(
Item.of('kubejs:etched_wafer',{type: "cpu",CustomModelData: 1}), // arg 1: output
  [
    'minecraft:glass',
    'minecraft:stone'  
  ]
)
event.shapeless(
Item.of('kubejs:modified_breadboard',{circuits: [0,0,0], CustomModelData:0}), // arg 1: output
  [
    'minecraft:gold_nugget',
    'minecraft:stone' 
  ]
)
event.shapeless(
Item.of('kubejs:modified_breadboard',{circuits: [1,0,0], CustomModelData:0}), // arg 1: output
  [
    'minecraft:iron_nugget',
    'minecraft:stone' 
  ]
)
event.shapeless(
Item.of('kubejs:modified_breadboard',{circuits: [0,1,0], CustomModelData:0}), // arg 1: output
  [
    'minecraft:gold_nugget',
    'minecraft:glass' 
  ]
)
event.shapeless(
Item.of('kubejs:modified_breadboard',{circuits: [0,0,1], CustomModelData:0}), // arg 1: output
  [
    'minecraft:iron_nugget',
    'minecraft:glass' 
  ]
)
})

