ServerEvents.tags('fluid', event => {
    event.add('forge:paste_for_conduction', 'tfmg:crude_oil')
    event.add('forge:paste_for_conduction', 'kubejs:liquid_resin')

})
ServerEvents.tags('item', event => {
    event.add('destroy:plastics/rigid', 'tfmg:plastic_sheet')
})