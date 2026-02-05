ServerEvents.tags('fluid', event => {
    event.add('forge:paste_for_conduction', 'tfmg:crude_oil')
    event.add('forge:paste_for_conduction', 'kubejs:liquid_resin')

})
ServerEvents.tags('item', event => {
    event.add('destroy:plastics/rigid', 'tfmg:plastic_sheet')
    event.add('destroy:plastics/rigid', "destroy:polyisoprene")
    event.add('kubejs:plastics', "destroy:polyisoprene")
    event.add('kubejs:plastics', 'tfmg:plastic_sheet')
    event.add('kubejs:smart_pipes','create:smart_fluid_pipe')
    event.add('kubejs:smart_pipes','tfmg:steel_smart_fluid_pipe')
    event.add('kubejs:smart_pipes', 'tfmg:brass_smart_fluid_pipe')
    event.add('kubejs:smart_pipes','tfmg:plastic_smart_fluid_pipe')
    event.add('kubejs:smart_pipes','tfmg:aluminum_smart_fluid_pipe')
    event.add('kubejs:smart_pipes','tfmg:cast_iron_smart_fluid_pipe')
})