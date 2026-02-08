ServerEvents.recipes(event => {
    const PATTERNS = {
      "ae2:logic_processor_press": {type: "Control", CustomModelData: 1}, // Control
      "ae2:calculation_processor_press": {type: "Sequence", CustomModelData: 2}, // Sequence
      "ae2:engineering_processor_press": {type: "Relay", CustomModelData: 3} // Relay
    }
  event.custom({ // Liquid Resin
    "type": "create:mixing",
    "heatRequirement": "heated",
    "ingredients": [
        {
            "item": "createpropulsion:pine_resin"
        },
        {
            "item": "createpropulsion:pine_resin"
        },
        {
            "amount": 40,
            "fluid": "tfmg:crude_oil"
        }
    ],
    "results": [
        {
            "amount": 150,
            "fluid": "kubejs:liquid_resin"
        }
    ]})
  event.custom({ // Phenolic Paper
  "type": "create:filling",
  "ingredients": [
    {
      "item": "minecraft:paper"
    },
    {
      "amount": 80,
      "fluid": "kubejs:liquid_resin",
      "nbt": {}
    }
  ],
  "results": [
    {
      "item": "kubejs:phenolic_paper"
    }
  ]})
  event.custom({ // Phenolic Board
    "type": "create:compacting",
    "heatRequirement": "heated",
    "ingredients": [ // WHY ISN'T THERE A COUNT OPTION
        {
            "item": "kubejs:phenolic_paper"
        },
        {
            "item": "kubejs:phenolic_paper"
        },
        {
            "item": "kubejs:phenolic_paper"
        },
        {
            "item": "kubejs:phenolic_paper"
        },
        {
            "item": "kubejs:phenolic_paper"
        },
        {
            "item": "kubejs:phenolic_paper"
        },
        {
            "item": "kubejs:phenolic_paper"
        },
        {
            "item": "kubejs:phenolic_paper",
        },
    ],
    "results": [
        {
            "item": "kubejs:phenolic_board"
        }
    ]})
  event.custom({ // Conductive Paste
    "type": "create:mixing",
    "heatRequirement": "heated",
    "ingredients": [
        {
            "tag": "forge:dusts/iron"
        },
        {
            "tag": "forge:dusts/iron"
        },
        {
            "tag": "forge:dusts/iron"
        },
        {
            "amount": 125,
            "fluidTag": "forge:paste_for_conduction"
        }
    ],
    "results": [
        {
            "amount": 215,
            "fluid": "kubejs:conductive_paste"
        }
    ]})
  event.custom({ // Coated Board (or whatever i am calling it)
  "type": "create:filling",
  "ingredients": [
    {
      "item": "kubejs:phenolic_board"
    },
    {
      "amount": 110,
      "fluid": "kubejs:conductive_paste",
      "nbt": {}
    }
  ],
  "results": [
    {
      "item": "kubejs:pasted_board"
    }
  ]})
  Object.entries(PATTERNS).forEach(([element, NBT]) => { // I hate JS so much
    console.log(element," NBT: ", NBT)

  event.custom({
    "type": "create:deploying",
    "ingredients": [
        {
            "item": "kubejs:pasted_board"
        },
        {
            "item": element
        }
    ],
    "keepHeldItem": true,
    "results": [
        {
            "item": "kubejs:traced_circuit_board",
            "nbt": NBT
        }
    ]})
  event.custom({ // Curing (1st Instance)
  "type": "createbigcannons:melting",
  "conditions": [
    {
      "type": "forge:not",
      "value": {
        "type": "forge:nbt",
        "item": "kubejs:traced_circuit_board",
        "nbt": NBT,
      }
    }
  ],
  "heatRequirement": "heated",
  "ingredients": [
    {
     "type": "forge:nbt",
        "item": "kubejs:traced_circuit_board",
        "nbt": NBT,
    }
  ],
  "processingTime": 1620,
  "results": [
    {
      "type": "forge:nbt",
        "item": "kubejs:baked_circuit_board",
        "nbt": NBT,
    }
  ]},)
  var ingredient = {"type": "forge:nbt", "item":"kubejs:baked_circuit_board", "nbt": NBT}
  var transitionalItem = {"item":"kubejs:processed_circuit_board","nbt": NBT}
  event.custom({ //i'm too tired to figure out resilt
    // 0 documentation on this (that i can be bothered to find) so i'll decode as i go
  "type": "create:sequenced_assembly",
  "ingredient": ingredient,
  "loops": 4,
  "results": [
    transitionalItem
  ],
  "sequence": [
    {
    "type": "create:deploying",
    "ingredients": [
        transitionalItem,
        {
            "item": "kubejs:conductive_pellet"
        }
    ],
    "results": [
      transitionalItem
    ]},
    {
      "type": "create:pressing",
      "ingredients": [
          transitionalItem
      ],
      "results": [
        transitionalItem
      ]
    },
  ],
  "transitionalItem": // the weird ass half item thery got in the in-between phases
    transitionalItem
})
  ingredient = {"type": "forge:nbt", "item":"kubejs:processed_circuit_board", "nbt": NBT}
  transitionalItem = {"item":"kubejs:traced_circuit_board","nbt": {CustomModelData: 99}}
  event.custom({ //copy and pasting this because this has to be the WORST recipe to make hwk
    // 0 documentation on this (that i can be bothered to find) so i'll decode as i go
  "type": "create:sequenced_assembly",
  "ingredient": ingredient,
  "loops": 1,
  "results": [
    {
      "type": "forge:nbt",
      "item": "kubejs:housed_circuit_board",
      "nbt": { type: NBT.type }
    }
  ],
  "sequence": [
    { // Coated Board (or whatever i am calling it)
  "type": "create:filling",
  "ingredients": [
      transitionalItem,
    {
      "amount": 110,
      "fluid": "kubejs:liquid_resin",
      "nbt": {}
    }
  ],
  "results": [
    transitionalItem
  ]},
    {
    "type": "create:deploying",
    "ingredients": [
        transitionalItem,
        {
          "item": "create:iron_sheet"
        }
    ],
    "results": [
      transitionalItem
    ]
    },
  ],
  "transitionalItem": // the weird ass half item thery got in the in-between phases
    transitionalItem
  
})
  event.custom({
    "type": "create:deploying",
    "ingredients": [
        {
        "type": "forge:nbt",
        "item": "kubejs:lead_frame",
        "nbt": {coated: true, CustomModelData: 1}
        },
        {
            "type": "forge:nbt",
            "item": 'kubejs:housed_circuit_board',
            "nbt": {type: NBT.type}
        }
    ],
    "results": [
        {
            "item": "kubejs:primitive_circuit_board",
            "nbt": {type: NBT.type}
        }
    ]})
});
  event.custom({ // Pellet Mold
    "type": "create:compacting",
    "heatRequirement": "heated",
    "ingredients": [ // WHY ISN'T THERE A COUNT OPTION
        {
            "tag": "destroy:plastics/rigid"
        },
        {
            "item": "spelunkery:diamond_shard"
        },
    ],
    "results": [
        {
          "item": "kubejs:pellet_mold"
        },
        {
          "item": "spelunkery:diamond_shard"
        }
    ]})
  event.custom({ // Conductive Pellet
  "type": "create:filling",
  "ingredients": [
    {
      "item": "kubejs:pellet_mold"
    },
    {
      "amount": 90,
      "fluid": "kubejs:conductive_slurry",
      "nbt": {}
    }
  ],
  "results": [
    {
      "item": "kubejs:conductive_pellet"
    }
  ]})
  event.custom({ // Conductive Paste
    "type": "create:mixing",
    "heatRequirement": "heated",
    "ingredients": [
        {
            "tag": "forge:dusts/copper"
        },
        {
            "tag": "forge:dusts/copper"
        },
        {
            "tag": "forge:dusts/coal"
        },
        {
            "item": "createpropulsion:pine_resin"
        },
        {
            "amount": 125,
            "fluidTag": "minecraft:water"
        }
    ],
    "results": [
        {
            "amount": 245,
            "fluid": "kubejs:conductive_slurry"
        }
    ]})
  event.custom({
  "type": "create:mechanical_crafting",
  "acceptMirrored": false,
  "key": {
    "A": {
      "item": "kubejs:old_copper_sheet"
    },
    "C": {
      "item": "minecraft:gold_nugget"
    },
  },
  "pattern": [
    "   ",
    " A ",
    "CCC",
  ],
  "result": {
    "type": "forge:nbt",
    "item": "kubejs:lead_frame",
    "nbt": {coated: false, CustomModelData: 0}
  }
})
  event.custom({
  "type": "create:pressing",
  "ingredients": [
    {
      "item": "create:copper_sheet"
    }
  ],
  "processingTime": 50,
  "results": [
    {
      "item": "kubejs:old_copper_sheet"
    }
  ]
})
event.custom({ // Coated Board (or whatever i am calling it)
  "type": "create:filling",
  "ingredients": [
    {
      "type": "forge:nbt",
      "item": "kubejs:lead_frame",
      "nbt": {coated: false, CustomModelData: 0}
    },
    {
      "amount": 110,
      "fluid": "kubejs:liquid_resin",
      "nbt": {}
    }
  ],
  "results": [
    {
      "type": "forge:nbt",
      "item": "kubejs:lead_frame",
      "nbt": {coated: true, CustomModelData: 1}
    }
  ]})
event.custom({
  "type": "create:mechanical_crafting",
  "acceptMirrored": true,
  "key": {
    "C": {
      "item": "tfmg:copper_wire"
    },
    "D": {
      "item": "minecraft:iron_nugget"
    },
    "M": {
      "item": "kubejs:conductive_pellet"
    },
    "S": {
      "tag": "destroy:plastics/rigid"
    }
  },
  "pattern": [
    " C   ",
    "SMSSS",
    "DDDDD",
    "SMSSS",
    " C   "
  ],
  "result": {
    "count": 1,
    "item": "kubejs:modified_breadboard"
  }
})
})
