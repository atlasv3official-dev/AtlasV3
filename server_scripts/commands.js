// priority: 0

// Visit the wiki for more info - https://kubejs.com/

console.info('Hello, World! (Loaded server scripts)')

ServerEvents.commandRegistry(event => {
    const { commands: Commands, arguments: Arguments } = event
    event.register(
        Commands.literal('test_gforce') // The name of the command
        .requires(source => source.hasPermission(2)) // Check if the player has operator privileges
        .executes(ctx => testGforce(ctx.source.player)) // Invoke for the player that ran the command if the `target` argument isn't included
        .then(Commands.literal('start').executes(ctx => {
            global.GForce.startBlackout()
            return 1
        }))
        .then(Commands.literal('stop').executes(ctx => {
            global.GForce.stopBlackout()
            return 1
        }))
        .then(Commands.literal('softness')
        .then(Commands.argument('softness', Arguments.FLOAT.create(event))
        .executes(ctx => {
            const softness = Arguments.FLOAT.getResult(ctx, 'softness')
            testGforce("softness",ctx.source.player,softness, 0, 0)
            return 1
        })))
        .then(Commands.literal('color')
        .then(Commands.argument('r', Arguments.FLOAT.create(event))
        .then(Commands.argument('g', Arguments.FLOAT.create(event))
        .then(Commands.argument('b', Arguments.FLOAT.create(event))
        .executes(ctx => {
            const r = Arguments.FLOAT.getResult(ctx, 'r')
            const g = Arguments.FLOAT.getResult(ctx, 'g')
            const b = Arguments.FLOAT.getResult(ctx, 'b')
            testGforce("color",ctx.source.player,r, g, b)
            return 1
        }))))
    ))

    const testGforce = (type, player, r, g, b) => {
        if (type == "color") player.sendData("testGforce", {type:"color",color: [r, g, b]});
        else if (type == "softness") player.sendData("testGforce", {type:"softness",softness: r});
        return 1
    }
  

})
