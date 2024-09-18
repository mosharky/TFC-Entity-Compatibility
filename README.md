# **Entity Compatibility w/ KubeJS for TerraFirmaCraft (TFC)**

**Notes:**
- You absolutely do not have to do it this way with KubeJS, this is just probably the easiest way to set this all up if you're going to use KubeJS. Please use [Entity Zoning Supervisor](https://www.curseforge.com/minecraft/mc-mods/entity-zoning-supervisor) if you think this is too complicated for you. Note that you'll probably want to still use KubeJS for other parts of compatibility, like loot tables and recipes.
- Keep in mind that all of my code in here is **incomplete**; you will not get full Alex's Mobs compatibility from just my scripts. I'm currently working on a mod to add compatibility to Alex's Mobs but it'll take a while. I made this repo to help others get animal spawning working for other mods.
- Replace `your_namespace` with whatever you want your namespace to be.


## **Dependencies**
- Minecraft 1.20.1
- Forge or NeoForge
- [KubeJS](https://modrinth.com/mod/kubejs) (Requires: [Rhino](https://modrinth.com/mod/rhino) and [Architectury](https://modrinth.com/mod/architectury-api))
- [KubeJS TFC](https://modrinth.com/mod/kubejs-tfc)
- [LootJS](https://modrinth.com/mod/lootjs) (Optional: used to modify entity loot tables if needed)

## **Useful Documentation**
- [TFC API Wiki](https://terrafirmacraft.github.io/Documentation/1.20.x/)
- [TFC API fauna documentation](https://terrafirmacraft.github.io/Documentation/1.20.x/custom/#fauna)
- [TFC API climate documentation](https://terrafirmacraft.github.io/Documentation/1.20.x/worldgen/decorators/#climate)
- [KubeJS Wiki](https://wiki.latvian.dev/books/kubejs)
- [KubeJS TFC fauna documentation](https://notenoughmail.github.io/kubejs_tfc/1.20.1/data/#fauna)
- [KubeJS TFC fauna registry documentation](https://notenoughmail.github.io/kubejs_tfc/1.20.1/events/#register-fauna-definitions)
- [KubeJS TFC climate documenation](https://notenoughmail.github.io/kubejs_tfc/1.20.1/worldgen/#climate)
- [LootJS Wiki](https://github.com/AlmostReliable/lootjs/wiki)

# **Guide**
If just reading the code wasn't enough, here you go!

## **Spawning Data**
You need to make an object for every animal you'd like to spawn. Each object is stored in global arrays; `terrestrialAnimals`, `aquaticAnimals`, and `amphibiousAnimals`; that correspond to whether the animal is terrestrial, aquatic, or amphibious respectively. We need these to be global arrays in a startup script since they'll be used in startup and server scripts too. We're going to loop over these arrays to implement mob spawning later.

Each animal object holds the following **required** fields and methods:
- `id` **(String)**: Entity id (usually its in `mod_id:entity_name` format)
    - You can press F3 and look at a mob to get its id
- `climateData(Consumer)`: Data for the climate this entity can spawn in
    - **Note**: These are all optional
    - `Consumer.minTemp(Number)`: Sets the minimum average annual temperature this animal can spawn in **(celsius)**
    - `Consumer.maxTemp(Number)`: Sets the maximum average annual temperature this animal can spawn in **(celsius)**
    - `Consumer.minRain(Number)`: Sets the minimum average annual rainfall this animal can spawn in **(milimeters)**
    - `Consumer.maxRain(Number)`: Sets the maximum average annual rainfall this animal can spawn in **(milimeters)**
    - `Consumer.minForest(String)`: Sets the minimum forestation level this animal can spawn in **(`none`, `sparse`, `edge`, `normal`, and `old_growth`)**
    - `Consumer.maxForest(String)`: Sets the maximum forestation level this animal can spawn in **(`none`, `sparse`, `edge`, `normal`, and `old_growth`)**
    - `Consumer.fuzzy(Boolean)`: **From wiki**: *If true, the temperature and rainfall requirements will be probabilistic relative to the center point, with maximum density at the exact center, and zero density at the edges.* **(Whatever the hell that means; this is probably safe to ignore since TFC barely uses this for any animals)**
- `faunaData(Consumer)`: Additional data for where/how it could spawn
    - `Consumer.chance(Number)`: 1/(chance) chunks that this animal will spawn, defaults to 1
        - Higher chance value = rarer spawn
        - This is in addition to the `weight` field in the `spawner` object; only use this if you want something to be rarer than what `weight` allows
    - `Consumer.distanceBelowSeaLevel(Number)`: Sets the distance below sea level it would spawn in (only applicable if it's aquatic/amphibious; do not set otherwise)
    - `Consumer.solidGround(Boolean)`: Determines if the mob is required to spawn on a block tagged `minecraft:valid_spawn`, defaults to `false`
    - `Consumer.maxBrightness(Number)`: Sets the maximum light level the mob may spawn in
- `spawner` **(Object)**: Holds the data on the chance and amount of the animal that may spawn (seperate from faunaData's `chance()`)
    - `weight` **(Number)**: The chance this animal will spawn among amongst other entites' weight (check out [a TFC biome](https://github.com/TerraFirmaCraft/TerraFirmaCraft/blob/1.20.x/src/main/resources/data/tfc/worldgen/biome/plains.json#L32) for an example)
    - `minCount` **(Number)**: The minimum group size this animal could spawn in
    - `maxCoutn` **(Number)**: The maximum group size this animal could spawn in
- `biomes` **(Array[String])**: The biomes (terrain type in TFC) this animal can spawn in

Example (in startup script):
```js
// priority: 100
// HEY YOU! The prioerity is important; we need these arrays to load before everything else so we can use them in other scripts.

global.terrestrialAnimals = [
    {
        id: 'some_mod:some_animal',
        climateData(climate) {
            climate.minTemp(-30)
            climate.maxTemp(30)
            climate.minRain(250)
            climate.maxRain(375)
            climate.minForest('none')
            climate.maxForest('edge')
        },
        faunaData(fauna) {
            fauna.chance(10) // a value of 10 makes this pretty rare
        },
        spawner: {
            weight: 1,
            minCount: 1,
            maxCount: 2
        },
        biomes: [
            'tfc:mountains',
            'tfc:plains'
        ]
    },
    {
        // insert other animals!
    }
]

global.aquaticAnimals = [
    {
        id: 'some_mod:some_fish',
        climateData(climate) {
            climate.minTemp(5)
        },
        faunaData(fauna) {}, // you dont need to put anything!
        spawner: {
            weight: 5,
            minCount: 3,
            maxCount: 7
        },
        biomes: [
            'tfc:river'
        ]
    },
    {
        // insert other fish!
    }
]

global.amphibiousAnimals = [
    {
        id: 'some_mod:some_amphibian',
        climateData(climate) {}, // you dont need to put anything!
        faunaData(fauna) {}, // you dont need to put anything!
        spawner: {
            weight: 5,
            minCount: 3,
            maxCount: 7
        },
        biomes: [
            'tfc:river',
            'tfc:lowlands'
        ]
    },
    {
        // insert other amphibions!
    },
],


// ⚠️ IMPORTANT ⚠️
// This combines all the arrays into one. We'll need to loop over all of animals with the same function in server_scripts, so we might as well define this in this script
global.allAnimals = global.terrestrialAnimals.concat(global.aquaticAnimals, global.amphibiousAnimals)
```


## **Registering Each Animal as a "Fauna"**
An animal is considered a "fauna" in TFC once you've registered it as such. A fauna is where we register which block each animal in our arrays is allowed to spawn on (ground, water, either). This is why we made seperate arrays for terrestrial, aquatic, and amphibious animals.

Here's how I'd recommend you register them. It's the same way [TFC registers them](https://github.com/TerraFirmaCraft/TerraFirmaCraft/blob/1.20.x/src/main/java/net/dries007/tfc/common/entities/Faunas.java#L161-L162) (startup script):
```js
TFCEvents.registerFaunas(event => {
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
```


## **Spawning Finalization**
If you weren't aware, mob spawns in Minecraft are defined per-biome. TFC is no different and defines its mob spawns with both their fauna system *and* by adding them to biome spawners. We're going to simply use [Forge's biome modifiers](https://forge.gemwire.uk/wiki/Biome_Modifiers) to add each animal to their biomes instead of making a datapack and monotonously adding every single animal to a biome file.

How I did it (server script):
```js
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
})
```

If you'd like to, you can also use Forge's biome modifiers to remove any TFC mobs that overlap with the mod you're adding compat for like I've done for Alex's Mobs (server script):
```js
ServerEvents.highPriorityData(e => {
    e.addJson(`your_namespace:forge/biome_modifier/remove_tfc_overlap_spawns`, {
        type: 'forge:remove_spawns',
        // all biomes in TFC
        biomes: [ 
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
```


## **Extras**
From here, it's standard KubeJS stuff to polish/balance everything to work with TFC. You'd need to at least fill up plenty of TFC's and your mod's tags and probably replace the loot tables of whatever mobs you'd add compat for. 

Check out [`kubejs/server_scripts/extras.js`](https://github.com/mosharky/TFC-Entity-Compatibility/blob/main/kubejs/server_scripts/extras.js)