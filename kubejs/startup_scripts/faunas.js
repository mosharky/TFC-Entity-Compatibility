TFCEvents.registerFaunas(event => {
    // https://github.com/TerraFirmaCraft/TerraFirmaCraft/blob/1.20.x/src/main/java/net/dries007/tfc/common/entities/Faunas.java#L161-L162
    global.terrestrialAnimals.forEach(animal => {
        event.register(animal.id, 'on_ground', 'motion_blocking_no_leaves')
    })

    global.aquaticAnimals.forEach(animal => {
        event.register(animal.id, 'in_water', 'motion_blocking_no_leaves')
    })

    global.amphibiousAnimals.forEach(animal => {
        event.register(animal.id, 'no_restrictions', 'motion_blocking_no_leaves')
    })
})