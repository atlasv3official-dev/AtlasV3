//start of the superscript
let itemids=[
    'some_peripherals:radar',

    'advancedperipherals:player_detector',
    'advancedperipherals:weak_automata_core',

    'mekanism:mekasuit_bodyarmor',
    'mekanism:mekasuit_boots',
    'mekanism:mekasuit_helmet',
    'mekanism:mekasuit_pants',
    'mekanism:digiminer',
    'mekanism:teleportation_core',
    'mekanism:teleporter',
    'mekanism:teleporter_frame',
    'mekanism:qio_drive',
    'mekanism:qio_drive_hyper_dense',
    'mekanism:qio_drive_time_dilating',
    'mekanism:qio_drive_supermassive',
    'mekanism:spatial_io_port',
    'mekanism:spatial_pylon',
    'mekanism:spatial_anchor',

    //tacz stuff

    'createbigcannons:flak_autcannon_round',

    'wrbdrones:shahed136',
    'wrbdrones:radio',

    'zerocontact:steel_plate',
    'zerocontact:si_plate',
    'zerocontact:bc_plate',
    'zerocontact:ceramic_plate',


    'cosmos:detonation_controler',
    'cosmos:detonation_target',

    'createbigcannons:cast_iron_ingot',
    

      //trackwork(done)
    'trackwork:large_simple_wheel',
    'trackwork:simple_wheel',
    'trackwork:med_simple_wheel',
    'trackwork:small_simple_wheel',
    'trackwork:oleo_wheel',

    
    //soph backpacks upgrades
    'sophisticatedbackpacks:upgrade_base',

    //broken bandages
    'immersivehealing:bandage_small',
    
]
let superbomits=[
    'superbwarfare:mortar_deployer',
    'superbwarfare:mortar_barrel',
    'superbwarfare:mortar_base_plate',
    'superbwarfare:mortar_bipod',
    'superbwarfare:potion_mortar_shell',
    'superbwarfare:mortar_shell',
    'superbwarfare:drone',
    'superbwarfare:monitor',
    'superbwarfare:hand_grenade',
    'superbwarfare:rgo_grenade',
    'superbwarfare:m18_smoke_grenade',
    'superbwarfare:taser',
    'superbwarfare:rpg_rocket_standard',
    'superbwarfare:c4_bomb',
    'superbwarfare:claymore_mine',
    'superbwarfare:blu_43_mine',
    'superbwarfare:rpg',
    'superbwarfare:propeller',
    'superbwarfare:motor',
    'superbwarfare:cell',
    'superbwarfare:fusee',
    'superbwarfare:high_energy_explosives',
    'superbwarfare:grain',
    'superbwarfare:primer',
    'superbwarfare:detonator',
    'superbwarfare:artillery_indicator',
    'superbwarfare:firing_parameters',
    'superbwarfare:ptkm_1r',
    'superbwarfare:tm_62',
    'superbwarfare:potion_mortar_shell',
  'superbwarfare:taser_electrode',
  'superbwarfare:crowbar',
  'superbwarfare:monitor',
  'superbwarfare:sandbag',
  'superbwarfare:barbed_wire',
  'superbwarfare:dragon_teeth',



    
]

let tournamentomits=[
  'vs_tournament:spinner',
'vs_tournament:seat',
'vs_tournament:sensor',
'vs_tournament:explosive_instant_small',
'vs_tournament:explosive_instant_medium',
'vs_tournament:explosive_staged_small'

]

ServerEvents.recipes(event =>{


event.remove({output: itemids })

event.remove({ not: {output: 'vs_tournament:ship_assembler' } , mod: 'vs_tournament'})

event.remove({mod:'cosmos'})

event.remove({not:{output:'createendertransmission:chunk_loader'},mod: 'createendertransmission'})

event.remove({not:{output:superbomits},mod:'superbwarfare'})

//if true is used for compacting it





//dusts
event.recipes.create.crushing(Item.of('mekanism:dust_copper').withChance(0.5),'minecraft:copper_ingot')
event.recipes.create.crushing(Item.of('mekanism:dust_iron').withChance(0.5),'minecraft:iron_ingot')
//straw to string
event.recipes.create.cutting(Item.of('minecraft:string').withChance(0.25),'farmersdelight:straw')
//cbc changes
event.blasting( 'createbigcannons:cast_iron_ingot','minecraft:iron_ingot' )
//logs

//log and cast iron cannons
if(true){
event.shaped(
  Item.of(    'createbigcannons:log_cannon_end', 1), 
  [
    'A A',
    'AAA', 
    ' A '
  ],
  {
    A: 'minecraft:oak_log'
  }
)
event.shaped(
  Item.of('createbigcannons:log_cannon_chamber', 1), 
  [
    'A A',
    'A A', 
    'A A'
  ],
  {
    A: 'minecraft:oak_log'
  }
)

//cast iron
event.shaped(
  Item.of('createbigcannons:cast_iron_cannon_end', 1), 
  [
    'A A',
    'AAA', 
    ' A '
  ],
  {
    A: 'createbigcannons:cast_iron_block'
  }
)
event.shaped(
  Item.of('createbigcannons:cast_iron_cannon_chamber', 1), 
  [
    'A A',
    'A A', 
    'A A'
  ],
  {
A: 'createbigcannons:cast_iron_block'  }
)
event.shaped(
  Item.of('createbigcannons:cast_iron_sliding_breech', 1), 
  [
    'A A',
    'AAA', 
    'ABA'
  ],
  {
A: 'createbigcannons:cast_iron_block',   
 B: 'create:mechanical_piston'
  }
)
event.shaped(
  Item.of('createbigcannons:cast_iron_cannon_barrel', 1), 
  [
    'AA ',
    'AA ', 
    'AA '
  ],
  {
    A: 'createbigcannons:cast_iron_block'
  }
)
event.shaped(
    Item.of('createbigcannons:cast_iron_autocannon_breech',1),
    [
    ' A ',
    'A A', 
    'A A'
  ],
  {
    A: 'createbigcannons:cast_iron_block'
  }
)
event.shaped(
    Item.of('createbigcannons:cast_iron_autocannon_recoil_spring',1),
    [
    ' A ',
    'ABA', 
    'ABA'
  ],
  {
    A: 'createbigcannons:cast_iron_block',
    B: 'createbigcannons:recoil_spring'
  }
)
event.shaped(
    Item.of('createbigcannons:cast_iron_autocannon_barrel',1),
    [
    ' A ',
    ' A ', 
    ' A '
  ],
  {
    A: 'createbigcannons:cast_iron_block'
  }
)
}

//bronze cannons
if(true){
let ingot='create:brass_ingot'
let sheet='create:brass_sheet'
let block='create:brass_block'
let scrap='create:brass_nugget'

let t1='createbigcannons:unbored_bronze_cannon_chamber'
//bronze chamber
event.recipes.create.sequenced_assembly(
    [
        Item.of('createbigcannons:bronze_cannon_chamber').withChance(50),
        Item.of('createbigcannons:bronze_cannon_barrel').withChance(10),
        block,
        sheet,
        ingot,
        scrap
    ],

    block,
    
    [
        event.recipes.create.deploying(t1,[t1,sheet]),
        event.recipes.create.deploying(t1,[t1,sheet]),
        event.recipes.create.deploying(t1,[t1,sheet]),
        event.recipes.create.deploying(t1,[t1,sheet]),
        event.recipes.create.pressing(t1,t1),
        event.recipes.create.cutting(t1,t1)
    ]
)
.transitionalItem(t1)
.loops(4)

let t2='createbigcannons:unbored_bronze_cannon_barrel'
//bronze barrel
event.recipes.create.sequenced_assembly(
    [
        Item.of('createbigcannons:bronze_cannon_barrel').withChance(50),
        Item.of('createbigcannons:bronze_cannon_chamber').withChance(10),
        block,
        sheet,
        ingot,
        scrap
    ],
    block,
    [
        event.recipes.create.deploying(t2,[t2,ingot]),
        event.recipes.create.deploying(t2,[t2,ingot]),
        event.recipes.create.deploying(t2,[t2,ingot]),
        event.recipes.create.deploying(t2,[t2,ingot]),
        event.recipes.create.pressing(t2,t2),
        event.recipes.create.cutting(t2,t2),
        event.recipes.create.cutting(t2,t2)
    ]
).transitionalItem(t2).loops(4)

let t3='createbigcannons:bronze_sliding_breechblock'
//bronze cannon end
event.recipes.create.sequenced_assembly(
    [
        Item.of('createbigcannons:bronze_cannon_end').withChance(50),
        block,
        sheet,
        ingot,
        scrap
    ],
    block,
    [
        event.recipes.create.deploying(t3,[t3,block]),
        event.recipes.create.cutting(t3,t3),
        event.recipes.create.deploying(t3,[t3,block]),
        event.recipes.create.cutting(t3,t3),
        event.recipes.create.pressing(t3,t3),
        event.recipes.create.cutting(t3,t3),
    ]
).transitionalItem(t3).loops(4)

let t4='createbigcannons:unbored_bronze_sliding_breech'
//bronze sliding breech
event.recipes.create.sequenced_assembly(
    [
        Item.of('createbigcannons:bronze_sliding_breech').withChance(50),
        Item.of('createbigcannons:bronze_cannon_chamber').withChance(10),
        block,
        sheet,
        ingot,
        scrap
    ],
    block,
    [
        event.recipes.create.deploying(t4,[t4,sheet]),
        event.recipes.create.deploying(t4,[t4,sheet]),
        event.recipes.create.deploying(t4,[t4,ingot]),
        event.recipes.create.deploying(t4,[t4,'create:shaft']),
        event.recipes.create.pressing(t4,t4),
        event.recipes.create.cutting(t4,t4)
    ]
).transitionalItem(t4).loops(4)

let t5='createbigcannons:unbored_bronze_autocannon_barrel'
//bronze autocannon barrel
event.recipes.create.sequenced_assembly(
    [
        Item.of('createbigcannons:bronze_autocannon_barrel').withChance(50),
        ingot,
        sheet,
        scrap
    ],
    ingot,
    [
        event.recipes.create.deploying(t5,[t5,ingot]),
        event.recipes.create.deploying(t5,[t5,ingot]),
        event.recipes.create.pressing(t5,t5),
        event.recipes.create.cutting(t5,t5)
    ]
).transitionalItem(t5).loops(4)

let t6='createbigcannons:unbored_bronze_autocannon_breech'
//bronze autocannon breech
event.recipes.create.sequenced_assembly(
    [
        Item.of('createbigcannons:bronze_autocannon_breech').withChance(50),
        block,
        ingot,
        sheet,
        scrap
    ],
    block,
    [
        event.recipes.create.deploying(t6,[t6,ingot]),
        event.recipes.create.deploying(t6,[t6,ingot]),
        event.recipes.create.deploying(t6,[t6,ingot]),
        event.recipes.create.pressing(t6,t6),
        event.recipes.create.cutting(t6,t6)
    ]
).transitionalItem(t6).loops(4)

let t7='createbigcannons:unbored_bronze_autocannon_recoil_spring'
//bronze autocannon rcs
event.recipes.create.sequenced_assembly(
    [
        Item.of('createbigcannons:bronze_autocannon_recoil_spring').withChance(50),
        Item.of('createbigcannons:bronze_autocannon_barrel').withChance(10),
        ingot,
        sheet,
        scrap
    ],
    ingot,
    [
        event.recipes.create.deploying(t7,[t7,ingot]),
        event.recipes.create.deploying(t7,[t7,ingot]),
        event.recipes.create.deploying(t7,[t7,'createbigcannons:recoil_spring']),
        event.recipes.create.pressing(t7,t7),
        event.recipes.create.cutting(t7,t7)
    ]
).transitionalItem(t7).loops(4)
}
//trackwork
if(true){

  event.shaped(
    Item.of('trackwork:small_simple_wheel',1),
    [
      'AAA',
      'ABA',
      'AAA'
    ],
    {
      A:'minecraft:dried_kelp',
      B:'create:gearbox'
    }
  )
  event.shaped(
    Item.of('trackwork:med_simple_wheel',1),
    [
      'AAA',
      'ABA',
      'AAA'
    ],
    {
      A:'minecraft:dried_kelp',
      B:'trackwork:small_simple_wheel'
    }
  )
  event.shaped(
    Item.of('trackwork:simple_wheel',1),
    [
      'AAA',
      'ABA',
      'AAA'
    ],
    {
      A:'minecraft:dried_kelp',
      B:'trackwork:med_simple_wheel'
    }
  )
  event.shaped(
    Item.of('trackwork:large_simple_wheel',1),
    [
      'AAA',
      'ABA',
      'AAA'
    ],
    {
      A:'minecraft:dried_kelp',
      B:'trackwork:simple_wheel'
    }
  )
  event.shaped(
    Item.of('trackwork:oleo_wheel',1),
    [
      '   ',
      ' A ',
      'BAB'
    ],
    {
      A:'trackwork:small_simple_wheel',
      B:'create:shaft'
    }
  )
}
});

let gunids=[]
TaCZServerEvents.gunIndexLoad(event => {
const id = event.getId().toString();
for(var i=0;i<gunids.length;i++){
   if(id==gunids[1]){
       return event.removeGun();
   }
}
    
});


//MAKE RECIPES FOR
//flak shells

    
    //ae2 autocrafting
    //ae2 all the changes we really need to do whatever they are
    //ae2 has circuitry changes

    //gravitron-weaken


    //zero contact plate steel si bc ceramic (process, diamond+quartz+2 zero contact steel sheets)
    //all zero contact armor
    //zero contact helmets (steel helmet+zero contact steel sheets)

    //controlcraft camera (exposure camera+mech bearing)
    //controlcraft camera link (exposure camera+create link)
    
    //air thrusters? starlance

    //tinkers blocks(tp, op stuff)

    //beyond oxygen see how it works, o2 bubble gen

    //create nuclear???

    //soph backpacks, remove high up upgrades

    //ender transmission

    //add radar fuze recipe
/*zerocontact:steel_plate
[19:31:22] [Render thread/INFO] [minecraft/ChatComponent]: [System] [CHAT] - zerocontact:jpc_armor
[19:31:22] [Render thread/INFO] [minecraft/ChatComponent]: [System] [CHAT] - zerocontact:avs_armor
[19:31:22] [Render thread/INFO] [minecraft/ChatComponent]: [System] [CHAT] - zerocontact:si_plate
[19:31:22] [Render thread/INFO] [minecraft/ChatComponent]: [System] [CHAT] - zerocontact:bc_plate
[19:31:22] [Render thread/INFO] [minecraft/ChatComponent]: [System] [CHAT] - zerocontact:ceramic_plate
[19:31:22] [Render thread/INFO] [minecraft/ChatComponent]: [System] [CHAT] - zerocontact:steel_ingot
[19:31:22] [Render thread/INFO] [minecraft/ChatComponent]: [System] [CHAT] - zerocontact:steel_sheet
[19:31:22] [Render thread/INFO] [minecraft/ChatComponent]: [System] [CHAT] - zerocontact:ceramic_shatters
[19:31:22] [Render thread/INFO] [minecraft/ChatComponent]: [System] [CHAT] - zerocontact:fabric_roll
[19:31:22] [Render thread/INFO] [minecraft/ChatComponent]: [System] [CHAT] - zerocontact:raider_egg
[19:31:22] [Render thread/INFO] [minecraft/ChatComponent]: [System] [CHAT] - zerocontact:fast_mt
[19:31:22] [Render thread/INFO] [minecraft/ChatComponent]: [System] [CHAT] - zerocontact:helmet_6b47_ratnik_emr
[19:31:22] [Render thread/INFO] [minecraft/ChatComponent]: [System] [CHAT] - zerocontact:helmet_6b47_ratnik_arc
[19:31:22] [Render thread/INFO] [minecraft/ChatComponent]: [System] [CHAT] - zerocontact:armor_thor_black
[19:31:22] [Render thread/INFO] [minecraft/ChatComponent]: [System] [CHAT] - zerocontact:helmet_bastion_black
[19:31:22] [Render thread/INFO] [minecraft/ChatComponent]: [System] [CHAT] - zerocontact:helmet_bastion_multicam
[19:31:22] [Render thread/INFO] [minecraft/ChatComponent]: [System] [CHAT] - zerocontact:helmet_bastion_green
[19:31:22] [Render thread/INFO] [minecraft/ChatComponent]: [System] [CHAT] - zerocontact:helmet_untar_blue
[19:31:22] [Render thread/INFO] [minecraft/ChatComponent]: [System] [CHAT] - zerocontact:mask_tagilla_manhunt
[19:31:22] [Render thread/INFO] [minecraft/ChatComponent]: [System] [CHAT] - zerocontact:mask_tagilla_ybey
[19:31:22] [Render thread/INFO] [minecraft/ChatComponent]: [System] [CHAT] - zerocontact:mask_cold_fear
[19:31:22] [Render thread/INFO] [minecraft/ChatComponent]: [System] [CHAT] - zerocontact:cap_cyan
[19:31:22] [Render thread/INFO] [minecraft/ChatComponent]: [System] [CHAT] - zerocontact:armor_untar_blue
[19:31:22] [Render thread/INFO] [minecraft/ChatComponent]: [System] [CHAT] - zerocontact:armor_hexgrid_black
[19:31:22] [Render thread/INFO] [minecraft/ChatComponent]: [System] [CHAT] - zerocontact:helmet_altyn_visor
[19:31:22] [Render thread/INFO] [minecraft/ChatComponent]: [System] [CHAT] - zerocontact:helmet_airframe
[19:31:22] [Render thread/INFO] [minecraft/ChatComponent]: [System] [CHAT] - zerocontact:armor_6b2
[19:31:22] [Render thread/INFO] [minecraft/ChatComponent]: [System] [CHAT] - zerocontact:armor_6b23_1
[19:31:22] [Render thread/INFO] [minecraft/ChatComponent]: [System] [CHAT] - zerocontact:armor_6b23_2
[19:31:22] [Render thread/INFO] [minecraft/ChatComponent]: [System] [CHAT] - zerocontact:armor_defender_2
[19:31:22] [Render thread/INFO] [minecraft/ChatComponent]: [System] [CHAT] - zerocontact:backpack_t20_umbra
[19:31:22] [Render thread/INFO] [minecraft/ChatComponent]: [System] [CHAT] - zerocontact:backpack_t20_multicam
[19:31:22] [Render thread/INFO] [minecraft/ChatComponent]: [System] [CHAT] - zerocontact:dog_tag
[19:31:22] [Render thread/INFO] [minecraft/ChatComponent]: [System] [CHAT] - zerocontact:armband_black
[19:31:22] [Render thread/INFO] [minecraft/ChatComponent]: [System] [CHAT] - zerocontact:armband_red
[19:31:22] [Render thread/INFO] [minecraft/ChatComponent]: [System] [CHAT] - zerocontact:armband_green
[19:31:22] [Render thread/INFO] [minecraft/ChatComponent]: [System] [CHAT] - zerocontact:armband_blue
[19:31:22] [Render thread/INFO] [minecraft/ChatComponent]: [System] [CHAT] - zerocontact:armband_white
[19:31:22] [Render thread/INFO] [minecraft/ChatComponent]: [System] [CHAT] - zerocontact:armband_yellow
[19:31:22] [Render thread/INFO] [minecraft/ChatComponent]: [System] [CHAT] - zerocontact:armband_flora
*/
