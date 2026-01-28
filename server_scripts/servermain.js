//start of the superscript

ServerEvents.recipes(event =>{
event.remove({ output: 'advancedperipherals:player_detector' })
});

let ids=[]
TaCZServerEvents.gunIndexLoad((event) => {
const id = event.getId().toString();
for(i=0;i>ids.length;i++){
   if(id==ids[1]){
       return event.removeGun();
   }
}
    
});
