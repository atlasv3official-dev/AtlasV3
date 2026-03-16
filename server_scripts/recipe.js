ServerEvents.recipes(event => {
//#region Rotary_cannon_barrels

    //#region steel
     event.shaped(
      Item.of('cbcmodernwarfare:steel_rotarycannon_barrel', 1),
      [
        'A A',
        ' A ', 
        'A A'
      ],
      {
        A: 'create:brass_ingot'
      }
    )
     //#endregion

    //#region bronze
     event.shaped(
      Item.of('cbcmodernwarfare:bronze_rotarycannon_barrel', 1),
      [
        'A A',
        ' A ', 
        'A A'
      ],
      {
        A: '#forge:ingots/bronze'
      }
    )
     //#endregion

    //#region nethersteel
     event.shaped(
      Item.of('cbcmodernwarfare:nethersteel_rotarycannon_barrel', 1),
      [
        'A A',
        ' A ', 
        'A A'
      ],
      {
        A: 'createbigcannons:nethersteel_ingot'
      }
    )
     //#endregion

//#endregion
   
//#region Rotary_cannon_bearing

    //#region steel
    event.shaped(
      Item.of('cbcmodernwarfare:steel_rotarycannon_bearing', 1),
      [
        '212',
        '121',
        '212'
      ],
      {
        1: 'create:brass_ingot',
        2: 'createbigcannons:steel_autocannon_recoil_spring'
      }
    )
     //#endregion

    //#region bronze
     event.shaped(
      Item.of('cbcmodernwarfare:bronze_rotarycannon_bearing', 1),
      [
        '212',
        '121',
        '212'
      ],
      {
        1: '#forge:ingots/bronze',
        2: 'createbigcannons:bronze_autocannon_recoil_spring'
      }
    )
     //#endregion

    //#region nethersteel
     event.shaped(
      Item.of('cbcmodernwarfare:nethersteel_rotarycannon_bearing', 1),
      [
        '212',
        '121',
        '212'
      ],
      {
        1: 'createbigcannons:nethersteel_ingot',
        2: 'createbigcannons:steel_autocannon_recoil_spring'
      }
    )
     //#endregion

 //#endregion

//#region Rotary_cannon_breech

    //#region steel
    event.shaped(
      Item.of('cbcmodernwarfare:steel_rotarycannon_breech', 1),
      [
        '212',
        '111',
        '212'
      ],
      {
        1: 'create:brass_ingot',
        2: 'createbigcannons:steel_autocannon_breech'
      }
    )
     //#endregion 

    //#region bronze
    event.shaped(
      Item.of('cbcmodernwarfare:bronze_rotarycannon_breech', 1),
      [
        '212',
        '111',
        '212'
      ],
      {
        1: '#forge:ingots/bronze',
        2: 'createbigcannons:bronze_autocannon_breech'
      }
    )
     //#endregion 

    //#region nethersteel
    event.shaped(
      Item.of('cbcmodernwarfare:nethersteel_rotarycannon_breech', 1),
      [
        '212',
        '111',
        '212'
      ],
      {
        1: 'createbigcannons:nethersteel_ingot',
        2: 'createbigcannons:steel_autocannon_breech'
      }
    )
     //#endregion 

 //#endregion


//#region Medium_cannon_barrel

  //#region bronze
  event.shapeless(
    Item.of('cbcmodernwarfare:bronze_mediumcannon_barrel', 1),
    [
      'createbigcannons:bronze_autocannon_barrel',
      '#forge:ingots/bronze'
    ]
  )
  //#endregion  

  //#region steel
  event.shapeless(
    Item.of('cbcmodernwarfare:steel_mediumcannon_barrel', 1),
    [
      'createbigcannons:steel_autocannon_barrel',
      'create:brass_ingot'
    ]
  )
  //#endregion

  //#region nethersteel
  event.shapeless(
    Item.of('cbcmodernwarfare:nethersteel_mediumcannon_barrel', 1),
    [
      'createbigcannons:nethersteel_autocannon_barrel',
      'createbigcannons:nethersteel_ingot',
    ]
  )
  //#endregion

//#endregion

//#region Medium_cannon_recoil_barrel

  //#region bronze
  event.shapeless(
    Item.of('cbcmodernwarfare:bronze_mediumcannon_recoil_barrel', 1),
    [
      'createbigcannons:bronze_autocannon_recoil_spring',
      '#forge:ingots/bronze'
    ]
  )
  //#endregion  

  //#region steel
  event.shapeless(
    Item.of('cbcmodernwarfare:steel_mediumcannon_recoil_barrel', 1),
    [
      'createbigcannons:steel_autocannon_recoil_spring',
      'create:brass_ingot'
    ]
  )
  //#endregion

  //#region nethersteel
  event.shapeless(
    Item.of('cbcmodernwarfare:nethersteel_mediumcannon_recoil_barrel', 1),
    [
      'createbigcannons:nethersteel_autocannon_recoil_barrel',
      'createbigcannons:nethersteel_ingot',
    ]
  )
  //#endregion

//#endregion

//#region Medium_cannon_breech

  //#region bronze
  event.shapeless(
    Item.of('cbcmodernwarfare:bronze_mediumcannon_breech', 1),
    [
      'createbigcannons:bronze_autocannon_recoil_spring',
      'create:brass_ingot',
      'createbigcannons:bronze_autocannon_breech',

    ]
  )
  //#endregion  

  //#region steel
  event.shapeless(
    Item.of('cbcmodernwarfare:steel_mediumcannon_breech', 1),
    [
      'createbigcannons:steel_autocannon_recoil_spring',
      'create:brass_ingot',
      'createbigcannons:steel_autocannon_breech'
    ]
  )
  //#endregion

  //#region nethersteel
  event.shapeless(
    Item.of('cbcmodernwarfare:nethersteel_mediumcannon_breech', 1),
    [
      'createbigcannons:nethersteel_autocannon_recoil_breech',
      'createbigcannons:nethersteel_ingot',
    ]
  )
  //#endregion

//#endregion


//#region Rocket_rails

  //#region rocket_rails
     event.shaped(
      Item.of('cbcmodernwarfare:rocket_rails', 1),
      [
        'A A',
        'A A', 
        'A A'
      ],
      {
        A: 'createbigcannons:cast_iron_ingot'
      }
    )
  //#endregion

  //#region rocket_rails
     event.shaped(
      Item.of('cbcmodernwarfare:rocket_rails_end', 1),
      [
        'A A',
        'A A', 
        'A A'
      ],
      {
        A: 'createbigcannons:cast_iron_ingot'
      }
    )
  //#endregion

//#endregion

//#region Rocket_parts

//#region Rocket_tank
    event.shaped(
      Item.of('cbcmodernwarfare:solid_fuel_tank', 1),
      [
        '121',
        '121',
        '121'
      ],
      {
        1: 'createbigcannons:cast_iron_ingot',
        2: 'createbigcannons:packed_gunpowder'
      }
    )
//#endregion

//#region Rocket_thruster
    event.shaped(
      Item.of('cbcmodernwarfare:solid_fuel_thruster', 1),
      [
        ' 1 ',
        '121',
        '121'
      ],
      {
        1: 'createbigcannons:cast_iron_ingot',
        2: 'createbigcannons:packed_gunpowder'
      }
    )
//#endregion

//#endregion


//#region Medium_rounds

  //#region Filled_cartrage
    event.recipes.create.deploying('cbcmodernwarfare:filled_mediumcannon_cartridge', ['cbcmodernwarfare:empty_mediumcannon_cartridge', 'createbigcannons:packed_gunpowder'])
  //#endregion

  //#region AP_cartrage
    event.recipes.create.deploying(Item.of('cbcmodernwarfare:ap_mediumcannon_cartridge', '{Projectile:{Count:1b,id:"cbcmodernwarfare:ap_mediumcannon_round"}}'), ['cbcmodernwarfare:filled_mediumcannon_cartridge', 'cbcmodernwarfare:ap_mediumcannon_round'])
  //#endregion

  //#region HE_cartrage
    event.recipes.create.deploying(Item.of('cbcmodernwarfare:he_mediumcannon_cartridge', '{Projectile:{Count:1b,id:"cbcmodernwarfare:he_mediumcannon_round"}}'), ['cbcmodernwarfare:filled_mediumcannon_cartridge', 'cbcmodernwarfare:he_mediumcannon_round'])
  //#endregion

  //#region HEAT_cartrage
    event.recipes.create.deploying(Item.of('cbcmodernwarfare:heap_mediumcannon_cartridge', '{Projectile:{Count:1b,id:"cbcmodernwarfare:heap_mediumcannon_round"}}'), ['cbcmodernwarfare:filled_mediumcannon_cartridge', 'cbcmodernwarfare:heap_mediumcannon_round'])
  //#endregion

  //#region APFSDS_cartrage
    event.recipes.create.deploying(Item.of('cbcmodernwarfare:apfsds_mediumcannon_cartridge', '{Projectile:{Count:1b,id:"cbcmodernwarfare:apfsds_mediumcannon_round"}}'), ['cbcmodernwarfare:filled_mediumcannon_cartridge', 'cbcmodernwarfare:apfsds_mediumcannon_round'])
  //#endregion

//#endregion

//#region Rounds to Medium_rounds

  //#region auto_cartrage_sheet
    event.recipes.create.pressing('createbigcannons:autocannon_cartridge_sheet', 'create:brass_sheet')
  //#endregion

  //#region Medium_cartrage_sheet
    event.recipes.create.deploying('cbcmodernwarfare:mediumcannon_cartridge_sheet', ['createbigcannons:autocannon_cartridge_sheet', 'create:brass_sheet'])
  //#endregion

  //#region Cartrage
    event.recipes.create.deploying('cbcmodernwarfare:empty_mediumcannon_cartridge', ['createbigcannons:empty_autocannon_cartridge', 'cbcmodernwarfare:mediumcannon_cartridge_sheet'])
  //#endregion

  //#region AP
    event.shapeless(
      Item.of('cbcmodernwarfare:ap_mediumcannon_round', 1),
      [
        'createbigcannons:ap_shot'
      ]
    )
  //#endregion

  //#region HE
    event.shapeless(
      Item.of('cbcmodernwarfare:he_mediumcannon_round', 1),
      [
        'createbigcannons:he_shell'
      ]
    )
  //#endregion

  //#region HEAT
    event.shapeless(
      Item.of('cbcmodernwarfare:heap_mediumcannon_round', 1),
      [
        'cbcmodernwarfare:heap_shell'
      ]
    )
  //#endregion

  //#region APFSDS
    event.shapeless(
      Item.of('cbcmodernwarfare:apfsds_mediumcannon_round', 1),
      [
        'cbcmodernwarfare:apds_shot'
      ]
    )
  //#endregion

//#endregion

//#region APFSDS
    event.shaped(
      Item.of('cbcmodernwarfare:apds_shot', 1),
      [
        ' 1 ',
        '111',
        '111'
      ],
      {
        1: 'create:brass_ingot'
      }
    )
//#endregion

//#region cannon mount
    event.shapeless(
      Item.of('cbcmodernwarfare:compact_mount', 1),
      [
        'createbigcannons:cannon_mount'
      ]
    )
//#endregion

}) 