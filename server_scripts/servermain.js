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

    'createbigcannons:log_cannon_end',
    'createbigcannons:log_cannon_chamber'
    
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
ServerEvents.recipes(event =>{

for(var i=0;i<itemids.length;i++){
    event.remove({output: itemids[i] })
}

event.remove({ not: {output: 'vs_tournament:ship_assembler' } , mod: vs_tournament})
//note allow ship assembler

event.remove({mod:cosmos})

for(var i=0;i<superbomits.length;i++){
    event.remove({ not: { output:superbomits[i] }, mod: superbwarfare })
}


});

let gunids=[]
TaCZServerEvents.gunIndexLoad((event) => {
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

    //all the cbc changes (log cannons pure craft)(cast iron from blasting iron, simple process)(brass from normal making, complex process)