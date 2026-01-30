//start of the superscript
let itemids=[
    'some_peripherals:radar',
    'advancedperipherals:player_detector',
    'mekanism:mekasuit_bodyarmor',
    'mekanism:mekasuit_boots',
    'mekanism:mekasuit_helmet',
    'mekanism:mekasuit_pants',
    'mekanism:digiminer',
    'mekanism:teleportation_core',
    'mekanism:teleporter',
    'mekanism:teleporter_frame',
    'tacz:ammo',
    'createbigcannons:flak_autcannon_round',
    'wrbdrones:shahed136',
    'wrbdrones:radio',
    'zerocontact:steel_plate',
    'zerocontact:si_plate',
    'zerocontact:bc_plate',
    'zerocontact:ceramic_plate',
    'mekanism:qio_drive',
    'mekanism:qio_drive_hyper_dense',
    'mekanism:qio_drive_time_dilating',
    'mekanism:qio_drive_supermassive',
    
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
    'superbwarfare:',
    
]
ServerEvents.recipes(event =>{

for(var i=0;i<itemids.length;i++){
    event.remove({output: itemids[i] })
}

event.remove({mod: vs_tournament})
//note allow ship assembler

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
    //mek storage
    //ae2 spatial
    //ae2 autocrafting
    //gravitron
    //zero contact plate steel si bc ceramic (process, diamond+quartz+2 zero contact steel sheets)
    //all zero contact armor
    //zero contact helmets (steel helmet+zero contact steel sheets)
    //controlcraft camera (exposure camera+mech bearing)
    //controlcraft camera link (exposure camera+create link)
    //air thrusters?