//replace later with command defining
const TARGET_PLAYER = 'PlayerNameHere';

BlockEvents.broken(event => {
    if (event.player.username === TARGET_PLAYER) {
        event.cancel();
    }
});

PlayerEvents.blockInteract(event => {
    if (event.player.username === TARGET_PLAYER) {
        event.cancel();
    }
});

PlayerEvents.entityInteract(event => {
    if (event.player.username === TARGET_PLAYER) {
        event.cancel();
    }
});

PlayerEvents.chat(event => {
    if (event.player.username === TARGET_PLAYER) {
        event.cancel();
    }
});

PlayerEvents.itemUse(event => {
    if (event.player.username === TARGET_PLAYER) {
        event.cancel();
    }
});