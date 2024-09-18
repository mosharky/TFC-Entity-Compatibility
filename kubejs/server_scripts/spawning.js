TFCEvents.data(e => {
    global.allAnimals.forEach(animal => {
        e.fauna(
            climate => animal.climateData(climate),
            fauna => animal.faunaData(fauna),
            animal.id
        )
    })
})


ServerEvents.highPriorityData(e => {
    // HEY YOU! This didn't need to be a function for my use-case, but if you want to spawn hostile mobs, this will come in handy!
    const addSpawn = (entityId, spawner, biomes) => {
        let entityIdSplit = entityId.split(':')
        let modId = entityIdSplit[0]
        let entityName = entityIdSplit[1]

        spawner.type = entityId

        e.addJson(`your_namespace:forge/biome_modifier/add_${modId}_${entityName}_spawn`, {
            type: 'forge:add_spawns',
            biomes: biomes,
            spawners: spawner
        })
    }

    global.allAnimals.forEach(animal => {
        addSpawn(animal.id, animal.spawner, animal.biomes)
    })


    // OPTIONAL: Removing TFC's entities that overlap with Alex's Mobs
    e.addJson(`your_namespace:forge/biome_modifier/remove_tfc_overlap_spawns`, {
        type: 'forge:remove_spawns',
        biomes: [ // all biomes in TFC
            'tfc:badlands',
            'tfc:canyons',
            'tfc:deep_ocean',
            'tfc:deep_ocean_trench',
            'tfc:highlands',
            'tfc:hills',
            'tfc:inverted_badlands',
            'tfc:lake',
            'tfc:low_canyons',
            'tfc:lowlands',
            'tfc:mountain_lake',
            'tfc:mountains',
            'tfc:ocean',
            'tfc:ocean_reef',
            'tfc:oceanic_mountain_lake',
            'tfc:oceanic_mountains',
            'tfc:old_mountain_lake',
            'tfc:old_mountains',
            'tfc:plains',
            'tfc:plateau',
            'tfc:plateau_lake',
            'tfc:river',
            'tfc:rolling_hills',
            'tfc:salt_marsh',
            'tfc:shore',
            'tfc:tidal_flats',
            'tfc:volcanic_mountain_lake',
            'tfc:volcanic_mountains',
            'tfc:volcanic_oceanic_mountain_lake',
            'tfc:volcanic_oceanic_mountains',
        ],
        entity_types: [
            'tfc:lobster',
            'tfc:orca',
            'tfc:grizzly_bear',
            'tfc:tiger',
            'tfc:crocodile',
            'tfc:gazelle',
            'tfc:moose'
        ]
    })
})