ItemEvents.rightClicked('kubejs:modified_breadboard', event => {
if (event.level.isClientSide()) return
const player = event.player;
const offHandItem = player.offHandItem;
const mainHandItem = player.mainHandItem;
var mainHandData = mainHandItem.nbt
var offHandData = false
if (!mainHandData) {
    mainHandData = ({
        circuits: [0, 0, 0],
        CustomModelData: 0
    })
    mainHandItem.setNbt(mainHandData)

}
if (!offHandItem.isEmpty() && offHandItem.nbt && offHandItem.nbt.type) {
  offHandData = offHandItem.nbt.type
}
if (player.isShiftKeyDown()) { // Removing Circuits (Priority statement cause wn)
    if (mainHandData.circuits[0] == 1) {
        mainHandData.circuits[0] = 0
        if (offHandItem.isEmpty()) {
            player.setOffHandItem(Item.of("kubejs:primitive_circuit_board", {type: "Control"}))
        }
        else if (offHandData == "Control" && offHandItem.count < 64) 
            offHandItem.count += 1
        else {
            player.drop(
                Item.of('kubejs:primitive_circuit_board', { type: 'Control' }),
                true // false = drop, true = throw
            )
        }
        update_circuit()
        return
    }
    else if (mainHandData.circuits[1] == 1) {
        mainHandData.circuits[1] = 0
        if (offHandItem.isEmpty()) {
            player.setOffHandItem(Item.of("kubejs:primitive_circuit_board", {type: "Relay"}))

        }
        else if (offHandData == "Relay" && offHandItem.count < 64) 
            offHandItem.count += 1
        else {
            player.drop(
                Item.of('kubejs:primitive_circuit_board', { type: 'Relay' }),
                true // false = drop, true = throw
            )
        }
        update_circuit()
        return
    }
    else if (mainHandData.circuits[2] == 1) {
        mainHandData.circuits[2] = 0
        if (offHandItem.isEmpty()) {
            player.setOffHandItem(Item.of("kubejs:primitive_circuit_board", {type: "Sequence"}))

        }
        else if (offHandData == "Sequence" && offHandItem.count < 64) 
            offHandItem.count += 1
        else {
            player.drop(
                Item.of('kubejs:primitive_circuit_board', { type: 'Sequence' }),
                true // false = drop, true = throw
            )
        }
        update_circuit()
        return
    }
}
else if (offHandItem.id == "kubejs:primitive_circuit_board") { // why wouldn't the js creators make it elif? Like normal people? what the FUCK is else if doing here.
    if (offHandItem.nbt?.type == "Control") { // Control Circuit Handle
        if (mainHandData.circuits[0] == 0) {
            offHandItem.count -= 1
            if (offHandItem.count <= 0) {
                player.setOffHandItem(offHandItem.count > 0 ? offHandItem : Item.empty)
            }
            mainHandData.circuits[0] = 1
        }
    } 
    if (offHandItem.nbt?.type == "Relay") { // Relay Circuit Handle
        if (mainHandData.circuits[1] == 0) {
            offHandItem.count -= 1
            if (offHandItem.count <= 0) {
                player.setOffHandItem(offHandItem.count > 0 ? offHandItem : Item.empty)
            }
            mainHandData.circuits[1] = 1
        }
    } 
   if (offHandItem.nbt?.type == "Sequence") { // Sequence Circuit Handle
     if (mainHandData.circuits[2] == 0) {
            offHandItem.count -= 1
            if (offHandItem.count <= 0) {
                player.setOffHandItem(offHandItem.count > 0 ? offHandItem : Item.empty)
            }
            mainHandData.circuits[2] = 1
        }
    } 

}
function update_circuit() {
    let mask = 
        (mainHandData.circuits[0] << 2) |
        (mainHandData.circuits[1] << 1) |
        (mainHandData.circuits[2] << 0)
    mainHandData.CustomModelData = mask
    mainHandItem.setNbt(mainHandData)
}
update_circuit()
})