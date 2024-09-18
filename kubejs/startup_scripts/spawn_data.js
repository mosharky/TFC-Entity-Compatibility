// priority: 100
// HEY YOU! The prioerity is important; we need these arrays to load before everything else so we can use them in other scripts.
// HEY YOU! If you downloaded these scripts, be sure to empty these arrays unless if you're also using Alex's Mobs.
global.terrestrialAnimals = [
    {
        id: 'alexsmobs:anteater',
        climateData(climate) {
            climate.minTemp(10)
            climate.maxTemp(35)
            climate.minRain(250)
            climate.minForest('sparse')
            climate.maxForest('edge')
        },
        faunaData(fauna) {
            fauna.chance(1)
        },
        spawner: {
            weight: 1,
            minCount: 1,
            maxCount: 2
        },
        biomes: [
            'tfc:badlands',
            'tfc:canyons',
            'tfc:highlands',
            'tfc:hills',
            'tfc:inverted_badlands',
            'tfc:lake',
            'tfc:low_canyons',
            'tfc:lowlands',
            'tfc:mountains',
            'tfc:oceanic_mountains',
            'tfc:old_mountains',
            'tfc:plains',
            'tfc:plateau',
            'tfc:river',
            'tfc:rolling_hills',
            'tfc:salt_marsh',
            'tfc:volcanic_mountains',
            'tfc:volcanic_oceanic_mountains',
        ]
    },
    {
        id: 'alexsmobs:bald_eagle',
        climateData(climate) {
            climate.minTemp(-30)
            climate.maxTemp(30)
            climate.minRain(250)
            climate.maxRain(375)
            climate.maxForest('edge')
        },
        faunaData(fauna) {
            fauna.chance(1)
        },
        spawner: {
            weight: 1,
            minCount: 1,
            maxCount: 1
        },
        biomes: [
            'tfc:badlands',
            'tfc:canyons',
            'tfc:highlands',
            'tfc:hills',
            'tfc:inverted_badlands',
            'tfc:lake',
            'tfc:low_canyons',
            'tfc:lowlands',
            'tfc:mountains',
            'tfc:oceanic_mountains',
            'tfc:old_mountains',
            'tfc:plains',
            'tfc:plateau',
            'tfc:river',
            'tfc:rolling_hills',
            'tfc:salt_marsh',
            'tfc:shore',
            'tfc:tidal_flats',
            'tfc:volcanic_mountains',
            'tfc:volcanic_oceanic_mountains',
        ]
    },
    {
        id: 'alexsmobs:banana_slug',
        climateData(climate) {
            climate.minTemp(5)
            climate.maxTemp(25)
            climate.minRain(300)
            climate.minForest('normal')
            climate.maxForest('old_growth')
        },
        faunaData(fauna) {
            fauna.chance(1)
        },
        spawner: {
            weight: 1,
            minCount: 1,
            maxCount: 1
        },
        biomes: [
            'tfc:badlands',
            'tfc:canyons',
            'tfc:highlands',
            'tfc:hills',
            'tfc:inverted_badlands',
            'tfc:lake',
            'tfc:low_canyons',
            'tfc:lowlands',
            'tfc:mountains',
            'tfc:oceanic_mountains',
            'tfc:old_mountains',
            'tfc:plains',
            'tfc:plateau',
            'tfc:river',
            'tfc:rolling_hills',
            'tfc:salt_marsh',
            'tfc:shore',
            'tfc:tidal_flats',
            'tfc:volcanic_mountains',
            'tfc:volcanic_oceanic_mountains',
        ]
    },
    {
        id: 'alexsmobs:bison',
        climateData(climate) {
            climate.minTemp(-40)
            climate.maxTemp(35)
            climate.minRain(100)
            climate.maxRain(250)
            climate.maxForest('sparse')
        },
        faunaData(fauna) {
            fauna.chance(1)
        },
        spawner: {
            weight: 1,
            minCount: 3,
            maxCount: 5
        },
        biomes: [
            'tfc:badlands',
            'tfc:canyons',
            'tfc:highlands',
            'tfc:hills',
            'tfc:inverted_badlands',
            'tfc:lake',
            'tfc:low_canyons',
            'tfc:lowlands',
            'tfc:mountains',
            'tfc:oceanic_mountains',
            'tfc:old_mountains',
            'tfc:plains',
            'tfc:plateau',
            'tfc:river',
            'tfc:rolling_hills',
            'tfc:salt_marsh',
            'tfc:volcanic_mountains',
            'tfc:volcanic_oceanic_mountains',
        ]
    },
    {
        id: 'alexsmobs:blue_jay',
        climateData(climate) {
            climate.minTemp(-10)
            climate.maxTemp(30)
            climate.minRain(150)
            climate.maxRain(450)
            climate.minForest('edge')
            climate.maxForest('normal')
            climate.fuzzy(true)
        },
        faunaData(fauna) {
            fauna.chance(1)
        },
        spawner: {
            weight: 1,
            minCount: 1,
            maxCount: 1
        },
        biomes: [
            'tfc:badlands',
            'tfc:canyons',
            'tfc:highlands',
            'tfc:hills',
            'tfc:inverted_badlands',
            'tfc:lake',
            'tfc:low_canyons',
            'tfc:lowlands',
            'tfc:mountains',
            'tfc:oceanic_mountains',
            'tfc:old_mountains',
            'tfc:plains',
            'tfc:plateau',
            'tfc:river',
            'tfc:rolling_hills',
            'tfc:salt_marsh',
            'tfc:volcanic_mountains',
            'tfc:volcanic_oceanic_mountains',
        ]
    },
    {
        id: 'alexsmobs:capuchin_monkey',
        climateData(climate) {
            climate.minTemp(20)
            climate.maxTemp(32)
            climate.minRain(375)
            climate.minForest('edge')
            climate.maxForest('old_growth')
        },
        faunaData(fauna) {
            fauna.chance(1)
        },
        spawner: {
            weight: 1,
            minCount: 2,
            maxCount: 5
        },
        biomes: [
            'tfc:badlands',
            'tfc:canyons',
            'tfc:highlands',
            'tfc:hills',
            'tfc:inverted_badlands',
            'tfc:lake',
            'tfc:low_canyons',
            'tfc:lowlands',
            'tfc:mountains',
            'tfc:oceanic_mountains',
            'tfc:old_mountains',
            'tfc:plains',
            'tfc:plateau',
            'tfc:river',
            'tfc:rolling_hills',
            'tfc:salt_marsh',
            'tfc:volcanic_mountains',
            'tfc:volcanic_oceanic_mountains',
        ]
    },
    {
        id: 'alexsmobs:crow',
        climateData(climate) {
            climate.minTemp(-30)
            climate.maxTemp(35)
            climate.minRain(100)
            climate.maxRain(375)
        },
        faunaData(fauna) {
            fauna.chance(1)
        },
        spawner: {
            weight: 1,
            minCount: 1,
            maxCount: 3
        },
        biomes: [
            'tfc:badlands',
            'tfc:canyons',
            'tfc:highlands',
            'tfc:hills',
            'tfc:inverted_badlands',
            'tfc:lake',
            'tfc:low_canyons',
            'tfc:lowlands',
            'tfc:mountains',
            'tfc:oceanic_mountains',
            'tfc:old_mountains',
            'tfc:plains',
            'tfc:plateau',
            'tfc:river',
            'tfc:rolling_hills',
            'tfc:salt_marsh',
            'tfc:volcanic_mountains',
            'tfc:volcanic_oceanic_mountains',
        ]
    },
    {
        id: 'alexsmobs:elephant',
        climateData(climate) {
            climate.minTemp(30)
            climate.maxTemp(40)
            climate.minRain(125)
            climate.minForest('sparse')
            climate.maxForest('normal')
        },
        faunaData(fauna) {
            fauna.chance(1)
        },
        spawner: {
            weight: 1,
            minCount: 2,
            maxCount: 4
        },
        biomes: [
            'tfc:badlands',
            'tfc:canyons',
            'tfc:highlands',
            'tfc:hills',
            'tfc:inverted_badlands',
            'tfc:lake',
            'tfc:low_canyons',
            'tfc:lowlands',
            'tfc:plains',
            'tfc:plateau',
            'tfc:river',
            'tfc:rolling_hills',
            'tfc:salt_marsh',
        ]
    },
    {
        id: 'alexsmobs:emu',
        climateData(climate) {
            climate.minTemp(5)
            climate.maxTemp(40)
            climate.minRain(125)
            climate.maxRain(250)
            climate.maxForest('edge')
        },
        faunaData(fauna) {
            fauna.chance(1)
        },
        spawner: {
            weight: 1,
            minCount: 3,
            maxCount: 6
        },
        biomes: [
            'tfc:badlands',
            'tfc:canyons',
            'tfc:highlands',
            'tfc:hills',
            'tfc:inverted_badlands',
            'tfc:lake',
            'tfc:low_canyons',
            'tfc:lowlands',
            'tfc:plains',
            'tfc:plateau',
            'tfc:river',
            'tfc:rolling_hills',
            'tfc:salt_marsh',
        ]
    },
    {
        id: 'alexsmobs:gazelle',
        climateData(climate) {
            climate.minTemp(12)
            climate.minRain(90)
            climate.maxRain(380)
            climate.maxForest('edge')
        },
        faunaData(fauna) {
            fauna.chance(1)
        },
        spawner: {
            weight: 1,
            minCount: 2,
            maxCount: 5
        },
        biomes: [
            'tfc:badlands',
            'tfc:canyons',
            'tfc:highlands',
            'tfc:hills',
            'tfc:inverted_badlands',
            'tfc:lake',
            'tfc:low_canyons',
            'tfc:lowlands',
            'tfc:plains',
            'tfc:plateau',
            'tfc:river',
            'tfc:rolling_hills',
            'tfc:salt_marsh',
        ]
    },
    {
        id: 'alexsmobs:gelada_monkey',
        climateData(climate) {
            climate.minTemp(5)
            climate.maxTemp(25)
            climate.minRain(300)
            climate.maxRain(450)
            climate.minForest('sparse')
            climate.maxForest('edge')
        },
        faunaData(fauna) {
            fauna.chance(1)
        },
        spawner: {
            weight: 1,
            minCount: 1,
            maxCount: 6
        },
        biomes: [
            'tfc:badlands',
            'tfc:canyons',
            'tfc:highlands',
            'tfc:hills',
            'tfc:inverted_badlands',
            'tfc:mountains',
            'tfc:oceanic_mountains',
            'tfc:old_mountains',
            'tfc:plateau',
            'tfc:rolling_hills',
            'tfc:volcanic_mountains',
            'tfc:volcanic_oceanic_mountains',
        ]
    },
    {
        id: 'alexsmobs:gorilla',
        climateData(climate) {
            climate.minTemp(10)
            climate.maxTemp(25)
            climate.minRain(375)
            climate.minForest('normal')
        },
        faunaData(fauna) {
            fauna.chance(1)
        },
        spawner: {
            weight: 1,
            minCount: 1,
            maxCount: 4
        },
        biomes: [
            'tfc:badlands',
            'tfc:canyons',
            'tfc:highlands',
            'tfc:hills',
            'tfc:inverted_badlands',
            'tfc:lake',
            'tfc:low_canyons',
            'tfc:lowlands',
            'tfc:mountains',
            'tfc:oceanic_mountains',
            'tfc:old_mountains',
            'tfc:plains',
            'tfc:plateau',
            'tfc:river',
            'tfc:rolling_hills',
            'tfc:salt_marsh',
            'tfc:volcanic_mountains',
            'tfc:volcanic_oceanic_mountains',
        ]
    },
    {
        id: 'alexsmobs:grizzly_bear',
        climateData(climate) {
            climate.minTemp(-20)
            climate.maxTemp(15)
            climate.minRain(200)
            climate.maxRain(375)
            climate.minForest('normal')
        },
        faunaData(fauna) {
            fauna.chance(1)
        },
        spawner: {
            weight: 1,
            minCount: 1,
            maxCount: 1
        },
        biomes: [
            'tfc:badlands',
            'tfc:canyons',
            'tfc:highlands',
            'tfc:hills',
            'tfc:inverted_badlands',
            'tfc:lake',
            'tfc:low_canyons',
            'tfc:lowlands',
            'tfc:mountains',
            'tfc:oceanic_mountains',
            'tfc:old_mountains',
            'tfc:plains',
            'tfc:plateau',
            'tfc:river',
            'tfc:rolling_hills',
            'tfc:salt_marsh',
            'tfc:volcanic_mountains',
            'tfc:volcanic_oceanic_mountains',
        ]
    },
    {
        id: 'alexsmobs:hummingbird',
        climateData(climate) {
            climate.minTemp(10)
            climate.maxTemp(30)
            climate.minRain(250)
            climate.minForest('edge')
            climate.maxForest('normal')
        },
        faunaData(fauna) {
            fauna.chance(1)
        },
        spawner: {
            weight: 1,
            minCount: 1,
            maxCount: 3
        },
        biomes: [
            'tfc:badlands',
            'tfc:canyons',
            'tfc:highlands',
            'tfc:hills',
            'tfc:inverted_badlands',
            'tfc:lake',
            'tfc:low_canyons',
            'tfc:lowlands',
            'tfc:mountains',
            'tfc:oceanic_mountains',
            'tfc:old_mountains',
            'tfc:plains',
            'tfc:plateau',
            'tfc:river',
            'tfc:rolling_hills',
            'tfc:salt_marsh',
            'tfc:volcanic_mountains',
            'tfc:volcanic_oceanic_mountains',
        ]
    },
    {
        id: 'alexsmobs:jerboa',
        climateData(climate) {
            climate.minTemp(-5)
            climate.maxTemp(40)
            climate.minRain(0)
            climate.maxRain(125)
            climate.maxForest('sparse')
        },
        faunaData(fauna) {
            fauna.chance(1)
        },
        spawner: {
            weight: 1,
            minCount: 1,
            maxCount: 1
        },
        biomes: [
            'tfc:badlands',
            'tfc:canyons',
            'tfc:highlands',
            'tfc:hills',
            'tfc:inverted_badlands',
            'tfc:lake',
            'tfc:low_canyons',
            'tfc:lowlands',
            'tfc:mountains',
            'tfc:oceanic_mountains',
            'tfc:old_mountains',
            'tfc:plains',
            'tfc:plateau',
            'tfc:river',
            'tfc:rolling_hills',
            'tfc:salt_marsh',
            'tfc:volcanic_mountains',
            'tfc:volcanic_oceanic_mountains',
        ]
    },
    {
        id: 'alexsmobs:kangaroo',
        climateData(climate) {
            climate.minTemp(10)
            climate.maxTemp(35)
            climate.minRain(125)
            climate.maxRain(250)
            climate.minForest('sparse')
            climate.maxForest('edge')
        },
        faunaData(fauna) {
            fauna.chance(1)
        },
        spawner: {
            weight: 1,
            minCount: 2,
            maxCount: 5
        },
        biomes: [
            'tfc:badlands',
            'tfc:canyons',
            'tfc:highlands',
            'tfc:hills',
            'tfc:inverted_badlands',
            'tfc:lake',
            'tfc:low_canyons',
            'tfc:lowlands',
            'tfc:mountains',
            'tfc:oceanic_mountains',
            'tfc:old_mountains',
            'tfc:plains',
            'tfc:plateau',
            'tfc:river',
            'tfc:rolling_hills',
            'tfc:salt_marsh',
            'tfc:volcanic_mountains',
            'tfc:volcanic_oceanic_mountains',
        ]
    },
    {
        id: 'alexsmobs:komodo_dragon',
        climateData(climate) {
            climate.minTemp(20)
            climate.maxTemp(40)
            climate.minRain(250)
            climate.maxRain(375)
            climate.minForest('sparse')
            climate.maxForest('edge')
        },
        faunaData(fauna) {
            fauna.chance(1)
        },
        spawner: {
            weight: 1,
            minCount: 1,
            maxCount: 1
        },
        biomes: [
            'tfc:badlands',
            'tfc:canyons',
            'tfc:highlands',
            'tfc:hills',
            'tfc:inverted_badlands',
            'tfc:lake',
            'tfc:low_canyons',
            'tfc:lowlands',
            'tfc:mountains',
            'tfc:oceanic_mountains',
            'tfc:old_mountains',
            'tfc:plains',
            'tfc:plateau',
            'tfc:river',
            'tfc:rolling_hills',
            'tfc:salt_marsh',
            'tfc:volcanic_mountains',
            'tfc:volcanic_oceanic_mountains',
        ]
    },
    {
        id: 'alexsmobs:maned_wolf',
        climateData(climate) {
            climate.minTemp(10)
            climate.maxTemp(30)
            climate.minRain(250)
            climate.minForest('sparse')
            climate.maxForest('edge')
        },
        faunaData(fauna) {
            fauna.chance(1)
        },
        spawner: {
            weight: 1,
            minCount: 1,
            maxCount: 1
        },
        biomes: [
            'tfc:badlands',
            'tfc:canyons',
            'tfc:highlands',
            'tfc:hills',
            'tfc:inverted_badlands',
            'tfc:lake',
            'tfc:low_canyons',
            'tfc:lowlands',
            'tfc:mountains',
            'tfc:oceanic_mountains',
            'tfc:old_mountains',
            'tfc:plains',
            'tfc:plateau',
            'tfc:river',
            'tfc:rolling_hills',
            'tfc:salt_marsh',
            'tfc:volcanic_mountains',
            'tfc:volcanic_oceanic_mountains',
        ]
    },
    {
        id: 'alexsmobs:moose',
        climateData(climate) {
            climate.minTemp(-30)
            climate.maxTemp(25)
            climate.minRain(300)
            climate.maxRain(375)
            climate.minForest('sparse')
            climate.maxForest('normal')
        },
        faunaData(fauna) {
            fauna.chance(1)
        },
        spawner: {
            weight: 1,
            minCount: 2,
            maxCount: 5
        },
        biomes: [
            'tfc:badlands',
            'tfc:canyons',
            'tfc:highlands',
            'tfc:hills',
            'tfc:inverted_badlands',
            'tfc:lake',
            'tfc:low_canyons',
            'tfc:lowlands',
            'tfc:mountains',
            'tfc:oceanic_mountains',
            'tfc:old_mountains',
            'tfc:plains',
            'tfc:plateau',
            'tfc:river',
            'tfc:rolling_hills',
            'tfc:salt_marsh',
            'tfc:volcanic_mountains',
            'tfc:volcanic_oceanic_mountains',
        ]
    },
    {
        id: 'alexsmobs:potoo',
        climateData(climate) {
            climate.minTemp(18)
            climate.maxTemp(30)
            climate.minRain(250)
            climate.minForest('edge')
            climate.maxForest('normal')
        },
        faunaData(fauna) {
            fauna.chance(1)
        },
        spawner: {
            weight: 1,
            minCount: 1,
            maxCount: 1
        },
        biomes: [
            'tfc:badlands',
            'tfc:canyons',
            'tfc:highlands',
            'tfc:hills',
            'tfc:inverted_badlands',
            'tfc:lake',
            'tfc:low_canyons',
            'tfc:lowlands',
            'tfc:mountains',
            'tfc:oceanic_mountains',
            'tfc:old_mountains',
            'tfc:plains',
            'tfc:plateau',
            'tfc:river',
            'tfc:rolling_hills',
            'tfc:salt_marsh',
            'tfc:volcanic_mountains',
            'tfc:volcanic_oceanic_mountains',
        ]
    },
    {
        id: 'alexsmobs:raccoon',
        climateData(climate) {
            climate.minTemp(-20)
            climate.maxTemp(30)
            climate.minRain(200)
            climate.minForest('sparse')
            climate.maxForest('normal')
        },
        faunaData(fauna) {
            fauna.chance(1)
        },
        spawner: {
            weight: 1,
            minCount: 1,
            maxCount: 3
        },
        biomes: [
            'tfc:badlands',
            'tfc:canyons',
            'tfc:highlands',
            'tfc:hills',
            'tfc:inverted_badlands',
            'tfc:lake',
            'tfc:low_canyons',
            'tfc:lowlands',
            'tfc:mountains',
            'tfc:oceanic_mountains',
            'tfc:old_mountains',
            'tfc:plains',
            'tfc:plateau',
            'tfc:river',
            'tfc:rolling_hills',
            'tfc:salt_marsh',
            'tfc:volcanic_mountains',
            'tfc:volcanic_oceanic_mountains',
        ]
    },
    {
        id: 'alexsmobs:rattlesnake',
        climateData(climate) {
            climate.minTemp(10)
            climate.maxTemp(35)
            climate.minRain(125)
            climate.maxRain(250)
            climate.maxForest('edge')
        },
        faunaData(fauna) {
            fauna.chance(1)
        },
        spawner: {
            weight: 1,
            minCount: 1,
            maxCount: 1
        },
        biomes: [
            'tfc:badlands',
            'tfc:canyons',
            'tfc:highlands',
            'tfc:hills',
            'tfc:inverted_badlands',
            'tfc:lake',
            'tfc:low_canyons',
            'tfc:lowlands',
            'tfc:mountains',
            'tfc:oceanic_mountains',
            'tfc:old_mountains',
            'tfc:plains',
            'tfc:plateau',
            'tfc:river',
            'tfc:rolling_hills',
            'tfc:salt_marsh',
            'tfc:volcanic_mountains',
            'tfc:volcanic_oceanic_mountains',
        ]
    },
    {
        id: 'alexsmobs:rhinoceros',
        climateData(climate) {
            climate.minTemp(15)
            climate.maxTemp(35)
            climate.minRain(125)
            climate.maxRain(375)
            climate.minForest('sparse')
            climate.maxForest('edge')
        },
        faunaData(fauna) {
            fauna.chance(1)
        },
        spawner: {
            weight: 1,
            minCount: 1,
            maxCount: 5
        },
        biomes: [
            'tfc:badlands',
            'tfc:canyons',
            'tfc:inverted_badlands',
            'tfc:lake',
            'tfc:low_canyons',
            'tfc:lowlands',
            'tfc:plains',
            'tfc:plateau',
            'tfc:river',
            'tfc:salt_marsh',
        ]
    },
    {
        id: 'alexsmobs:roadrunner',
        climateData(climate) {
            climate.minTemp(20)
            climate.maxTemp(40)
            climate.minRain(50)
            climate.maxRain(200)
            climate.maxForest('sparse')
        },
        faunaData(fauna) {
            fauna.chance(1)
        },
        spawner: {
            weight: 1,
            minCount: 1,
            maxCount: 2
        },
        biomes: [
            'tfc:badlands',
            'tfc:canyons',
            'tfc:highlands',
            'tfc:hills',
            'tfc:inverted_badlands',
            'tfc:lake',
            'tfc:low_canyons',
            'tfc:lowlands',
            'tfc:plains',
            'tfc:plateau',
            'tfc:river',
            'tfc:rolling_hills',
            'tfc:salt_marsh',
        ]
    },
    {
        id: 'alexsmobs:seagull',
        climateData(climate) {
            climate.minTemp(5)
            climate.maxTemp(30)
            climate.minRain(150)
        },
        faunaData(fauna) {
            fauna.chance(1)
        },
        spawner: {
            weight: 1,
            minCount: 1,
            maxCount: 3
        },
        biomes: [
            'tfc:shore',
            'tfc:tidal_flats',
        ]
    },
    {
        id: 'alexsmobs:shoebill',
        climateData(climate) {
            climate.minTemp(20)
            climate.maxTemp(35)
            climate.minRain(250)
            climate.minForest('sparse')
            climate.maxForest('edge')
        },
        faunaData(fauna) {
            fauna.chance(1)
        },
        spawner: {
            weight: 1,
            minCount: 2,
            maxCount: 4
        },
        biomes: [
            'tfc:lake',
            'tfc:low_canyons',
            'tfc:lowlands',
            'tfc:river',
            'tfc:salt_marsh',
        ]
    },
    {
        id: 'alexsmobs:skunk',
        climateData(climate) {
            climate.minTemp(-20)
            climate.maxTemp(25)
            climate.minRain(200)
            climate.maxRain(375)
            climate.minForest('sparse')
            climate.maxForest('edge')
        },
        faunaData(fauna) {
            fauna.chance(1)
        },
        spawner: {
            weight: 1,
            minCount: 1,
            maxCount: 2
        },
        biomes: [
            'tfc:badlands',
            'tfc:canyons',
            'tfc:highlands',
            'tfc:hills',
            'tfc:inverted_badlands',
            'tfc:lake',
            'tfc:low_canyons',
            'tfc:lowlands',
            'tfc:mountains',
            'tfc:oceanic_mountains',
            'tfc:old_mountains',
            'tfc:plains',
            'tfc:plateau',
            'tfc:river',
            'tfc:rolling_hills',
            'tfc:salt_marsh',
            'tfc:volcanic_mountains',
            'tfc:volcanic_oceanic_mountains',
        ]
    },
    {
        id: 'alexsmobs:snow_leopard',
        climateData(climate) {
            climate.minTemp(-30)
            climate.maxTemp(5)
            climate.minRain(100)
            climate.maxRain(250)
            climate.minForest('sparse')
            climate.maxForest('edge')
        },
        faunaData(fauna) {
            fauna.chance(1)
        },
        spawner: {
            weight: 1,
            minCount: 1,
            maxCount: 2
        },
        biomes: [
            'tfc:highlands',
            'tfc:hills',
            'tfc:mountains',
            'tfc:oceanic_mountains',
            'tfc:old_mountains',
            'tfc:rolling_hills',
        ]
    },
    {
        id: 'alexsmobs:sugar_glider',
        climateData(climate) {
            climate.minTemp(10)
            climate.maxTemp(30)
            climate.minRain(250)
            climate.minForest('edge')
        },
        faunaData(fauna) {
            fauna.chance(1)
        },
        spawner: {
            weight: 1,
            minCount: 1,
            maxCount: 2
        },
        biomes: [
            'tfc:badlands',
            'tfc:canyons',
            'tfc:highlands',
            'tfc:hills',
            'tfc:inverted_badlands',
            'tfc:lake',
            'tfc:low_canyons',
            'tfc:lowlands',
            'tfc:mountains',
            'tfc:oceanic_mountains',
            'tfc:old_mountains',
            'tfc:plains',
            'tfc:plateau',
            'tfc:river',
            'tfc:rolling_hills',
            'tfc:salt_marsh',
            'tfc:volcanic_mountains',
            'tfc:volcanic_oceanic_mountains',
        ]
    },
    {
        id: 'alexsmobs:tasmanian_devil',
        climateData(climate) {
            climate.minTemp(5)
            climate.maxTemp(25)
            climate.minRain(250)
            climate.minForest('sparse')
        },
        faunaData(fauna) {
            fauna.chance(1)
        },
        spawner: {
            weight: 1,
            minCount: 1,
            maxCount: 3
        },
        biomes: [
            'tfc:badlands',
            'tfc:canyons',
            'tfc:highlands',
            'tfc:hills',
            'tfc:inverted_badlands',
            'tfc:lake',
            'tfc:low_canyons',
            'tfc:lowlands',
            'tfc:mountains',
            'tfc:oceanic_mountains',
            'tfc:old_mountains',
            'tfc:plains',
            'tfc:plateau',
            'tfc:river',
            'tfc:rolling_hills',
            'tfc:salt_marsh',
            'tfc:volcanic_mountains',
            'tfc:volcanic_oceanic_mountains',
        ]
    },
    {
        id: 'alexsmobs:tiger',
        climateData(climate) {
            climate.minTemp(20)
            climate.maxTemp(35)
            climate.minRain(250)
            climate.minForest('edge')
        },
        faunaData(fauna) {
            fauna.chance(1)
        },
        spawner: {
            weight: 1,
            minCount: 1,
            maxCount: 2
        },
        biomes: [
            'tfc:badlands',
            'tfc:canyons',
            'tfc:highlands',
            'tfc:hills',
            'tfc:inverted_badlands',
            'tfc:lake',
            'tfc:low_canyons',
            'tfc:lowlands',
            'tfc:mountains',
            'tfc:oceanic_mountains',
            'tfc:old_mountains',
            'tfc:plains',
            'tfc:plateau',
            'tfc:river',
            'tfc:rolling_hills',
            'tfc:salt_marsh',
            'tfc:volcanic_mountains',
            'tfc:volcanic_oceanic_mountains',
        ]
    },
    {
        id: 'alexsmobs:toucan',
        climateData(climate) {
            climate.minTemp(18)
            climate.maxTemp(30)
            climate.minRain(375)
            climate.minForest('edge')
        },
        faunaData(fauna) {
            fauna.chance(1)
        },
        spawner: {
            weight: 1,
            minCount: 1,
            maxCount: 3
        },
        biomes: [
            'tfc:badlands',
            'tfc:canyons',
            'tfc:highlands',
            'tfc:hills',
            'tfc:inverted_badlands',
            'tfc:lake',
            'tfc:low_canyons',
            'tfc:lowlands',
            'tfc:mountains',
            'tfc:oceanic_mountains',
            'tfc:old_mountains',
            'tfc:plains',
            'tfc:plateau',
            'tfc:river',
            'tfc:rolling_hills',
            'tfc:salt_marsh',
            'tfc:volcanic_mountains',
            'tfc:volcanic_oceanic_mountains',
        ]
    },
]

global.aquaticAnimals = [
    {
        id: 'alexsmobs:blobfish',
        climateData(climate) {
            climate.minTemp(2)
            climate.maxTemp(6)
        },
        faunaData(fauna) {
            fauna.chance(1)
            fauna.distanceBelowSeaLevel(35)
        },
        spawner: {
            weight: 1,
            minCount: 1,
            maxCount: 1
        },
        biomes: [
            'tfc:deep_ocean',
            'tfc:deep_ocean_trench',
        ]
    },
    {
        id: 'alexsmobs:cachalot_whale',
        climateData(climate) {
            climate.minTemp(0)
            climate.maxTemp(20)
        },
        faunaData(fauna) {
            fauna.chance(1)
            fauna.distanceBelowSeaLevel(15)
        },
        spawner: {
            weight: 1,
            minCount: 1,
            maxCount: 1
        },
        biomes: [
            'tfc:deep_ocean',
            'tfc:deep_ocean_trench',
            'tfc:ocean',
        ]
    },
    {
        id: 'alexsmobs:catfish',
        climateData(climate) {
            climate.minTemp(10)
            climate.maxTemp(28)
            climate.minRain(250)
        },
        faunaData(fauna) {
            fauna.chance(1)
            fauna.distanceBelowSeaLevel(0)
        },
        spawner: {
            weight: 1,
            minCount: 1,
            maxCount: 3
        },
        biomes: [
            'tfc:lake',
            'tfc:lowlands',
            'tfc:mountain_lake',
            'tfc:oceanic_mountain_lake',
            'tfc:old_mountain_lake',
            'tfc:plateau_lake',
            'tfc:river',
            'tfc:volcanic_mountain_lake',
            'tfc:volcanic_oceanic_mountain_lake',
        ]
    },
    {
        id: 'alexsmobs:flying_fish',
        climateData(climate) {
            climate.minTemp(20)
            climate.maxTemp(30)
        },
        faunaData(fauna) {
            fauna.chance(1)
            fauna.distanceBelowSeaLevel(0)
        },
        spawner: {
            weight: 1,
            minCount: 2,
            maxCount: 6
        },
        biomes: [
            'tfc:deep_ocean',
            'tfc:deep_ocean_trench',
            'tfc:ocean',
            'tfc:ocean_reef',
            'tfc:shore',
            'tfc:tidal_flats',
        ]
    },
    {
        id: 'alexsmobs:frilled_shark',
        climateData(climate) {
            climate.minTemp(20)
            climate.maxTemp(30)
        },
        faunaData(fauna) {
            fauna.chance(1)
            fauna.distanceBelowSeaLevel(25)
        },
        spawner: {
            weight: 1,
            minCount: 1,
            maxCount: 1
        },
        biomes: [
            'tfc:deep_ocean',
            'tfc:deep_ocean_trench',
            'tfc:ocean',
            'tfc:ocean_reef',
        ]
    },
    {
        id: 'alexsmobs:giant_squid',
        climateData(climate) {
            climate.minTemp(2)
            climate.maxTemp(15)
        },
        faunaData(fauna) {
            fauna.chance(1)
            fauna.distanceBelowSeaLevel(33)
        },
        spawner: {
            weight: 1,
            minCount: 1,
            maxCount: 1
        },
        biomes: [
            'tfc:deep_ocean',
            'tfc:deep_ocean_trench',
            'tfc:ocean',
            'tfc:ocean_reef',
        ]
    },
    {
        id: 'alexsmobs:hammerhead_shark',
        climateData(climate) {
            climate.minTemp(20)
            climate.maxTemp(40)
        },
        faunaData(fauna) {
            fauna.chance(1)
            fauna.distanceBelowSeaLevel(5)
        },
        spawner: {
            weight: 1,
            minCount: 1,
            maxCount: 1
        },
        biomes: [
            'tfc:deep_ocean',
            'tfc:deep_ocean_trench',
            'tfc:ocean',
            'tfc:ocean_reef',
            'tfc:shore',
        ]
    },
    {
        id: 'alexsmobs:lobster',
        climateData(climate) {
            climate.minTemp(2)
            climate.maxTemp(20)
        },
        faunaData(fauna) {
            fauna.chance(1)
            fauna.distanceBelowSeaLevel(5)
        },
        spawner: {
            weight: 1,
            minCount: 1,
            maxCount: 3
        },
        biomes: [
            'tfc:ocean',
            'tfc:ocean_reef',
            'tfc:shore',
            'tfc:tidal_flats',
        ]
    },
    {
        id: 'alexsmobs:mantis_shrimp',
        climateData(climate) {
            climate.minTemp(20)
            climate.maxTemp(28)
        },
        faunaData(fauna) {
            fauna.chance(1)
            fauna.distanceBelowSeaLevel(1)
        },
        spawner: {
            weight: 1,
            minCount: 1,
            maxCount: 1
        },
        biomes: [
            'tfc:ocean_reef',
            'tfc:shore',
            'tfc:tidal_flats',
        ]
    },
    {
        id: 'alexsmobs:mimic_octopus',
        climateData(climate) {
            climate.minTemp(24)
            climate.maxTemp(34)
        },
        faunaData(fauna) {
            fauna.chance(1)
            fauna.distanceBelowSeaLevel(5)
        },
        spawner: {
            weight: 1,
            minCount: 1,
            maxCount: 1
        },
        biomes: [
            'tfc:ocean',
            'tfc:ocean_reef',
            'tfc:shore',
            'tfc:tidal_flats',
        ]
    },
    {
        id: 'alexsmobs:orca',
        climateData(climate) {
            climate.minTemp(-1)
            climate.maxTemp(20)
        },
        faunaData(fauna) {
            fauna.chance(5)
            fauna.distanceBelowSeaLevel(6)
        },
        spawner: {
            weight: 1,
            minCount: 3,
            maxCount: 6
        },
        biomes: [
            'tfc:deep_ocean',
            'tfc:deep_ocean_trench',
            'tfc:ocean',
            'tfc:ocean_reef'
        ]
    },
    {
        id: 'alexsmobs:triops',
        climateData(climate) {
            climate.minTemp(5)
            climate.maxTemp(30)
            climate.minRain(50)
            climate.maxRain(125)
            climate.maxForest('sparse')
        },
        faunaData(fauna) {
            fauna.chance(1)
            fauna.distanceBelowSeaLevel(0)
        },
        spawner: {
            weight: 1,
            minCount: 1,
            maxCount: 4
        },
        biomes: [
            'tfc:lake',
            'tfc:lowlands',
            'tfc:volcanic_mountain_lake',
        ]
    },

]

global.amphibiousAnimals = [
    {
        id: 'alexsmobs:alligator_snapping_turtle',
        climateData(climate) {
            climate.minTemp(10)
            climate.maxTemp(30)
            climate.minRain(250)
        },
        faunaData(fauna) {
            fauna.chance(1)
            fauna.distanceBelowSeaLevel(0)
        },
        spawner: {
            weight: 1,
            minCount: 1,
            maxCount: 1
        },
        biomes: [
            'tfc:lake',
            'tfc:lowlands',
            'tfc:river',
        ]
    },
    {
        id: 'alexsmobs:anaconda',
        climateData(climate) {
            climate.minTemp(24)
            climate.maxTemp(32)
            climate.minRain(375)
        },
        faunaData(fauna) {
            fauna.chance(1)
            fauna.distanceBelowSeaLevel(0)
        },
        spawner: {
            weight: 1,
            minCount: 1,
            maxCount: 1
        },
        biomes: [
            'tfc:lake',
            'tfc:lowlands',
            'tfc:river',
        ]
    },
    {
        id: 'alexsmobs:caiman',
        climateData(climate) {
            climate.minTemp(18)
            climate.maxTemp(35)
            climate.minRain(375)
        },
        faunaData(fauna) {
            fauna.chance(1)
            fauna.distanceBelowSeaLevel(0)
        },
        spawner: {
            weight: 1,
            minCount: 1,
            maxCount: 3
        },
        biomes: [
            'tfc:lake',
            'tfc:lowlands',
            'tfc:river',
        ]
    },
    {
        id: 'alexsmobs:crocodile',
        climateData(climate) {
            climate.minTemp(20)
            climate.minRain(250)
        },
        faunaData(fauna) {
            fauna.chance(1)
            fauna.distanceBelowSeaLevel(0)
        },
        spawner: {
            weight: 1,
            minCount: 1,
            maxCount: 2
        },
        biomes: [
            'tfc:lake',
            'tfc:lowlands',
            'tfc:river',
        ]
    },
    {
        id: 'alexsmobs:mudskipper',
        climateData(climate) {
            climate.minTemp(15)
            climate.maxTemp(30)
            climate.minRain(250)
            climate.maxForest('sparse')
        },
        faunaData(fauna) {
            fauna.chance(1)
            fauna.distanceBelowSeaLevel(0)
        },
        spawner: {
            weight: 1,
            minCount: 1,
            maxCount: 2
        },
        biomes: [
            'tfc:lake',
            'tfc:lowlands',
        ]
    },
    {
        id: 'alexsmobs:rain_frog',
        climateData(climate) {
            climate.minTemp(18)
            climate.maxTemp(28)
            climate.maxRain(100)
        },
        faunaData(fauna) {
            fauna.chance(1)
            fauna.distanceBelowSeaLevel(0)
        },
        spawner: {
            weight: 1,
            minCount: 1,
            maxCount: 1
        },
        biomes: [
            'tfc:lowlands',
            'tfc:salt_marsh',
        ]
    },
    {
        id: 'alexsmobs:terrapin',
        climateData(climate) {
            climate.minTemp(10)
            climate.maxTemp(30)
            climate.minRain(250)
        },
        faunaData(fauna) {
            fauna.chance(1)
            fauna.distanceBelowSeaLevel(0)
        },
        spawner: {
            weight: 1,
            minCount: 1,
            maxCount: 1
        },
        biomes: [
            'tfc:lake',
            'tfc:lowlands',
            'tfc:river',
        ]
    },
    {
        id: 'alexsmobs:seal',
        climateData(climate) {
            climate.minTemp(-1)
            climate.maxTemp(20)
        },
        faunaData(fauna) {
            fauna.chance(1)
            fauna.distanceBelowSeaLevel(0)
        },
        spawner: {
            weight: 1,
            minCount: 4,
            maxCount: 8
        },
        biomes: [
            // 'tfc:ocean',
            'tfc:shore',
            'tfc:tidal_flats',
        ]
    },
    {
        id: 'alexsmobs:platypus',
        climateData(climate) {
            climate.minTemp(5)
            climate.maxTemp(25)
            climate.minRain(250)
        },
        faunaData(fauna) {
            fauna.chance(1)
            fauna.distanceBelowSeaLevel(0)
        },
        spawner: {
            weight: 1,
            minCount: 1,
            maxCount: 2
        },
        biomes: [
            'tfc:lake',
            'tfc:lowlands',
            'tfc:river',
        ]
    },

]

global.allAnimals = global.terrestrialAnimals.concat(global.aquaticAnimals, global.amphibiousAnimals)