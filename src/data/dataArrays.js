export const categories = [
  {
    id: 3,
    name: 'Фермерские предметы',
    photo_url:
    'https://onminecraft.ru/files/2019/09/sweet_berries_i.png'
  },
  {
    id: 1,
    name: 'Руды',
    photo_url: 'https://static.wikia.nocookie.net/minecraft_ru_gamepedia/images/b/b3/%D0%90%D0%BB%D0%BC%D0%B0%D0%B7%D0%BD%D0%B0%D1%8F_%D1%80%D1%83%D0%B4%D0%B0_JE1_BE1.png/revision/latest?cb=20200507144653'
  },
  {
    id: 2,
    name: 'Инструмент',
    photo_url:
      'https://w7.pngwing.com/pngs/610/84/png-transparent-minecraft-pickaxe-minecraft-pocket-edition-pickaxe-iron-tool-minecraft-angle-text-rectangle.png'
  },
];

export const recipes = [
  {
    recipeId: 122,
    categoryId: 3,
    title: 'Арбуз',
    photo_url: 'https://static.wikia.nocookie.net/minecraft_ru_gamepedia/images/a/a2/%D0%90%D1%80%D0%B1%D1%83%D0%B7.png/revision/latest/scale-to-width-down/320?cb=20200525065338',
    photosArray: [
      'https://static.wikia.nocookie.net/minecraft_ru_gamepedia/images/a/a2/%D0%90%D1%80%D0%B1%D1%83%D0%B7.png/revision/latest/scale-to-width-down/320?cb=20200525065338',
    ],
    time: '1',
    ingredients: [[0, '9 штук']],
    description:
      '--Положить 9 ломтиков арбуза на верстак'
  },
  {
    recipeId: 3,
    categoryId: 1,
    title: 'Изумрудный блок',
    photo_url:
      'https://static.wikia.nocookie.net/minecraft_ru_gamepedia/images/f/fd/%D0%98%D0%B7%D1%83%D0%BC%D1%80%D1%83%D0%B4%D0%BD%D1%8B%D0%B9_%D0%B1%D0%BB%D0%BE%D0%BA_%D0%B8_%D0%B8%D0%B7%D1%83%D0%BC%D1%80%D1%83%D0%B4%D1%8B.png/revision/latest?cb=20170407083301',
    photosArray: [
      'https://static.wikia.nocookie.net/minecraft_ru_gamepedia/images/f/fd/%D0%98%D0%B7%D1%83%D0%BC%D1%80%D1%83%D0%B4%D0%BD%D1%8B%D0%B9_%D0%B1%D0%BB%D0%BE%D0%BA_%D0%B8_%D0%B8%D0%B7%D1%83%D0%BC%D1%80%D1%83%D0%B4%D1%8B.png/revision/latest?cb=20170407083301',
    ],
    time: '1',
    ingredients: [
      [1, '9 штук'],
    ],
    description: '--Положить 9 изумрудов на верстак'
  },
  {
    recipeId: 2,
    categoryId: 3,
    title: 'Хлеб',
    photo_url: 'https://static.wikia.nocookie.net/minecraft_ru_gamepedia/images/a/ad/%D0%A5%D0%BB%D0%B5%D0%B1.png/revision/latest/scale-to-width-down/160?cb=20190424163852',
    photosArray: [
      'https://static.wikia.nocookie.net/minecraft_ru_gamepedia/images/a/ad/%D0%A5%D0%BB%D0%B5%D0%B1.png/revision/latest/scale-to-width-down/160?cb=20190424163852',
    ],
    time: '1',
    ingredients: [
      [2, '3'],
    ],
    description:
      '--Положить 3 пшеницы на верстак'
  },
  {
    recipeId: 3,
    categoryId: 3,
    title: 'Тушёные грибы',
    photo_url:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTEyhcPQVnme2jRDDdWKLyl-xtFEJC8T7n-gW1OSC2izf5PsOJVAbgrcVSyzVKwVVz-i0&usqp=CAU',
    photosArray: [
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTEyhcPQVnme2jRDDdWKLyl-xtFEJC8T7n-gW1OSC2izf5PsOJVAbgrcVSyzVKwVVz-i0&usqp=CAU',
    ],
    time: '1',
    ingredients: [
      [4, '1 коричневый гриб'],
      [3, '1 красный гриб'],
      [5, '1 миска'],
    ],
    description:
      '--Положить на верстак в верхние ячейки красный и коричневый гриб, на одну ячейку ниже миску'
  },
  {
    recipeId: 1,
    categoryId: 3,
    title: 'Торт',
    photo_url: 'https://static.wikia.nocookie.net/minecraft_ru_gamepedia/images/c/cb/%D0%A2%D0%BE%D1%80%D1%82_JE3_BE1.png/revision/latest?cb=20211125050151',
    photosArray: [
      'https://static.wikia.nocookie.net/minecraft_ru_gamepedia/images/c/cb/%D0%A2%D0%BE%D1%80%D1%82_JE3_BE1.png/revision/latest?cb=20211125050151',
    ],
    time: '1',
    ingredients: [
      [6, '3'],
      [2, '3'],
      [7, '1'],
      [8, '2'],
    ],
    description:
      '--Положить на верние ячейки верстака ведра молока, на ячейки ниже 2 сахар по бокам и яйцо по середина, опустится на ячейки ниже и положить пшеницу'
  },
  {
    recipeId: 4,
    categoryId: 1,
    title: 'Алмазный Блок',
    photo_url: 'http://pm1.narvii.com/6842/c52efc467f4f10b52f8803f0f465cb23667edba1v2_00.jpg',
    photosArray: [
      'http://pm1.narvii.com/6842/c52efc467f4f10b52f8803f0f465cb23667edba1v2_00.jpg',
    ],
    time: '1',
    ingredients: [
      [9, '9 штук'],
    ],
    description:
      '--Положить 9 алмазов на верстак'
  },
  {
    recipeId: 5,
    categoryId: 1,
    title: 'Незеритовый Блок',
    photo_url:
      'https://static.wikia.nocookie.net/minecraft_ru_gamepedia/images/7/74/%D0%9D%D0%B5%D0%B7%D0%B5%D1%80%D0%B8%D1%82%D0%BE%D0%B2%D1%8B%D0%B9_%D0%B1%D0%BB%D0%BE%D0%BA.png/revision/latest?cb=20200625070831',
    photosArray: [
      'https://static.wikia.nocookie.net/minecraft_ru_gamepedia/images/7/74/%D0%9D%D0%B5%D0%B7%D0%B5%D1%80%D0%B8%D1%82%D0%BE%D0%B2%D1%8B%D0%B9_%D0%B1%D0%BB%D0%BE%D0%BA.png/revision/latest?cb=20200625070831',
    ],
    time: 1,
    ingredients: [
      [10, '9 штук'],
    ],
    description:
      '--Положить 9 незеритовых слитков на верстак'
  },
  {
    recipeId: 6,
    categoryId: 2,
    title: 'Алмазный меч',
    photo_url:
      'https://static.wikia.nocookie.net/minecraft_ru_gamepedia/images/b/b9/%D0%90%D0%BB%D0%BC%D0%B0%D0%B7%D0%BD%D1%8B%D0%B9_%D0%BC%D0%B5%D1%87.png/revision/latest?cb=20190424165325',
    photosArray: [
      'https://static.wikia.nocookie.net/minecraft_ru_gamepedia/images/b/b9/%D0%90%D0%BB%D0%BC%D0%B0%D0%B7%D0%BD%D1%8B%D0%B9_%D0%BC%D0%B5%D1%87.png/revision/latest?cb=20190424165325',
    ],
    time: 1,
    ingredients: [
      [9, '2'],
      [11, '1'],
    ],
    description:
      '--На верстак положить 2 алмаза по середине вертекально и палку внизу'
  },
  {
    recipeId: 7,
    categoryId: 2,
    title: 'Ножницы',
    photo_url: 'https://static.wikia.nocookie.net/minecraft_ru_gamepedia/images/5/5b/%D0%9D%D0%BE%D0%B6%D0%BD%D0%B8%D1%86%D1%8B_%28%D0%B4%D0%BE_Texture_Update%29.png/revision/latest?cb=20180824072516',
    photosArray: [
      'https://static.wikia.nocookie.net/minecraft_ru_gamepedia/images/5/5b/%D0%9D%D0%BE%D0%B6%D0%BD%D0%B8%D1%86%D1%8B_%28%D0%B4%D0%BE_Texture_Update%29.png/revision/latest?cb=20180824072516',
    ],
    time: 1,
    ingredients: [
      [12, '2'],
    ],
    description:
      '--Положить на верстак противоположно 2 слитка железа.'
  },
  {
    recipeId: 8,
    categoryId: 2,
    title: 'Огниво',
    photo_url: 'https://static.wikia.nocookie.net/minecraft-mojang/images/f/f6/%D0%9E%D0%B3%D0%BD%D0%B8%D0%B2%D0%BE.png/revision/latest/top-crop/width/360/height/450?cb=20181127162536&path-prefix=ru',
    photosArray: [
      'https://static.wikia.nocookie.net/minecraft-mojang/images/f/f6/%D0%9E%D0%B3%D0%BD%D0%B8%D0%B2%D0%BE.png/revision/latest/top-crop/width/360/height/450?cb=20181127162536&path-prefix=ru',
    ],
    time: 1,
    ingredients: [
      [12, '1'],
      [13, '1'],
    ],
    description:
      '--Положить на верстак слиток железа и кремень'
  }
];

export const ingredients = [
  {
    ingredientId: 0,
    name: 'Ломтик Арбуза',
    photo_url: 'https://static.wikia.nocookie.net/minecraft_ru_gamepedia/images/4/46/%D0%9B%D0%BE%D0%BC%D1%82%D0%B8%D0%BA_%D0%B0%D1%80%D0%B1%D1%83%D0%B7%D0%B0.png/revision/latest/scale-to-width-down/160?cb=20190424164525'
  },
  {
    ingredientId: 1,
    name: 'Изумруд',
    photo_url:
      'https://static.wikia.nocookie.net/minecraft_ru_gamepedia/images/4/46/%D0%98%D0%B7%D1%83%D0%BC%D1%80%D1%83%D0%B4.png/revision/latest/scale-to-width-down/160?cb=20190314082732'
  },
  {
    ingredientId: 2,
    name: 'Пшеницы',
    photo_url: 'https://static.wikia.nocookie.net/minecraft_ru_gamepedia/images/b/b8/%D0%9F%D1%88%D0%B5%D0%BD%D0%B8%D1%86%D0%B0.png/revision/latest/smart/width/250/height/250?cb=20190127074020'
  },
  {
    ingredientId: 3,
    name: 'Красный Гриб',
    photo_url:
      'https://static.wikia.nocookie.net/minecraft_ru_gamepedia/images/1/14/%D0%91%D0%B0%D0%B3%D1%80%D0%BE%D0%B2%D1%8B%D0%B9_%D0%B3%D1%80%D0%B8%D0%B1%D0%BE%D0%BA.png/revision/latest?cb=20200625063934'
  },
  {
    ingredientId: 4,
    name: 'Коричневый Гриб',
    photo_url: 'https://static.wikia.nocookie.net/minecraft_ru_gamepedia/images/0/07/%D0%9A%D0%BE%D1%80%D0%B8%D1%87%D0%BD%D0%B5%D0%B2%D1%8B%D0%B9_%D0%B3%D1%80%D0%B8%D0%B1.png/revision/latest?cb=20200327053634'
  },
  {
    ingredientId: 5,
    name: 'Миска',
    photo_url: 'https://static.wikia.nocookie.net/minecraft_ru_gamepedia/images/b/b6/%D0%9C%D0%B8%D1%81%D0%BA%D0%B0.png/revision/latest/scale-to-width-down/1200?cb=20191116055457'
  },
  {
    ingredientId: 6,
    name: 'Молоко',
    photo_url:
      'https://static.wikia.nocookie.net/minecraft_ru_gamepedia/images/2/2f/%D0%92%D0%B5%D0%B4%D1%80%D0%BE_%D1%81_%D0%BC%D0%BE%D0%BB%D0%BE%D0%BA%D0%BE%D0%BC.png/revision/latest/scale-to-width-down/1200?cb=20190424171754'
  },
  {
    ingredientId: 7,
    name: 'Яйцо',
    photo_url:
      'https://static.wikia.nocookie.net/minecraft_ru_gamepedia/images/c/c9/%D0%AF%D0%B9%D1%86%D0%BE.png/revision/latest/scale-to-width-down/160?cb=20190424174957'
  },
  {
    ingredientId: 8,
    name: 'Сахар',
    photo_url:
      'https://static.wikia.nocookie.net/minecraft-mojang/images/b/ba/%D0%A1%D0%B0%D1%85%D0%B0%D1%80.png/revision/latest/top-crop/width/360/height/450?cb=20181124171131&path-prefix=ru'
  },
  {
    ingredientId: 9,
    name: 'Алмаз',
    photo_url: 'https://static.wikia.nocookie.net/minecraft_ru_gamepedia/images/5/57/%D0%90%D0%BB%D0%BC%D0%B0%D0%B7.png/revision/latest/smart/width/250/height/250?cb=20190424162100'
  },
  {
    ingredientId: 10,
    name: 'Незеритовый слиток',
    photo_url: 'https://static.wikia.nocookie.net/minecraft_ru_gamepedia/images/6/6b/%D0%9D%D0%B5%D0%B7%D0%B5%D1%80%D0%B8%D1%82%D0%BE%D0%B2%D1%8B%D0%B9_%D1%81%D0%BB%D0%B8%D1%82%D0%BE%D0%BA.png/revision/latest/smart/width/250/height/250?cb=20200206175909'
  },
  {
    ingredientId: 11,
    name: 'Палка',
    photo_url: 'https://static.wikia.nocookie.net/minecraft_ru_gamepedia/images/0/06/%D0%9F%D0%B0%D0%BB%D0%BA%D0%B0.png/revision/latest/smart/width/250/height/250?cb=20180824073505'
  },
  {
    ingredientId: 12,
    name: 'Железо',
    photo_url:
      'https://onminecraft.ru/files/2012/03/iron-ingot.png'
  },
  {
    ingredientId: 13,
    name: 'Кремень',
    photo_url:
      'https://static.wikia.nocookie.net/minecraft_ru_gamepedia/images/b/bd/%D0%9A%D1%80%D0%B5%D0%BC%D0%B5%D0%BD%D1%8C.png/revision/latest/scale-to-width-down/160?cb=20190424162357'
  },
  {
    ingredientId: 14,
    name: 'Kosher salt',
    photo_url:
      'https://d1yn1kh78jj1rr.cloudfront.net/image/preview/r64-6MxPQjlatyfjp/storyblocks-top-view-of-ceramic-salt-cellar-with-coarse-grained-sea-salt-isolated-on-white-background_SPzKionPuV_SB_PM.jpg'
  },
  {
    ingredientId: 15,
    name: 'Whole chicken',
    photo_url:
      'https://image.shutterstock.com/image-photo/two-raw-chicken-drumsticks-isolated-260nw-632125991.jpg'
  },
  {
    ingredientId: 16,
    name: 'Eggs',
    photo_url:
      'https://image.shutterstock.com/image-photo/egg-whites-yolk-cup-isolated-260nw-1072453787.jpg'
  },
  {
    ingredientId: 17,
    name: 'Quarts neutral oil',
    photo_url:
      'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimg1.cookinglight.timeinc.net%2Fsites%2Fdefault%2Ffiles%2Fstyles%2F4_3_horizontal_-_1200x900%2Fpublic%2Fgettyimages-464433694_0.jpg%3Fitok%3DK42YR2GV&w=400&c=sc&poi=face&q=85'
  },
  {
    ingredientId: 18,
    name: 'Water',
    photo_url: 'https://ak1.picdn.net/shutterstock/videos/829561/thumb/11.jpg'
  },
  {
    ingredientId: 19,
    name: 'Onion Powder',
    photo_url:
      'https://image.shutterstock.com/image-photo/mixed-spices-isolated-on-white-260nw-662383828.jpg'
  },
  {
    ingredientId: 20,
    name: 'MSG',
    photo_url:
      'https://img.freepik.com/free-photo/monosodium-glutamate-wood-spoon-white-background_55883-399.jpg?size=626&ext=jpg'
  },
  {
    ingredientId: 21,
    name: 'Chicken Breast',
    photo_url:
      'https://us.123rf.com/450wm/utima/utima1602/utima160200063/53405187-raw-chicken-breast-fillets.jpg?ver=6'
  },
  {
    ingredientId: 22,
    name: 'Onion chopped',
    photo_url: 'https://s3.envato.com/files/246703499/IMG_1752_5.jpg'
  },
  {
    ingredientId: 23,
    name: 'Tomato paste',
    photo_url:
      'http://d3e1m60ptf1oym.cloudfront.net/45bab59a-363c-11e1-ab4e-bf4c2e0bb026/PANELA_xgaplus.jpg'
  },
  {
    ingredientId: 24,
    name: 'Chilli Powder',
    photo_url:
      'https://us.123rf.com/450wm/nuttapong/nuttapong1505/nuttapong150500009/40458002-paprika-powder-isolated-on-white-background.jpg?ver=6'
  },
  {
    ingredientId: 25,
    name: 'Ground Beef',
    photo_url:
      'https://images.radio.com/kmoxam/s3fs-public/styles/nts_image_cover_tall_775x425/public/dreamstime_s_39607998.jpg?XCM.w1UGOp9sVKkWGQZe7_JIsRddxoIK&itok=3M6KcFLH&c=73fb6497175b4c1a5c79e3ede816656a'
  },
  {
    ingredientId: 26,
    name: 'Can kidney beans, rinsed and drained ',
    photo_url:
      'https://www.seriouseats.com/images/2014/04/20140414-pile-of-beans-primary-1500x1125.jpg'
  },
  {
    ingredientId: 27,
    name: 'Large Tortillas',
    photo_url: 'https://upload.wikimedia.org/wikipedia/commons/5/56/NCI_flour_tortillas.jpg'
  },
  {
    ingredientId: 28,
    name: 'Firtos',
    photo_url:
      'https://previews.123rf.com/images/ksena32/ksena321510/ksena32151000090/45863494-fried-fish-on-a-white-background.jpg'
  },
  {
    ingredientId: 29,
    name: 'Shredded cheddar',
    photo_url:
      'https://image.shutterstock.com/image-photo/top-view-small-bowl-filled-260nw-284460308.jpg'
  },
  {
    ingredientId: 30,
    name: 'Lime',
    photo_url: 'https://ak8.picdn.net/shutterstock/videos/23271748/thumb/1.jpg'
  },

  {
    ingredientId: 31,
    name: 'Ground cumin',
    photo_url:
      'https://image.shutterstock.com/image-photo/pile-cumin-powder-isolated-on-260nw-1193262853.jpg'
  },
  {
    ingredientId: 32,
    name: 'Cayenne pepper',
    photo_url: 'https://ak7.picdn.net/shutterstock/videos/11461337/thumb/1.jpg'
  },
  {
    ingredientId: 33,
    name: 'Flaky white fish',
    photo_url:
      'https://image.shutterstock.com/image-photo/roach-river-fish-isolated-on-260nw-277764143.jpg'
  },
  {
    ingredientId: 34,
    name: 'Avocado',
    photo_url:
      'https://www.redwallpapers.com/public/redwallpapers-large-thumb/avocado-cut-stone-leaves-white-background-free-stock-photos-images-hd-wallpaper.jpg'
  },
  {
    ingredientId: 35,
    name: 'Red Pepper Flakes',
    photo_url:
      'https://as1.ftcdn.net/jpg/02/06/55/10/500_F_206551074_mVczUrAWOSMaw8kR48FQDQBqDw47jCtL.jpg'
  },
  {
    ingredientId: 36,
    name: 'Onions',
    photo_url: 'http://www.allwhitebackground.com/images/2/2650.jpg'
  },
  {
    ingredientId: 37,
    name: 'Green Pepper',
    photo_url: 'https://ak9.picdn.net/shutterstock/videos/4055509/thumb/1.jpg'
  },
  {
    ingredientId: 38,
    name: 'Red Pepper',
    photo_url: 'https://ak9.picdn.net/shutterstock/videos/10314179/thumb/1.jpg'
  },
  {
    ingredientId: 39,
    name: 'Pizza dough',
    photo_url:
      'https://image.shutterstock.com/image-photo/fresh-raw-dough-pizza-bread-260nw-518950903.jpg'
  },
  {
    ingredientId: 40,
    name: 'Ketchup sauce',
    photo_url:
      'https://st2.depositphotos.com/5262887/11050/i/950/depositphotos_110501208-stock-photo-ketchup-bowl-isolated-on-white.jpg'
  },
  {
    ingredientId: 41,
    name: 'Hot Sauce',
    photo_url:
      'https://media.istockphoto.com/photos/opened-can-of-spaghetti-sauce-on-a-white-background-picture-id497704752?k=6&m=497704752&s=612x612&w=0&h=JnL54buYu1Z3fGtd8uNdjFxiAKwlxoDluD6jbIfSaZI='
  },
  {
    ingredientId: 42,
    name: 'Butter',
    photo_url: 'https://redrockstoffee.com/media/2016/11/AdobeStock_76417550.jpeg'
  },
  {
    ingredientId: 43,
    name: 'Heavy Cream',
    photo_url:
      'https://media.istockphoto.com/photos/mayonnaise-in-bowl-isolated-on-white-background-picture-id614981116?k=6&m=614981116&s=612x612&w=0&h=LtbsI2HQXOTERYuP9YJ2PJfRF3W6DcyZ798fxMcQWC0='
  },
  {
    ingredientId: 44,
    name: 'whole-milk plain yogurt',
    photo_url:
      'https://st.depositphotos.com/2757384/3317/i/950/depositphotos_33170129-stock-photo-pouring-a-glass-of-milk.jpg'
  },
  {
    ingredientId: 45,
    name: 'Chesse',
    photo_url: 'https://ak7.picdn.net/shutterstock/videos/3619997/thumb/1.jpg'
  },
  {
    ingredientId: 46,
    name: 'Mozzarella',
    photo_url:
      'https://t3.ftcdn.net/jpg/02/06/73/98/500_F_206739841_suPu6qDPHlowFqx9qo8fLqV8sNevL2g3.jpg'
  },
  {
    ingredientId: 47,
    name: 'celery stalks',
    photo_url:
      'https://cdn4.eyeem.com/thumb/6d1b3957c7caa9b73c3e0f820ef854b931808139-1538043742765/w/750'
  },
  {
    ingredientId: 48,
    name: 'Parmesan Chesse',
    photo_url: 'https://ak7.picdn.net/shutterstock/videos/3721877/thumb/1.jpg'
  },
  {
    ingredientId: 49,
    name: 'pancetta',
    photo_url:
      'https://previews.123rf.com/images/onlyfabrizio/onlyfabrizio1606/onlyfabrizio160600002/60198502-raw-stripes-of-pancetta-stesa-on-a-white-background.jpg'
  },
  {
    ingredientId: 50,
    name: 'Spaghetti',
    photo_url:
      'https://previews.123rf.com/images/mfron/mfron1204/mfron120400098/13306773-bunch-of-spaghetti-nudeln-isoliert-auf-wei%C3%9Fem-hintergrund.jpg'
  },
  {
    ingredientId: 51,
    name: 'Garlic',
    photo_url: 'https://image.freepik.com/free-photo/fresh-garlic-white-background_1339-17012.jpg'
  },
  {
    ingredientId: 52,
    name: 'Lasagna noodles',
    photo_url:
      'https://previews.123rf.com/images/velkol/velkol1110/velkol111000004/11083085-an-image-of-raw-lasagna-on-white-background.jpg'
  },
  {
    ingredientId: 53,
    name: 'Italian sauce',
    photo_url:
      'https://previews.123rf.com/images/arinahabich/arinahabich1504/arinahabich150400858/38827029-raw-italian-sausage-on-a-white-background-.jpg'
  },
  {
    ingredientId: 54,
    name: 'Crushed Tomatoes',
    photo_url:
      'https://previews.123rf.com/images/merkulovnik/merkulovnik1406/merkulovnik140600100/28751626-crushed-tomato-isolated-on-white-background.jpg'
  },
  {
    ingredientId: 55,
    name: 'Sugar',
    photo_url:
      'https://previews.123rf.com/images/sommai/sommai1411/sommai141100034/33199985-sugar-cubes-in-a-bowl-isolated-on-white-background.jpg'
  },
  {
    ingredientId: 56,
    name: 'minced fresh parsley',
    photo_url:
      'https://t4.ftcdn.net/jpg/02/15/78/05/240_F_215780551_Eid0xpP1M2fokvuEcvJj8uqhROLJkb3p.jpg'
  },
  {
    ingredientId: 57,
    name: 'ricotta cheese',
    photo_url:
      'https://previews.123rf.com/images/barkstudio/barkstudio1608/barkstudio160800351/61418602-ricotta-cheese-into-a-bowl-in-white-background.jpg'
  },
  {
    ingredientId: 58,
    name: ' fennel seed',
    photo_url:
      'https://previews.123rf.com/images/pinkomelet/pinkomelet1710/pinkomelet171000227/88851299-close-up-the-fennel-seed-on-white-background.jpg'
  },
  {
    ingredientId: 59,
    name: 'Banana',
    photo_url:
      'https://www.conservationmagazine.org/wp-content/uploads/2013/04/sterile-banana.jpg'
  },
  {
    ingredientId: 60,
    name: 'Frozen Straberries',
    photo_url:
      'https://www.cascadianfarm.com/wp-content/uploads/2018/12/Strawberries_Main_0218.png'
  },
  {
    ingredientId: 61,
    name: 'Greek Yogurt',
    photo_url:
      'http://images.media-allrecipes.com/userphotos/960x960/3758635.jpg'
  },
];
