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
    'createbigcannons:flak_autcannon_round'
    //flak shells above from
    //mek storage
    //ae2 spatial
    //ae2 autocrafting
]

ServerEvents.recipes(event =>{

for(i=0;i<itemids.length;i++){
    event.remove({output: itemids[i] })
}

});

let gunids=[]
TaCZServerEvents.gunIndexLoad((event) => {
const id = event.getId().toString();
for(i=0;i<gunids.length;i++){
   if(id==gunids[1]){
       return event.removeGun();
   }
}
return event.removeGun();
    
});

