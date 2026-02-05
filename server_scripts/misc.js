
BlockEvents.placed('kubejs:monitor', event => {
    event.block.set('kubejs:monitor', {
        "facing": event.entity.getHorizontalFacing().getOpposite()
    })
})
