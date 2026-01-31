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

    'tacz:ammo',

    'createbigcannons:flak_autcannon_round',

    'wrbdrones:shahed136',
    'wrbdrones:radio',

    'zerocontact:steel_plate',
    'zerocontact:si_plate',
    'zerocontact:bc_plate',
    'zerocontact:ceramic_plate',


    'mekanism:metallurgic_infuser',
    'mekanismgenerators:heat_generator',
    'mekanism:basic_universal_cable',
    'mekanism:basic_chemical_tank',
    'mekanism:basic_mechanical_pipe',
    //'mekanism:basic__factory', 
    'mekanism:basic_smelting_factory',
    'mekanism:basic_enriching_factory',
    'mekanism:basic_crushing_factory',
    'mekanism:basic_compressing_factory',
    'mekanism:basic_combining_factory',
    'mekanism:basic_purifying_factory',
    'mekanism:basic_injecting_factory',
    'mekanism:basic_infusing_factory',
    'mekanism:basic_sawing_factory',

    'cosmos:detonation_controler',
    'cosmos:detonation_target',

    'createbigcannons:cast_iron_ingot',
    //logs craft
    'createbigcannons:log_cannon_end',
    'createbigcannons:log_cannon_chamber',
    //cast iron, blast to make cast iron and then craft
    'createbigcannons:cast_iron_cannon_end',
    'createbigcannons:cast_iron_sliding_breech',
    'createbigcannons:cast_iron_quickfiring_breech',   
    'createbigcannons:cast_iron_cannon_chamber',
    'createbigcannons:cast_iron_cannon_barrel',
    //bronze, normal make then complex process
    'createbigcannons:bronze_cannon_end',
    'createbigcannons:bronze_sliding_breech',
    'createbigcannons:bronze_quickfiring_breech',   
    'createbigcannons:bronze_cannon_chamber',
    'createbigcannons:bronze_cannon_barrel',  
    
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
    'superbwarfare:smoke_grenade',
    'superbwarfare:taser',
    'superbwarfare:rpg_rocket_standard',
    'superbwarfare:c4_bomb',
    'superbwarfare:claymore_mine',
    'superbwarfare:blu_43_mine',
    'superbwarfare:rpg',
    
]

let noguns=[

]
ServerEvents.recipes(event =>{

for(var i=0;i<itemids.length;i++){
    event.remove({output: itemids[i] })
}

for(var i=0;i<noguns.length;i++){
    event.remove({output: noguns[i] })
}

event.remove({ not: {output: 'vs_tournament:ship_assembler' } , mod: vs_tournament})
//note allow ship assembler

event.remove({mod:cosmos})

for(var i=0;i<superbomits.length;i++){
    event.remove({ not: { output:superbomits[i] }, mod: superbwarfare })
}



//cbc changes
event.blasting( 'createbigcannons:cast_iron_ingot','minecraft:iron_ingot' )
//logs
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
    Item.of('createbigcannons:cast_iron_autocannon_breech'),
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
    Item.of('createbigcannons:cast_iron_autocannon_recoil_spring'),
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
    Item.of('createbigcannons:cast_iron_autocannon_barrel'),
    [
    ' A ',
    ' A ', 
    ' A '
  ],
  {
    A: 'createbigcannons:cast_iron_block'
  }
)




//bronze(brass actually)
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

    // MEK FACTORIES WITH TFMG
    // 'mekanism:basic__factory', 'mekanism:basic__factory'smelting,'mekanism:basic_enriching_factory','mekanism:basic_crushing_factory','mekanism:basic_compressing_factory','mekanism:basic_combining_factory','mekanism:basic_purifying_factory','mekanism:basic_injecting_factory','mekanism:basic_infusing_factory','mekanism:basic_sawing_factory'

    //ae2 autocrafting
    //ae2 all the changes we really need to do whatever they are

    //gravitron-weaken

    //make trackwork wheels cheaper, part of vehicle buffing

    //mek generation remove? solar, heat(fs but recip or no?), gas burning, bio

    //zero contact plate steel si bc ceramic (process, diamond+quartz+2 zero contact steel sheets)
    //all zero contact armor
    //zero contact helmets (steel helmet+zero contact steel sheets)

    //controlcraft camera (exposure camera+mech bearing)
    //controlcraft camera link (exposure camera+create link)
    
    //air thrusters? starlance

    //ore excav recipe change (amethyst for wanderlite matrix bc difficulty)

    //tinkers blocks(tp, op stuff)

    //beyond oxygen see how it works, o2 bubble gen

    //create nuclear???

    //soph backpacks, remove high up upgrades

    //ender transmission

    //add radar fuze recipe