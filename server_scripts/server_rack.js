var boundMonitors = {}

MBDMachineEvents.onTick('mbd2:circuit_rack', event => {
    var machine = event.getEvent().machine
    var level = machine.getLevel()
    var origin = machine.getPos()
    var key = origin.x + "," + origin.y + "," + origin.z
    
    var boundMonitor = boundMonitors[key] || null
    
    var ADJACENT_OFFSETS = [
        { dx: 1, dy: 0, dz: 0, face: "east" },
        { dx: -1, dy: 0, dz: 0, face: "west" },
        { dx: 0, dy: 1, dz: 0, face: "up" },
        { dx: 0, dy: -1, dz: 0, face: "down" },
        { dx: 0, dy: 0, dz: 1, face: "south" },
        { dx: 0, dy: 0, dz: -1, face: "north" }
    ]
    
    var controllerPos = null
    
    Object.keys(boundMonitors).forEach(rackKey => {
        if (rackKey === key) return 
        
        var coords = rackKey.split(',')
        var rackX = parseInt(coords[0])
        var rackY = parseInt(coords[1])
        var rackZ = parseInt(coords[2])
        
        var rackBlock = level.getBlock(rackX, rackY, rackZ)
        

        if (!rackBlock || rackBlock.id !== 'mbd2:circuit_rack') {
            var orphanedMonitor = boundMonitors[rackKey]
            if (orphanedMonitor) {
                var monitorBlock = level.getBlock(orphanedMonitor.x, orphanedMonitor.y, orphanedMonitor.z)
                if (monitorBlock && monitorBlock.id === "create_radar:monitor") {
                    level.runCommandSilent(
                        `setblock ${orphanedMonitor.x} ${orphanedMonitor.y} ${orphanedMonitor.z} kubejs:monitor[facing=${orphanedMonitor.facing}]`
                    )
                }
                delete boundMonitors[rackKey]
            }
        }
    })
    
    if (boundMonitor) {
        var block = level.getBlock(
            boundMonitor.x,
            boundMonitor.y,
            boundMonitor.z
        )
        
        if (block && block.id === "create_radar:monitor") {
            controllerPos = boundMonitor
        } else {
            if (!block || block.id === "minecraft:air") {
                boundMonitors[key] = null
                return
            }
            level.runCommandSilent(
                `setblock ${boundMonitor.x} ${boundMonitor.y} ${boundMonitor.z} kubejs:monitor[facing=${boundMonitor.facing}]`
            )
            boundMonitors[key] = null
        }
    }
    
    if (!controllerPos) {
        for (var i = 0; i < ADJACENT_OFFSETS.length; i++) {
            var o = ADJACENT_OFFSETS[i]
            var checkPos = origin.offset(o.dx, o.dy, o.dz)
            var block = level.getBlock(checkPos)
            
            if (block && block.id === "kubejs:monitor") {
                controllerPos = {
                    x: checkPos.x,
                    y: checkPos.y,
                    z: checkPos.z,
                    facing: o.face
                }
                
                var previousBound = boundMonitors[key]
                if (previousBound && 
                    !(previousBound.x === controllerPos.x && 
                      previousBound.y === controllerPos.y && 
                      previousBound.z === controllerPos.z)) {
                    var oldBlock = level.getBlock(previousBound.x, previousBound.y, previousBound.z)
                    if (oldBlock && oldBlock.id === "create_radar:monitor") {
                        level.runCommandSilent(
                            `setblock ${previousBound.x} ${previousBound.y} ${previousBound.z} kubejs:monitor[facing=${previousBound.facing}]`
                        )
                    }
                }
                
                boundMonitors[key] = controllerPos
                break
            }
        }
    }
    
    if (!controllerPos) return
    
    var controlTrait = machine.getTraitByName("item_slot")
    var sequenceTrait = machine.getTraitByName("item_slot_0")
    var secondarySequenceTrait = machine.getTraitByName("item_slot_1")
    var relayTrait = machine.getTraitByName("item_slot_2")
    var secondaryRelayTrait = machine.getTraitByName("item_slot_3")
    function readType(trait) {
        if (!trait || !trait.storage) return null
        var stack = trait.storage.getStackInSlot(0)
        return stack && stack.nbt ? stack.nbt.type : null
    }
    
    if (readType(controlTrait) !== "Control") return
    if (readType(sequenceTrait) !== "Sequence") return
    if (readType(secondarySequenceTrait) !== "Sequence") return
    if (readType(relayTrait) !== "Relay") return
    if (readType(secondaryRelayTrait) !== "Relay") return
    
    var existing = level.getBlock(controllerPos.x, controllerPos.y, controllerPos.z)
    if (!existing || existing.id !== "create_radar:monitor") {
        level.runCommandSilent(
            `setblock ${controllerPos.x} ${controllerPos.y} ${controllerPos.z} create_radar:monitor[facing=${controllerPos.facing}]`
        )
    }
})

BlockEvents.broken('mbd2:circuit_rack', event => {
    var pos = event.getBlock().getPos()
    var key = pos.x + "," + pos.y + "," + pos.z
    var bound = boundMonitors[key]
    
    if (bound) {
        var level = event.getLevel()
        var block = level.getBlock(bound.x, bound.y, bound.z)
        if (block && block.id === "create_radar:monitor") {
            level.runCommandSilent(
                `setblock ${bound.x} ${bound.y} ${bound.z} kubejs:monitor[facing=${bound.facing}]`
            )
        }
        delete boundMonitors[key]
    }
})

