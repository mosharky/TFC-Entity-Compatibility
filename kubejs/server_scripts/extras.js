ServerEvents.tags('worldgen/biome', e => {
    e.add('alexsmobs:spawns_huge_catfish', 'tfc:lowlands')
})


ServerEvents.tags('block', e => {
    // Alex's Mobs block tags:  https://github.dev/AlexModGuy/AlexsMobs/tree/1.20/src/main/resources/data/alexsmobs/tags/blocks

    e.removeAll('alexsmobs:cachalot_whale_breakables')
    e.removeAll('alexsmobs:orca_breakables')

    e.add('alexsmobs:am_spawns', ['#tfc:grass', '#tfc:mud'])
    e.add('alexsmobs:crow_foodblocks', '#tfc:crops')
    e.add('alexsmobs:crow_fears', 'tfc:jack_o_lantern')
    e.add('alexsmobs:elephant_foodblocks', ['#tfc:wild_fruits', 'tfc:melon'])
    e.add('alexsmobs:gelada_monkey_grass', [
        'tfc:plant/pampas_grass',
        'tfc:plant/beachgrass',
        'tfc:plant/bluegrass',
        'tfc:plant/bromegrass',
        'tfc:plant/fountain_grass',
        'tfc:plant/manatee_grass',
        'tfc:plant/orchard_grass',
        'tfc:plant/ryegrass',
        'tfc:plant/scutch_grass',
        'tfc:plant/star_grass',
        'tfc:plant/timothy_grass',
        'tfc:plant/raddia_grass',
        'tfc:plant/cordgrass',
        'tfc:plant/eel_grass',
        'tfc:plant/switchgrass',
        'tfc:plant/tall_fescue_grass',
        'tfc:plant/turtle_grass',
        'tfc:plant/dead_bush',
        'tfc:plant/aythyrium_fern',
        'tfc:plant/king_fern',
        'tfc:plant/lady_fern',
        'tfc:plant/licorice_fern',
        'tfc:plant/ostrich_fern',
        'tfc:plant/sword_fern',
    ])

    e.remove('alexsmobs:lobster_spawns', 'minecraft:water')
    e.add('alexsmobs:lobster_spawns', 'tfc:salt_water')
    e.add('alexsmobs:mantis_shrimp_spawns', '#tfc:mud')
    e.add('alexsmobs:seal_digables', [
        '#tfc:grass',
        '#tfc:clay',
        '#forge:gravel'
    ])
})


ServerEvents.tags('item', e => {
    e.add('tfc:fluxstone', ['alexsmobs:crocodile_scute', 'alexsmobs:spiked_scute'])

    e.add('alexsmobs:bald_eagle_tameables', '#minecraft:fishes')
    e.add('alexsmobs:bananas', 'tfc:food/banana')
    e.add('alexsmobs:blue_jay_foodstuffs', ['#tfc:crops', '#tfc:foods/fruits'])
    e.add('alexsmobs:crow_foodstuffs', ['#tfc:crops'])
    e.add('alexsmobs:elephant_foodstuffs', ['#tfc:foods/fruits', '#tfc:foods/vegetables'])
    e.add('alexsmobs:gorilla_foodstuffs', [
        'tfc:food/sugar_cane',
        'tfc:food/red_apple',
        'tfc:food/green_apple'
    ])
    e.add('alexsmobs:grizzly_foodstuffs', 'tfc:food/salmon')
    e.add('alexsmobs:mimic_octopus_pufferfish_items', 'tfc:bucket/pufferfish')
    e.add('alexsmobs:shrimp_rice_fryables', 'tfc:food/cooked_rice')
})


ServerEvents.tags('entity_type', e => {
    e.add('alexsmobs:passive_land_animals', '#tfc:land_prey')
    e.add('tfc:land_prey', '#alexsmobs:passive_land_animals')

    e.add('tfc:hunted_by_ocean_predators', [
        'alexsmobs:flying_fish'
    ])

    e.add('alexsmobs:neutral_land_animals', [
        'tfc:black_bear',
        'tfc:boar',
        'tfc:wildebeest',
    ])

    e.add('alexsmobs:bald_eagle_targets', [
        'tfc:salmon',
        'tfc:crappie',
        'tfc:bluegill',
        'tfc:lake_trout',
        'tfc:largemouth_bass',
        'tfc:rainbow_trout',
        'tfc:smallmouth_bass',
        'tfc:rabbit'
    ])
    e.add('alexsmobs:cachalot_whale_targets', ['tfc:squid', 'tfc:octopoteuthis'])
    e.add('alexsmobs:caiman_targets', [
        'tfc:chicken',
        'tfc:duck',
        'tfc:quail',
        'tfc:turkey',
        'tfc:grouse',
        'tfc:pheasant',
        'tfc:peafowl',
        'tfc:tropical_fish',
        'tfc:salmon',
        'tfc:crappie',
        'tfc:bluegill',
        'tfc:lake_trout',
        'tfc:largemouth_bass',
        'tfc:rainbow_trout',
        'tfc:smallmouth_bass',
        'tfc:cod',
        'tfc:rabbit',
        'tfc:frog',
    ])
    e.add('alexsmobs:giant_squid_targets', [
        'tfc:salmon',
        'tfc:crappie',
        'tfc:bluegill',
        'tfc:lake_trout',
        'tfc:largemouth_bass',
        'tfc:rainbow_trout',
        'tfc:smallmouth_bass',
        'tfc:cod',
        'tfc:tropical_fish',
    ])
    e.add('alexsmobs:mantis_shrimp_targets', [
        'tfc:tropical_fish',
        'tfc:squid'
    ])
    e.add('alexsmobs:mimic_octopus_fears', 'tfc:dolphin')
    e.add('alexsmobs:orca_targets', [
        'tfc:polar_bear',
        'tfc:turtle',
    ])
    e.add('alexsmobs:skunk_fears', 'tfc:polar_bear')
    e.add('alexsmobs:snow_leopard_targets', '#tfc:land_prey')
})




ServerEvents.recipes(e => {
    e.remove('alexsmobs:bonemeal_from_fish_bones')
    e.recipes.tfc.quern('minecraft:bone_meal', 'alexsmobs:fish_bones').id('your_namespace:bonemeal_from_fish_bones')
    
    // TODO: alex's mobs banner pattern sewing
    // TODO: leather knapping
})



LootJS.modifiers(e => {
    e.addEntityLootModifier('alexsmobs:alligator_snapping_turtle')
        .addLoot('tfc:food/turtle')
    e.addEntityLootModifier('alexsmobs:anteater')
        .addLoot('tfc:medium_raw_hide')
    e.addEntityLootModifier('alexsmobs:bald_eagle')
        .removeLoot(Ingredient.all)
        .addLoot('minecraft:feather')
        .limitCount([8, 12])
    e.addEntityLootModifier('alexsmobs:banana_slug')
        .removeLoot(Ingredient.all) // mucus crashes the game
        .addLoot('minecraft:slimeball')
        .limitCount([0, 1])
    e.addEntityLootModifier('alexsmobs:bison')
        .removeLoot(Ingredient.all)
        .pool(p => {
            p.addLoot('tfc:food/beef')
            p.limitCount([10, 20])
            p.customCondition({ condition: 'tfc:not_predated' })
        })
        .pool(p => {
            p.addLoot('alexsmobs:bison_fur')
            p.limitCount([1, 2])
        })
        .pool(p => {
            p.addLoot('tfc:large_raw_hide')
        })
        .pool(p => {
            p.addLoot('minecraft:bone')
            p.limitCount([1, 10])
        })
    e.addEntityLootModifier('alexsmobs:blue_jay')
        .addLoot('minecraft:feather')
        .limitCount([4, 12])
    e.addEntityLootModifier('alexsmobs:cachalot_whale')
        .pool(p => {
            p.addLoot('tfc:blubber')
            p.limitCount([12, 20])
        })
        .pool(p => {
            p.addLoot('minecraft:bone')
            p.limitCount([16, 24])
        })
    e.addEntityLootModifier('alexsmobs:caiman')
        .pool(p => {
            p.addLoot('tfc:medium_raw_hide')
        })
        .pool(p => {
            p.addLoot('minecraft:bone')
            p.limitCount([1, 3])
        })
    e.addEntityLootModifier('alexsmobs:capuchin_monkey')
        .addLoot('tfc:small_raw_hide')
        .pool(p => {
            p.addLoot('minecraft:bone')
            p.limitCount([0, 1])
        })
    e.addEntityLootModifier('alexsmobs:catfish')
        .pool(p => {
            p.addLoot('alexsmobs:fish_bones')
            p.randomChance(0.5)
        })
    
    e.addEntityLootModifier('alexsmobs:crocodile')
        .removeLoot(Ingredient.all)
        .addLoot('tfc:large_raw_hide')
        .pool(p => {
            p.addLoot('alexsmobs:crocodile_scute')
            p.limitCount([-1, 2])
        })
        .pool(p => {
            p.addLoot('minecraft:bone')
            p.limitCount([1, 7])
        })
    e.addEntityLootModifier('alexsmobs:crow')
        .removeLoot(Ingredient.all)
        .addLoot('minecraft:feather')
        .limitCount([8, 12])
    e.addEntityLootModifier('alexsmobs:elephant')
        .addLoot('2x tfc:large_raw_hide')
        .pool(p => {
            p.addLoot('minecraft:bone')
            p.limitCount([12, 18])
        })
    // TODO: meat
    e.addEntityLootModifier('alexsmobs:emu')
        .removeLoot(Ingredient.all)
        .pool(p => {
            p.addLoot('tfc:medium_raw_hide')
        })
        .pool(p => {
            p.addLoot('alexsmobs:emu_feather')
            p.limitCount([0, 2])
        })
        .pool(p => {
            p.addLoot('minecraft:feather')
            p.limitCount([6, 12])
        })
        .pool(p => {
            p.addLoot('minecraft:bone')
            p.limitCount([1, 7])
        })
    // TODO: meat
    e.addEntityLootModifier('alexsmobs:flying_fish')
        .removeLoot(Ingredient.all)
        .killedByPlayer()
        .addLoot('alexsmobs:flying_fish')
        .pool(p => {
            p.addLoot('alexsmobs:fish_bones')
            p.randomChance(0.25)
        })
    e.addEntityLootModifier('alexsmobs:frilled_shark')
        .addLoot('alexsmobs:fish_bones')
        .limitCount([1, 2])
    e.addEntityLootModifier('alexsmobs:gazelle')
        .removeLoot(Ingredient.all)
        .addLoot('tfc:medium_raw_hide')
        .pool(p => {
            p.addLoot('tfc:food/venison')
            p.customCondition({ condition: 'tfc:not_predated' })
            p.limitCount([3, 8])
        })
        .pool(p => {
            p.addLoot('minecraft:bone')
            p.limitCount([1, 5])
        })
        .pool(p => {
            p.addLoot('alexsmobs:gazelle_horn')
            p.limitCount([0, 1])
        })
    e.addEntityLootModifier('alexsmobs:gelada_monkey')
        .addLoot('tfc:small_raw_hide')
        .pool(p => {
            p.addLoot('minecraft:bone')
            p.limitCount([1, 3])
        })
    e.addEntityLootModifier('alexsmobs:giant_squid')
        .removeLoot(Ingredient.all)
        .pool(p => {
            p.killedByPlayer()
            p.addLoot('minecraft:ink_sac')
            p.limitCount([4, 12])
        })
        .pool(p => {
            p.addLoot('tfc:food/calamari')
            p.limitCount([1, 2])
        })
    e.addEntityLootModifier('alexsmobs:gorilla')
        .addLoot('tfc:large_raw_hide')
        .pool(p => {
            p.addLoot('minecraft:bone')
            p.limitCount([1, 6])
        })
    e.addEntityLootModifier('alexsmobs:grizzly_bear')
        .removeLoot(Ingredient.all)
        .addLoot('tfc:large_raw_hide')
        .pool(p => {
            p.addLoot('minecraft:bone')
            p.limitCount([1, 6])
        })
        .pool(p => {
            p.addLoot('alexsmobs:bear_fur')
            p.limitCount([-1, 2])
        })
    e.addEntityLootModifier('alexsmobs:hammerhead_shark')
        .addLoot('minecraft:bone')
        .limitCount([1, 5])
    e.addEntityLootModifier('alexsmobs:kangaroo')
        .removeLoot(Ingredient.all)
        .addLoot('tfc:medium_raw_hide')
        .pool(p => {
            p.addLoot('alexsmobs:kangaroo_meat')
            p.customCondition({ condition: 'tfc:not_predated' })
            p.limitCount([1, 3])
        })
    e.addEntityLootModifier('alexsmobs:komodo_dragon')
        .addLoot('tfc:medium_raw_hide')
        .pool(p => {
            p.addLoot('minecraft:bone')
            p.limitCount([1, 4])
        })
    e.addEntityLootModifier('alexsmobs:lobster')
        .removeLoot(Ingredient.all)
        .addLoot('tfc:food/shellfish')
        .killedByPlayer()
    e.addEntityLootModifier('alexsmobs:maned_wolf')
        .addLoot('tfc:small_raw_hide')
        .pool(p => {
            p.addLoot('minecraft:bone')
            p.limitCount([1, 4])
        })
    e.addEntityLootModifier('alexsmobs:moose')
        .removeLoot(Ingredient.all)
        .addLoot('tfc:large_raw_hide')
        .pool(p => {
            p.addLoot('tfc:food/venison')
            p.customCondition({ condition: 'tfc:not_predated' })
            p.limitCount([10, 17])
        })
        .pool(p => {
            p.addLoot('alexsmobs:moose_ribs')
            p.customCondition({ condition: 'tfc:not_predated' })
            p.limitCount([1, 3])
        })
        .pool(p => {
            p.addLoot('minecraft:bone')
            p.limitCount([1, 10])
        })
    e.addEntityLootModifier('alexsmobs:mudskipper')
        .removeLoot(Ingredient.all)
        .killedByPlayer()
        .addLoot('tfc:food/tropical_fish')
    e.addEntityLootModifier('alexsmobs:orca')
        .pool(p => {
            p.addLoot('tfc:blubber')
            p.limitCount([2, 7])
        })
        .pool(p => {
            p.addLoot('minecraft:bone')
            p.limitCount([1, 10])
        })
    e.addEntityLootModifier('alexsmobs:platypus')
        .addLoot('tfc:small_raw_hide')
        .addLoot('minecraft:bone')
    e.addEntityLootModifier('alexsmobs:potoo')
        .removeLoot(Ingredient.all)
        .pool(p => {
            p.addLoot('minecraft:feather')
            p.limitCount([4, 12])
        })
        // .pool(p => {
        //     p.addLoot('') //TODO: add meat
        //     p.limitCount([2, 4])
        //     p.killedByPlayer()
        // })
        .pool(p => {
            p.addLoot('minecraft:bone')
            p.limitCount([1, 2])
        })
    e.addEntityLootModifier('alexsmobs:raccoon')
        .addLoot('tfc:small_raw-hide')
        .pool(p => {
            p.addLoot('minecraft:bone')
            p.limitCount([1, 2])
        })
    e.addEntityLootModifier('alexsmobs:rain_frog')
        .addLoot('tfc:food/frog_legs')
        .addLoot('minecraft:bone')
    e.addEntityLootModifier('alexsmobs:rattlesnake')
        .addLoot('tfc:small_raw_hide')
    e.addEntityLootModifier('alexsmobs:rhinoceros')
        .addLoot('tfc:large_raw_hide')
        .pool(p => {
            p.addLoot('minecraft:bone')
            p.limitCount([6, 12])
        })
    e.addEntityLootModifier('alexsmobs:roadrunner')
        .removeLoot(Ingredient.all)
        .pool(p => {
            p.addLoot('minecraft:feather')
            p.limitCount([4, 12])
        })
        .pool(p => {
            p.addLoot('alexsmobs:roadrunner_feather')
            p.limitCount([-2, 1])
        })
        // .pool(p => {
        //     p.addLoot('') //TODO: add meat
        //     p.limitCount([2, 4])
        //     p.killedByPlayer()
        // })
        .pool(p => {
            p.addLoot('minecraft:bone')
            p.limitCount([1, 2])
        })
    e.addEntityLootModifier('alexsmobs:seagull')
        .removeLoot(Ingredient.all)
        .pool(p => {
            p.addLoot('minecraft:feather')
            p.limitCount([2, 8])
        })
        .pool(p => {
            p.addLoot('minecraft:bone')
            p.limitCount([1, 2])
        })
    e.addEntityLootModifier('alexsmobs:seal')
        .addLoot('tfc:small_raw_hide')
        .pool(p => {
            p.addLoot('tfc:blubber')
            p.limitCount([1, 2])
        })
        .pool(p => {
            p.addLoot('minecraft:bone')
            p.limitCount([2, 4])
        })
    e.addEntityLootModifier('alexsmobs:shoebill')
        .removeLoot(Ingredient.all)
        .pool(p => {
            p.addLoot('minecraft:feather')
            p.limitCount([6, 14])
        })
        .pool(p => {
            p.addLoot('minecraft:bone')
            p.limitCount([2, 4])
        })
    e.addEntityLootModifier('alexsmobs:skunk')
        .addLoot('tfc:small_raw_hide')
        .pool(p => {
            p.addLoot('minecraft:bone')
            p.limitCount([1, 2])
        })
    e.addEntityLootModifier('alexsmobs:snow_leopard')
        .addLoot('tfc:large_raw_hide')
        .pool(p => {
            p.addLoot('minecraft:bone')
            p.limitCount([1, 6])
        })
    e.addEntityLootModifier('alexsmobs:tasmanian_devil')
        .addLoot('tfc:small_raw_hide')
        .pool(p => {
            p.addLoot('minecraft:bone')
            p.limitCount([1, 2])
        })
    e.addEntityLootModifier('alexsmobs:terrapin')
        .addLoot('minecraft:scute')
        .limitCount([0, 1])
    e.addEntityLootModifier('alexsmobs:tiger')
        .addLoot('tfc:large_raw_hide')
        .pool(p => {
            p.addLoot('minecraft:bone')
            p.limitCount([1, 6])
        })
    e.addEntityLootModifier('alexsmobs:toucan')
        .removeLoot(Ingredient.all)
        .pool(p => {
            p.addLoot('minecraft:feather')
            p.limitCount([2, 8])
        })
        .pool(p => {
            p.addLoot('minecraft:bone')
            p.limitCount([1, 2])
        })
    e.addEntityLootModifier('alexsmobs:triops')
        .addLoot('tfc:food/shellfish')
        .killedByPlayer()


    // Fish bones for TFC fish
    e.addEntityLootModifier('tfc:cod')
        .randomChance(0.25)
        .addLoot('alexsmobs:fish_bones')

    e.addEntityLootModifier('tfc:salmon')
        .randomChance(0.25)
        .addLoot('alexsmobs:fish_bones')

    e.addEntityLootModifier('tfc:bluegill')
        .randomChance(0.25)
        .addLoot('alexsmobs:fish_bones')

    e.addEntityLootModifier('tfc:crappie')
        .randomChance(0.25)
        .addLoot('alexsmobs:fish_bones')

    e.addEntityLootModifier('tfc:lake_trout')
        .randomChance(0.25)
        .addLoot('alexsmobs:fish_bones')

    e.addEntityLootModifier('tfc:largemouth_bass')
        .randomChance(0.25)
        .addLoot('alexsmobs:fish_bones')

    e.addEntityLootModifier('tfc:rainbow_trout')
        .randomChance(0.25)
        .addLoot('alexsmobs:fish_bones')

    e.addEntityLootModifier('tfc:smallmouth_bass')
        .randomChance(0.25)
        .addLoot('alexsmobs:fish_bones')


    // Reward drops
    // Obtained when giving a seal three fish
    e.addLootTableModifier('alexsmobs:gameplay/seal_reward')
        .removeLoot(Ingredient.all)
        .addWeightedLoot([
            Item.of('minecraft:scute').withChance(50),
            Item.of('tfc:groundcover/clam').withChance(30),
            Item.of('tfc:groundcover/driftwood').withChance(30),
            Item.of('tfc:groundcover/seaweed').withChance(30),
            Item.of('minecraft:ink_sac').withChance(50),
            Item.of('minecraft:glow_ink_sac').withChance(40),
            Item.of('alexsmobs:shark_tooth').withChance(25),
            LootEntry.of('tfc:sand/brown').limitCount([1, 16]).withChance(25),
            LootEntry.of('tfc:sand/white').limitCount([1, 16]).withChance(25),
            LootEntry.of('tfc:sand/black').limitCount([1, 16]).withChance(25),
            LootEntry.of('tfc:sand/yellow').limitCount([1, 16]).withChance(25),
            LootEntry.of('tfc:sand/green').limitCount([1, 16]).withChance(25),
            LootEntry.of('tfc:sand/pink').limitCount([1, 16]).withChance(25),
            Item.of('tfc:plant/winged_kelp').withChance(40),
            Item.of('tfc:plant/leafy_kelp').withChance(40),
            Item.of('tfc:plant/giant_kelp_flower').withChance(40),
            LootEntry.of('minecraft:clay_ball').limitCount([4, 16]).withChance(40),
            LootEntry.of('alexsmobs:fish_bones').limitCount([1, 3]).withChance(50),
            Item.of('minecraft:music_disc_13').withChance(1),
            Item.of('minecraft:music_disc_cat').withChance(1),
            Item.of('minecraft:music_disc_blocks').withChance(1),
            Item.of('minecraft:music_disc_chirp').withChance(1),
            Item.of('minecraft:music_disc_far').withChance(1),
            Item.of('minecraft:music_disc_mall').withChance(1),
            Item.of('minecraft:music_disc_mellohi').withChance(1),
            Item.of('minecraft:music_disc_stal').withChance(1),
            Item.of('minecraft:music_disc_strad').withChance(1),
            Item.of('minecraft:music_disc_ward').withChance(1),
            Item.of('minecraft:music_disc_11').withChance(1),
            Item.of('minecraft:music_disc_wait').withChance(1),
            Item.of('minecraft:music_disc_otherside').withChance(1),
            Item.of('alexsmobs:music_disc_thime').withChance(1),
        ])

    e.addLootTableModifier('alexsmobs:gameplay/sugar_glider_reward')
        .removeLoot(Ingredient.all)
})
