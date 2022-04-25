//Backend component - product.js

//This file contains general information about various products (such as name, description, brand, price) and the location of the respective images.

//This file works in tandem with the Product.js file found in the Frontend to display all the details of a product in a visually pleasing and aesthetic format.

/* The data is of an array format, following a general structure, as shown below:
 * {
 * name: Name of the product.
 * image: Location where image file is stored, along with filename & format.
 * description: A brief description about the product or it's features.
 * brand: Name of the brand that sells the particular product.
 * price: Price of the product.
 * countInStock: Keeps track of the quantity of a product in inventory.
 * rating: Keeps track of the average rating of a product.
 * numReviews: Keeps track of the number of users who have reviewed a particular project.
 *}
 */

const products = [
  {
    name: 'Airpods Wireless Bluetooth Headphones',
    image: '/images/airpods.jpg',
    description:
      'Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working',
    brand: 'Apple',
    category: 'Electronics',
    price: 89.99,
    countInStock: 3,
    rating: 0,
    numReviews: 0,
  },
  {
    name: 'iPhone 11 Pro 256GB Memory',
    image: '/images/phone.jpg',
    description:
      'Introducing the iPhone 11 Pro. A transformative triple-camera system that adds tons of capability without complexity. An unprecedented leap in battery life',
    brand: 'Apple',
    category: 'Electronics',
    price: 599.99,
    countInStock: 10,
    rating: 0,
    numReviews: 0,
  },
  {
    name: 'Cannon EOS 80D DSLR Camera',
    image: '/images/camera.jpg',
    description:
      'Characterized by versatile imaging specs, the Canon EOS 80D further clarifies itself using a pair of robust focusing systems and an intuitive design',
    brand: 'Cannon',
    category: 'Electronics',
    price: 929.99,
    countInStock: 0,
    rating: 0,
    numReviews: 0,
  },
  {
    name: 'Sony Playstation 4 Pro White Version',
    image: '/images/playstation.jpg',
    description:
      'The ultimate home entertainment center starts with PlayStation. Whether you are into gaming, HD movies, television, music',
    brand: 'Sony',
    category: 'Electronics',
    price: 399.99,
    countInStock: 10,
    rating: 0,
    numReviews: 0,
  },
  {
    name: 'Logitech G-Series Gaming Mouse',
    image: '/images/mouse.jpg',
    description:
      'Get a better handle on your games with this Logitech LIGHTSYNC gaming mouse. The six programmable buttons allow customization for a smooth playing experience',
    brand: 'Logitech',
    category: 'Electronics',
    price: 49.99,
    countInStock: 7,
    rating: 0,
    numReviews: 0,
  },
  {
    name: 'Amazon Echo Dot 3rd Generation',
    image: '/images/alexa.jpg',
    description:
      'Meet Echo Dot - Our most popular smart speaker with a fabric design. It is our most compact smart speaker that fits perfectly into small space',
    brand: 'Amazon',
    category: 'Electronics',
    price: 29.99,
    countInStock: 0,
    rating: 0,
    numReviews: 0,
  },
  {
    name: 'HP Chromebook 14 inches Thin & Light Touchscreen Laptop',
    image: '/images/hp_13lite.jpg',
    description:
      'Intel Celeron N4020, 4GB RAM, 64GB eMMC + 256GB Expandable Storage, Chrome OS, 1.46 kg weight, Mineral Silver color',
    brand: 'HP',
    category: 'Laptops',
    price: 350.00,
    countInStock: 70,
    rating: 0,
    numReviews: 0,
  },
{
    name: 'VAIO SE14 NP14V3IN033P',
    image: '/images/vaio_13.jpg',
    description:
      'Intel Core i5-1135G7, Intel Iris Xe Graphics, 8GB RAM, 512GB SSD, Windows 10 Home, Backlit Keyboard, FHD screen, Fingerprint Reader, 1.39 kg weight, Red Copper color',
    brand: 'VAIO',
    category: 'Laptops',
    price: 1130.00,
    countInStock: 25,
    rating: 0,
    numReviews: 0,
  }, 
{
    name: 'Acer Nitro 5 AN515-57 Gaming Laptop',
    image: '/images/nitro5_gaming.jpg',
    description:
      'Intel Core i5-11400H, NVIDIA GeForce RTX 3050 Graphics, 15.6" FHD 144Hz IPS Display, 8GB DDR4, 256GB SSD+1TB HDD, Killer Wi-Fi 6, RGB Backlit Keyboard',
    brand: 'Acer',
    category: 'Laptops',
    price: 940.00,
    countInStock: 35,
    rating: 0,
    numReviews: 0,
  },
{
    name: 'Lenovo Ideapad Gaming 3-Series Laptop',
    image: '/images/lenovo_three.jpg',
    description:
      'AMD Ryzen 5 5600H, 15.6 inch FHD 120Hz IPS display, 8GB RAM, 512GB SSD, Windows 11, NVIDIA GTX 1650 Graphics, Backlit Keyboard, 2.25 kg weight, Shadow Black color',
    brand: 'Lenovo',
    category: 'Laptops',
    price: 805.00,
    countInStock: 35,
    rating: 0,
    numReviews: 0,
  },
{
    name: 'Dell Inspiron 7415 2 in 1',
    image: '/images/dell_2in1.jpg',
    description:
      'AMD R5 5500U, 14 inch FHD Touch Display, 8GB RAM, 512GB SSD, Intel Integrated Graphics, Windows 10, MS Office, Backlit Keyboard, Fingerpint Reader FPR, Active Pen, 1.5 kg weight, Pebble Metal color',
    brand: 'Dell',
    category: 'Laptops',
    price: 940.00,
    countInStock: 25,
    rating: 0,
    numReviews: 0,
  }, 
{
    name: 'Xiaomi Mi 11X Pro 5G',
    image: '/images/xia_mi11x.jpg',
    description:
      'Cosmic Black color, 8GB RAM, 128GB Storage, Snapdragon 888, 108MP Camera, Android 11, 4520mAh battery, 33W fast charging',
    brand: 'Xiaomi',
    category: 'Mobiles',
    price: 500.00,
    countInStock: 15,
    rating: 0,
    numReviews: 0,
  },
{
    name: 'OnePlus Nord 2 5G',
    image: '/images/op_nord2.jpg',
    description:
      'Blue Haze color, MediaTek Dimensity 1200, 8GB RAM, 128GB Storage, 4500mAh battery, Android 11, 50MP Triple Camera',
    brand: 'OnePlus',
    category: 'Mobiles',
    price: 405.00,
    countInStock: 30,
    rating: 0,
    numReviews: 0,
  },
{
    name: 'iQOO 7 5G',
    image: '/images/iqoo7.jpg',
    description:
      'Storm Black, Snapdragon 870, 8GB RAM, 128GB Storage, 48MP camera, 4400mAh battery, 66W fast charging, Android 11',
    brand: 'iQOO',
    category: 'Mobiles',
    price: 400.00,
    countInStock: 25,
    rating: 0,
    numReviews: 0,
  }, 
{
    name: 'Samsung Galaxy M52 5G',
    image: '/images/galaxym52.jpg',
    description:
      'Blazing Black, Snapdragon 778G, 8GB RAM, 128GB Storage, 64MP triple camera, 5000mAh battery, Android 11',
    brand: 'Samsung',
    category: 'Mobiles',
    price: 430.00,
    countInStock: 20,
    rating: 0,
    numReviews: 0,
  }, 
{
    name: 'Oppo Reno 6 Pro 5G',
    image: '/images/reno6.jpg',
    description:
      'Aurora color, MediaTek Dimensity 1200, 12GB RAM, 256GB Storage, 64MP triple camera, 4500mAh battery, Android 11',
    brand: 'Oppo',
    category: 'Mobiles',
    price: 530.00,
    countInStock: 30,
    rating: 0,
    numReviews: 0,
  }, 
{
    name: 'Fire TV Stick 4K with Alexa Voice Remote',
    image: '/images/fire_tv.jpg',
    description:
      'Watch in vibrant 4K Ultra HD with support for Dolby Vision, HDR, and HDR10+. Launch and control content with the next-gen Alexa Voice Remote. Use the dedicated power, volume, and mute buttons to control your TV. Enjoy brilliant picture and immersive sound with access to 4K Ultra HD, Dolby Vision, Dolby Atmos, HDR, HDR-10, HLG, and HDR-10+. Choose from thousands of movies and TV episodes. Enjoy favorites from Prime Video, Hotstar, Netflix, Zee5, Sony LIV, Apple TV and others. Experience thousands of apps, Alexa skills, and millions of websites like Facebook, and Twitter.',
    brand: 'Amazon',
    category: 'Electronics',
    price: 60.00,
    countInStock: 15,
    rating: 0,
    numReviews: 0,
  },
{
    name: 'OnePlus Smart Band',
    image: '/images/op_watch.jpg',
    description:
      'Removable main tracker design allows for effortless transition between dynamic dual-color strap combos. On-demand daytime spot checks and continuous sleep monitoring of blood oxygen saturation (Sp02) quickly and accurately highlight potential health issues. Access key mobile features directly from your wrist. the OnePlus Health App analyzes health data, provides insights and advice on your personal health.',
    brand: 'OnePlus',
    category: 'Electronics',
    price: 23.00,
    countInStock: 25,
    rating: 0,
    numReviews: 0,
  }, 
{
    name: 'Sony Bravia 65 inch 4K Ultra HD Smart LED TV',
    image: '/images/sony_tv.jpg',
    description:
      'Discover worlds of entertainment on this Google™ TV, brought to life in beautiful colour by the realism of our picture and sound technology. Over a billion colours are brought to life by TRILUMINOS PRO and our 4K HDR Processor X1. With extreme contrast, everything you watch feels so real. Feel surrounded by clear, high quality sound from multiple dimensions, putting you right there inside the scene. See all  your favourite movies in a new way with more drama and realism on a 4K OLED TV thats designed to create a real theatre experience at home. Dolby Vision brings scenes to life authentically while Dolby Atmos fills the room with immersive sound. Use your voice to quickly find what you want to watch. Find a specific title just by saying it.',
    brand: 'Sony',
    category: 'Electronics',
    price: 1365.00,
    countInStock: 30,
    rating: 0,
    numReviews: 0,
  }, 
{
    name: 'boAt Rockerz 450 Bluetooth Wireless On Ear Headphone with Mic',
    image: '/images/boat_hp.jpg',
    description:
      'Its 40mm dynamic drivers help pump out immersive HD audio all day long. It provides a massive battery backup of upto 15 hours for a superior playback time. It has been ergonomically designed and structured as an on-ear headphone to provide the best user experience with its comfortable padded earcushions and lightweight design. You can control your music without hiccups using the easy access controls, communicate seamlessly using the built-in mic, access voice assistant and always stay in the zone.',
    brand: 'boAt',
    category: 'Electronics',
    price: 18.00,
    countInStock: 45,
    rating: 0,
    numReviews: 0,
  },
{
    name: 'TP-Link C60 AC1350 Dual Band Wifi Router',
    image: '/images/tplink_wifi.jpg',
    description:
      'Faster Wifi — At both the 2.4GHz band (450mbps) and the 5GHz band (867mbps), Superior Coverage — Three 2.4 GHz antennas and two 5 GHz antennas create superior Wi-Fi coverage, Qualcomm Chipset — High-Performance Chipset provides an excellent connection experience, More devices — MU-MIMO achieves 2× efficiency by communicating with up to 2 devices simultaneously, Smart Wireless — Beamforming technology delivers highly efficient wireless connection (supported by Version 2.0 and above), Advanced Functions — Parental Control, Local Management Control, Host List, Access Schedule, Rule Management.',
    brand: 'TP-LINK',
    category: 'Electronics',
    price: 31.00,
    countInStock: 120,
    rating: 5,
    numReviews: 1,}
 







//00000000000000000000000



{
    name: 'Nike VAPOR Mercurial Football Boots',
    image: '/images/nike.png',
    description:
      'Best boots for outdoor football with soft sole made for grass or dirt turf especially for pero football players',
    brand: 'Nike',
    category: 'Fashion',
    price: 1999.99,
    countInStock: 11,
    rating: 0,
    numReviews: 0,
  },
{
    name: 'Adidas Running Sneakers',
    image: '/images/adidas.png',
    description:
      "Heritage adidas vibes come through in these running-inspired shoes. Bringing together the best of classic track design and the clean lines of modern streetwear, they have a timeless feel that's easy to pair with your day-to-day look. The Cloudfoam midsole provides super-soft steps.",
    brand: 'Adidas',
    category: 'Fashion',
    price: 1850.50,
    countInStock: 18,
    rating: 0,
    numReviews: 0,
  }, 
{
    name: 'Naruto Titanium Ring',
    image: '/images/ring.png',
    description:
      'Cool ring with a Naruto clan logo thing engraved in a titatnium design flow made out of steel.',
    brand: 'Oblivion',
    category: 'Fashion',
    price: 16.99,
    countInStock: 29,
    rating: 0,
    numReviews: 0,
  },
{
    name: 'Gojo Saturo Hoodie',
    image: '/images/gojo.png',
    description:
      'Unisex Jujutsu Kaisen Yuji Hoodie Gojo Satoru Sweatshirt Printed Pullover Comfy Hoodie For Weebs',
    brand: 'EmeJate',
    category: 'Fashion',
    price: 550.00,
    countInStock: 22,
    rating: 0,
    numReviews: 0,
  },
{
    name: 'CrazyDog T-shirts: funny Tee',
    image: '/images/deeznuts.png',
    description:
      'Mens daily wear comfy T-shirts made of 90% cotton, soft and high quality, for dank memers and the boys',
    brand: 'CrazyDog T-shirts',
    category: 'Fashion',
    price: 220.00,
    countInStock: 22,
    rating: 0,
    numReviews: 0,
  }, 
{
    name: 'Black Dad Hat',
    image: '/images/hat.png',
    description:
      'Ann Arbor T-shirt Co. | Funny Sarcastic Sarcasm Joke Cap for Men/ Women | Baseball Dad Hat Black',
    brand: 'Ann Arbor Co',
    category: 'Fashion',
    price: 169.99,
    countInStock: 16,
    rating: 0,
    numReviews: 0,
  },
{
    name: 'Star Wars Yoda Retro Tshirt',
    image: '/images/yoda.png',
    description:
      'STAR WARS Movie Who Da Man Yoda  Retro  Funny graphic T-Shirt for daily wear relaxed fit. Unisex.',
    brand: 'STAR WARS',
    category: 'Fashion',
    price: 599.99,
    countInStock: 30,
    rating: 0,
    numReviews: 0,
  },
{
    name: 'CrazyDog T-shirts: gamer Tee',
    image: '/images/game.png',
    description:
      'Mens daily wear comfy T-shirt, soft and relaxed fit. I Paused My Game to Be Here Graphic Novelty Sarcastic Funny T Shirt.',
    brand: 'Feelin Good Tees',
    category: 'Fashion',
    price: 199.99,
    countInStock: 19,
    rating: 0,
    numReviews: 0,
  }, 
{
    name: 'Italian humour T-shirt ',
    image: '/images/italian.png',
    description:
      'Unisex daily wear comfy T-shirts made of 90% cotton, soft and high quality, Italian loud humour joke haha ',
    brand: 'Ann Arbor T-shirt Co.',
    category: 'Fashion',
    price: 185.00,
    countInStock: 18,
    rating: 0,
    numReviews: 0,
  }, 
{
    name: 'CrazyDog T-shirts: fitness Tee',
    image: '/images/taco.png',
    description:
      'Mens Fitness Taco  Humorous Gym Graphic Novelty Sarcastic Tee. Soft and high quality, made of 90% cotton.',
    brand: 'CrazyDog T-shirts',
    category: 'Fashion',
    price: 220.00,
    countInStock: 22,
    rating: 0,
    numReviews: 0,
  }, 
{
    name: 'Mens Cool Summer shorts',
    image: '/images/shorts.png',
    description:
      'Belovecol Mens Cool Summer lightweight Trunk Shorts with Quick Dry tech and Side Pockets Mesh Lining',
    brand: 'Belovecool',
    category: 'Fashion',
    price: 145.50,
    countInStock: 14,
    rating: 0,
    numReviews: 0,
  },
{
    name: 'The Walking Dad T- shirt',
    image: '/images/walking.png',
    description:
      'The Walking Dad short sleeve T- shirt is a reference of The Walking Dead is a superb fathers day gift.',
    brand: 'Soimiss',
    category: 'Fashion',
    price: 99.99,
    countInStock: 23,
    rating: 0,
    numReviews: 0,
  }, 
{
    name: 'Adidas Mens Essentials T',
    image: '/images/adidasT.png',
    description:
      'Premium high quality and soft touch mens essential adidas T-shirt for daily use with a big bold adidas logo.',
    brand: 'Adidas',
    category: 'Fashion',
    price: 299.99,
    countInStock: 29,
    rating: ,
    numReviews: 0,
  }, 
{
    name: "Levi's Jeans for men",
    image: '/images/jeans.png',
    description:
      "Enhanced Jeans for daily wear and tear, strech-able and long lasting premium quality jeans by Levi's.",
    brand: "Levi's",
    category: 'Fashion',
    price: 419.99,
    countInStock: 19,
    rating: 0,
    numReviews: 0,
  },
{
    name: 'Big Chungus Hoodie',
    image: '/images/chungus.png',
    description:
      'Big Chungus hoodie for big chunguses or dank memers, unisex, good quality material',
    brand: 'Oshirola',
    category: 'Fashion',
    price: 420.00,
    countInStock: 21,
    rating: 0,
    numReviews: 0,
  }

]  



 

export default products
