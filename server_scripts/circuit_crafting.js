// ServerEvents.recipes((event) => { 
//     event.recipes.mbd2.wafer_etching() // Wafer Etching
//         .id("mbd2:wafer_etching_template")
//         .inputItems("kubejs:exposed_wafer")
//         .inputFluids("kubejs:developer_solution 125")   
//         .perTick(builder => builder
//             .inputFE(625) 
//         )    
//         .duration(80); 
//     event.recipes.mbd2.exposing() // Wafer Exposure
//         .id("mbd2:exposing_template")
//         .inputItems('destroy:photo_mask')
//         .inputItems('kubejs:silicon_wafer')
//         .inputFluids('kubejs:photo_resist 125')
//         .perTick(builder => builder
//             .inputFE(625*4) //2500
//         )    
//         .duration(20);      
// });
// MBDMachineEvents.onBeforeRecipeModify('mbd2:pattern_etcher', (event) => { // Wafer Etching
//     const mbdEvent = event.getEvent();
//     const { machine } = mbdEvent;

//     const itemTrait = machine.getTraitByName("item_slot");
//     if (!itemTrait) return;

//     const stack = itemTrait.storage.getStackInSlot(0);
//     if (!stack || stack.isEmpty()) return;

//     const wrapped = Item.of(stack);
//     const rawNBT = wrapped.nbt;
//     if (!rawNBT || !rawNBT.type) return;

//     const finalNBT = {
//         type: rawNBT.type,
//         CustomModelData: rawNBT.CustomModelData
//     };

//     const output = Item.of("kubejs:etched_wafer").withNBT(finalNBT);

//     const builder = mbdEvent.getRecipe().toBuilder();
//     builder.outputItems([output]); 

//     mbdEvent.setRecipe(builder.buildMBDRecipe());
// });

// MBDMachineEvents.onBeforeRecipeModify('mbd2:exposure_chamber', event => { // Exposure
//     const PATTERNS = {
//         "28175": { type: "cpu", modelData: 1 },
//         "9638": { type: "ram", modelData: 2 },
//         "-14365": { type: "ssd", modelData: 3 },
//         "15099": { type: "circuit", modelData: 4 }
//     };
//     const mbdEvent = event.getEvent();
//     const { machine } = mbdEvent;

//     const itemTrait = machine.getTraitByName("input_slot");
//     if (!itemTrait) return;

//     const maskStack = itemTrait.storage.getStackInSlot(0);
//     if (!maskStack || maskStack.isEmpty()) return;

//     const mask = Item.of(maskStack);
//     const nbt = mask.nbt;
//     console.log(nbt)
//     const builder = mbdEvent.getRecipe().toBuilder();
    
//     // If no Pattern NBT or invalid pattern, ruined wafer
//     if (!nbt || nbt.Pattern === undefined) {
//         builder.outputItems([Item.of("kubejs:silicon_wafer")]);
//         mbdEvent.setRecipe(builder.buildMBDRecipe());
//         return;
//     }

//     var Key = String(nbt.Pattern);
//     const waferData = PATTERNS[Key];
    
//     if (!waferData) {
//         console.log("Invalid pattern, outputting ruined wafer:", patternKey);
//         builder.outputItems([Item.of("kubejs:ruined_wafer")]);
//         mbdEvent.setRecipe(builder.buildMBDRecipe());
//         return;
//     }
//     const output = Item.of("kubejs:exposed_wafer").withNBT({
//         type: waferData.type,
//         CustomModelData: waferData.modelData
//     });

//     builder.outputItems([output]);
//     mbdEvent.setRecipe(builder.buildMBDRecipe());
// });