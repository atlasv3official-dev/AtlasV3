// priority: 0

// Visit the wiki for more info - https://kubejs.com/

console.info('Hello, World! (Loaded client scripts)')

NetworkEvents.dataReceived('testGforce',event => {
    if (event.data.type == "softness") {
        const softness = event.data.softness * 1.0 // floatify cause kubejs is cooked
        console.log("Recieved Data: Softness:" + softness)
        global.GForce.setBlackoutSoftness(softness)
        return
    }
    else if (event.data.type == "color") {
        const [r, g, b] = event.data.color
        const rD = r * 1.0 // floatify cause kubejs is cooked
        const gD = g * 1.0
        const bD = b * 1.0
        console.log("Recieved Data: R:" + rD + " G:" + gD + " B:" + bD)
        global.GForce.setBlackoutColor(rD, gD, bD)
        return
    }
})