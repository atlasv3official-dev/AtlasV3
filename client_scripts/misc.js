ItemEvents.tooltip(event => {
  event.addAdvanced('kubejs:computer_chip_beta', (item, advanced, text) => {
    const doping = item.nbt?.doping
    if (!doping) {
      text.add(Text.gray('Intrinsic silicon'))
      text.add(Text.darkGray('No charge carriers added'))
      return
    }
    if (doping == 'p_doped') {
      text.add(Text.red('P-type semiconductor'))
      text.add(Text.darkGray('Holes are the majority carriers'))
    }
    if (doping == 'pn_doped') {
      text.add(Text.lightPurple('PN-junction semiconductor'))
      text.add(Text.darkGray('Charge carriers separate at the junction'))  
      text.add(Text.gray('§o"You want carriers? We GOT carriers"'))
      // text.add(Text.lightPurples('P-N junction semiconductor'))
      // text.add(Text.darkGray(Text.italic('"You want carriers? We GOT carriers"')))
    }
  })
  event.addAdvanced('kubejs:logic_core', (item, advanced, text) => {
    const doping = item.nbt?.doping
    if (!doping) {
      text.add(Text.gray('Intrinsic silicon'))
      text.add(Text.darkGray('No charge carriers added'))
      return
    }

    if (doping == 'p_doped') {
      text.add(Text.red('P-type semiconductor'))
      text.add(Text.darkGray('Holes are the majority carriers'))
    }
    if (doping == 'pn_doped') {
      text.add(Text.lightPurple('PN-junction semiconductor'))
      text.add(Text.darkGray('Charge carriers separate at the junction'))  
      text.add(Text.gray('§o"You want carriers? We GOT carriers"'))
      // text.add(Text.lightPurples('P-N junction semiconductor'))
      // text.add(Text.darkGray(Text.italic('"You want carriers? We GOT carriers"')))
    }
  })
  event.addAdvanced('kubejs:exposed_wafer', (item, advanced, text) => {
    const type = item.nbt?.type
    if (!type) {
      text.add(Text.darkGray('Type: Unknown'))
      return
    }

    if (type == 'cpu') {
      text.add(Text.gray('Type: CPU'))
    }

    if (type == 'ram') {
      text.add(Text.gray('Type: RAM'))
    }
    if (type == 'ssd') {
      text.add(Text.gray('Type: SSD'))
    }
    if (type == 'circuit') {
      text.add(Text.gray('Type: Circuit'))
    }
  })
  event.addAdvanced('kubejs:etched_wafer', (item, advanced, text) => {
    const type = item.nbt?.type
    if (!type) {
      text.add(Text.darkGray('Type: Unknown'))
      return
    }

    if (type == 'cpu') {
      text.add(Text.gray('Type: CPU'))
    }

    if (type == 'ram') {
      text.add(Text.gray('Type: RAM'))
    }
    if (type == 'ssd') {
      text.add(Text.gray('Type: SSD'))
    }
    if (type == 'circuit') {
      text.add(Text.gray('Type: Circuit'))
    }
  })
  event.addAdvanced('kubejs:housed_circuit_board', (item, advanced, text) => {
    const type = item.nbt?.type
    if (!type) {
      text.add(Text.darkGray('Type: Unknown'))
      return
    }

    if (type == 'Control') {
      text.add(Text.gray('Type: Control'))
    }

    if (type == 'Relay') {
      text.add(Text.gray('Type: Relay'))
    }
    if (type == 'Sequence') {
      text.add(Text.gray('Type: Sequence'))
    }
  })
  event.addAdvanced('kubejs:traced_circuit_board', (item, advanced, text) => {
    const type = item.nbt?.type
    if (!type) {
      text.add(Text.darkGray('Type: Unknown'))
      return
    }

    if (type == 'Control') {
      text.add(Text.gray('Type: Control'))
    }

    if (type == 'Relay') {
      text.add(Text.gray('Type: Relay'))
    }
    if (type == 'Sequence') {
      text.add(Text.gray('Type: Sequence'))
    }
  })
  event.addAdvanced('kubejs:primitive_circuit_board', (item, advanced, text) => {
    const type = item.nbt?.type
    if (!type) {
      text.add(Text.darkGray('Type: Unknown'))
      return
    }

    if (type == 'Control') {
      text.add(Text.gray('Type: Control'))
    }

    if (type == 'Relay') {
      text.add(Text.gray('Type: Relay'))
    }
    if (type == 'Sequence') {
      text.add(Text.gray('Type: Sequence'))
    }
  })
event.addAdvanced('kubejs:monitor', (item, advanced, text) => {
    text.add('§7Requires a§6 \'Circuit Rack\' §7to Function')
})
  event.addAdvanced('kubejs:modified_breadboard', (item, advanced, text) => {
    const circuits = item.nbt?.circuits
    if (!circuits) {
      text.add(Text.gray('Control: ☐'))
      text.add(Text.gray('Relay: ☐'))
      text.add(Text.gray('Sequence: ☐'))
    }

    if (circuits[0] == 1) {
      text.add(Text.gray('Control: ☒'))
    }
    else {
      text.add(Text.gray('Control: ☐'))
    }

    if (circuits[1] == 1) {
      text.add(Text.gray('Relay: ☒'))
    }
    else {
      text.add(Text.gray('Relay: ☐'))
    }

    if (circuits[2] == 1) {
      text.add(Text.gray('Sequence: ☒'))
    }
    else {
      text.add(Text.gray('Sequence: ☐'))
    }
  })
})

ClientEvents.lang('en_us', event => { // Look how inclusive i am
    event.add("block.mbd2.circuit_rack", "Circuit Rack")
})

ClientEvents.lang('en_gb', event => { 
    event.add("block.mbd2.circuit_rack", "Circuit Rack")
})

ClientEvents.lang('en_ca', event => { 
    event.add("block.mbd2.circuit_rack", "Circuit Rack")
})

ClientEvents.lang('en_au', event => { 
    event.add("block.mbd2.circuit_rack", "Circuit Rack")
})

ClientEvents.lang('en_nz', event => { 
    event.add("block.mbd2.circuit_rack", "Circuit Rack")
})

ClientEvents.lang('en_pt', event => { 
    event.add("block.mbd2.circuit_rack", "Circuit Contraption")
})

ClientEvents.lang('en_ud', event => { 
    event.add("block.mbd2.circuit_rack", "ʞɔɐᴚ ʇᴉnɔɹᴉƆ")
})