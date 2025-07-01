const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 59.99,
    originalPrice: 79.99,
    image: "https://m.media-amazon.com/images/I/41lArSiD5hL.jpg", // Kept: High-quality, relevant Amazon image
    rating: 4.8,
    reviews: 1240,
    badge: "Best Seller",
    description: "Immersive sound with long-lasting battery life",
  },
  {
    id: 2,
    name: "Smartwatch Series 5",
    price: 199.99,
    originalPrice: 249.99,
    image:
      "https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&w=600&q=80", // Kept: Relevant smartwatch image
    rating: 4.9,
    reviews: 856,
    badge: "New",
    description: "Advanced fitness tracking and sleek design",
  },
  {
    id: 3,
    name: "Casual Sneakers",
    price: 79.0,
    originalPrice: 99.0,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBVjYMlYTQN4frFGOYYve1RMPsCYaCJSyeXg&s", // Kept: Stylish sneaker image
    rating: 4.7,
    reviews: 432,
    badge: "Sale",
    description: "Comfortable and stylish for everyday wear",
  },
  {
    id: 4,
    name: "Leather Backpack",
    price: 120.0,
    originalPrice: 150.0,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSx3YEg6tDUZFgL6ZTLCaligxF-EXJy4HOdA&s", // Kept: Relevant leather backpack
    rating: 4.6,
    reviews: 324,
    badge: "Popular",
    description: "Durable and spacious for all your essentials",
  },
  {
    id: 5,
    name: "Wireless Mouse",
    price: 25.99,
    image:
      "https://images.unsplash.com/photo-1563299796-17596ed6b017?auto=format&fit=crop&w=600&q=80", // Kept: Clear wireless mouse image
    rating: 4.5,
    reviews: 567,
    badge: "Eco-Friendly",
    description: "Ergonomic design with precise control",
  },
  {
    id: 6,
    name: "Bluetooth Speaker",
    price: 49.99,
    originalPrice: 69.99,
    image:
      "https://avstore.in/cdn/shop/files/2.AVStore-JBL-PartyBox-110-160W-Portable-Wireless-Speaker-Front-Left-Angled-View.jpg?v=1682411625&width=2000", // Kept: Suitable speaker image
    rating: 4.7,
    reviews: 789,
    badge: "Hot",
    description: "Portable with powerful sound output",
  },
  {
    id: 7,
    name: "Gaming Keyboard",
    price: 89.99,
    originalPrice: 109.99,
    image:
      "https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2022/04/rgb-lit-gaming-mechanical-keyboard.jpg", // Replaced: More modern RGB gaming keyboard
    rating: 4.6,
    reviews: 654,
    badge: "New",
    description: "Mechanical keys with customizable RGB lighting",
  },
  {
    id: 8,
    name: "Vintage Camera",
    price: 150.0,
    image:
      "https://media.istockphoto.com/id/1156218302/photo/top-view-of-vintage-cameras-on-white-background.jpg?s=612x612&w=0&k=20&c=LBHmMbv1VoBPaynZ1v9ho6vUU-2jhxh1IZ2toXBJ0js=", // Replaced: More retro camera aesthetic
    rating: 4.4,
    reviews: 298,
    badge: "Popular",
    description: "Capture moments with retro style",
  },
  {
    id: 9,
    name: "Stylish Sunglasses",
    price: 34.99,
    image:
      "https://www.glassesindia.com/cdn/shop/files/Stylish-Designer-Hexagon-Black-Gold-Sunglasses-2.png?v=1708405410", // Kept: Fashionable sunglasses
    rating: 4.5,
    reviews: 412,
    description: "UV protection with a fashionable look",
  },
  {
    id: 10,
    name: "Portable Charger",
    price: 29.95,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSlkNwZgR-eC4YOmUW2EwLSzxFrGQXWhdjjw&s", // Kept: Relevant charger image
    rating: 4.6,
    reviews: 521,
    badge: "Eco-Friendly",
    description: "Fast charging for on-the-go power",
  },
  {
    id: 11,
    name: "Fitness Tracker",
    price: 89.0,
    originalPrice: 119.0,
    image:
      "https://akm-img-a-in.tosshub.com/indiatoday/images/story/201902/Fitbit_Charge_3_main_copy.jpeg?size=690:388", // Kept: Clear fitness tracker image
    rating: 4.7,
    reviews: 678,
    badge: "Sale",
    description: "Track your workouts and health metrics",
  },
  {
    id: 12,
    name: "Noise Cancelling Earbuds",
    price: 109.99,
    originalPrice: 139.99,
    image:
      "https://cdn.thewirecutter.com/wp-content/media/2023/09/noise-cancelling-headphone-2048px-0872.jpg", // Kept: Suitable earbuds image
    rating: 4.8,
    reviews: 912,
    badge: "Best Seller",
    description: "Crystal-clear audio with active noise cancellation",
  },
  {
    id: 13,
    name: "Classic Watch",
    price: 210.0,
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=600&q=80", // Kept: Elegant watch image
    rating: 4.9,
    reviews: 345,
    badge: "Popular",
    description: "Timeless elegance for any occasion",
  },
  {
    id: 14,
    name: "Cotton Hoodie",
    price: 65.5,
    originalPrice: 85.0,
    image:
      "https://images.jdmagicbox.com/quickquotes/images_main/printed-cotton-hoodies-unisex-regular-fit-dream-believe-achieve-2019015492-rkvpsioz.jpg", // Kept: Cozy hoodie image
    rating: 4.6,
    reviews: 467,
    badge: "Sale",
    description: "Cozy and comfortable for all-day wear",
  },
  {
    id: 15,
    name: "Office Desk Lamp",
    price: 39.99,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSO1vONgbOGDDhO_MrN17QTQN8Gsc7P8lUu4w&s", // Kept: Relevant desk lamp
    rating: 4.5,
    reviews: 389,
    description: "Adjustable lighting for your workspace",
  },
  {
    id: 16,
    name: "Minimalist Wallet",
    price: 45.0,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEIOIsThOC1zBtP51Osp6hwnQIEOxNkUbaMA&s", // Kept: Slim wallet image
    rating: 4.4,
    reviews: 276,
    badge: "Eco-Friendly",
    description: "Slim design with RFID protection",
  },
  {
    id: 17,
    name: "Action Camera",
    price: 299.99,
    originalPrice: 349.99,
    image: "https://cdn.mos.cms.futurecdn.net/DzJZDXB5KVQBjvXTu4JeyQ.png", // Kept: Suitable action camera
    rating: 4.7,
    reviews: 821,
    badge: "New",
    description: "Capture adventures in stunning 4K",
  },
  {
    id: 18,
    name: "Ergonomic Chair",
    price: 199.99,
    originalPrice: 249.99,
    image:
      "https://www.livemint.com/lm-img/img/2024/07/11/1600x900/best_office_chair_1720674485839_1720674506503.jpg", // Kept: Ergonomic chair image
    rating: 4.8,
    reviews: 543,
    badge: "Popular",
    description: "Comfort and support for long hours",
  },
  {
    id: 19,
    name: "4K Monitor",
    price: 379.99,
    originalPrice: 429.99,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQyfY5lNBPnfP1MxoyveXOwnahACg7iNcZcw&s", // Kept: High-quality monitor image
    rating: 4.9,
    reviews: 672,
    badge: "Best Seller",
    description: "Vivid colors and crisp visuals",
  },
  {
    id: 20,
    name: "Drone Pro 2",
    price: 499.0,
    image:
      "https://www.npcwireless.in/cdn/shop/products/Drones-DJIMavic2Pro-NPCWireless5.jpg?v=1614275270", // Kept: Relevant drone image
    rating: 4.7,
    reviews: 398,
    badge: "New",
    description: "Advanced aerial photography and video",
  },
  {
    id: 21,
    name: "Laptop Stand",
    price: 32.0,
    image:
      "https://images.dailyobjects.com/marche/feature-banner/arete-laptop-stand-1.jpg?tr=cm-pad_crop,v-3,w-412,h-330,dpr-2,q-60", // Kept: Suitable laptop stand
    rating: 4.5,
    reviews: 456,
    description: "Elevate your laptop for better ergonomics",
  },
  {
    id: 22,
    name: "Wireless Charger",
    price: 19.99,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGipDmG0CuQVGbGLJoAtcUMOnhApDRF0pPBw&s", // Kept: Clear wireless charger
    rating: 4.6,
    reviews: 612,
    badge: "Eco-Friendly",
    description: "Fast and convenient wireless charging",
  },
  {
    id: 23,
    name: "USB-C Hub",
    price: 24.5,
    originalPrice: 34.99,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRthrF7LmjePQ0Tnv2Ovvj56_GMyE7TxZ88VQ&s", // Kept: Relevant USB-C hub
    rating: 4.5,
    reviews: 389,
    badge: "Sale",
    description: "Expand your device's connectivity",
  },
  {
    id: 24,
    name: "Gaming Mousepad",
    price: 18.0,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCLbT8hI2e5z7AB68jJlk985yuiforu4GagA&s", // Kept: Suitable mousepad
    rating: 4.4,
    reviews: 321,
    description: "Smooth surface for precise gaming",
  },
  {
    id: 25,
    name: "Tablet Holder",
    price: 22.99,
    image:
      "https://tiyana.in/wp-content/uploads/2024/05/Dinkum-Systems-Tablet-Holder-India-Tiyana-3.jpg", // Kept: Adjustable tablet holder
    rating: 4.5,
    reviews: 298,
    description: "Adjustable stand for tablets and e-readers",
  },
  {
    id: 26,
    name: "Phone Gimbal",
    price: 119.0,
    originalPrice: 149.99,
    image:
      "https://i.ytimg.com/vi/5NsJhRL5Rqc/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDsEvWauwiLobrvzv2Q7tWmRUE6nA", // Keמח Kept: Relevant gimbal image
    rating: 4.7,
    reviews: 456,
    badge: "New",
    description: "Smooth video recording for smartphones",
  },
  {
    id: 27,
    name: "Compact Tripod",
    price: 39.9,
    image:
      "https://images.squarespace-cdn.com/content/v1/5d2cbeb4a45a8100019edb85/1729105436697-Q4N0JUGCZA7DS1P5R4YO/peak-design-tripod_DSC2261_anicholson.jpg", // Kept: Suitable tripod image
    rating: 4.6,
    reviews: 387,
    description: "Portable tripod for photography enthusiasts",
  },
  {
    id: 28,
    name: "Graphic Tablet",
    price: 150.0,
    originalPrice: 179.99,
    image:
      "https://images-cdn.ubuy.co.in/6561cc5cd2924e4dae19400e-turcom-graphic-tablet-drawing-tablets.jpg", // Kept: Relevant graphic tablet
    rating: 4.8,
    reviews: 543,
    badge: "Popular",
    description: "Precision drawing for digital artists",
  },
  {
    id: 29,
    name: "LED Ring Light",
    price: 49.5,
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80", // Replaced: More modern ring light setup
    rating: 4.7,
    reviews: 612,
    badge: "Hot",
    description: "Perfect lighting for content creators",
  },
  {
    id: 30,
    name: "Photo Editing Software",
    price: 79.99,
    image:
      "https://media.gcflearnfree.org/ctassets/topics/246/apps_photoshop_cc1.jpg", // Replaced: Image of photo editing interface
    rating: 4.5,
    reviews: 298,
    description: "Professional tools for photo enhancement",
  },
  {
    id: 31,
    name: "Laptop Sleeve",
    price: 34.0,
    image:
      "https://www.paperclipstore.in/cdn/shop/files/LaptopSleeves_Group_LowRes.jpg?v=1720514972&width=1946", // Kept: Suitable laptop sleeve
    rating: 4.4,
    reviews: 321,
    description: "Protective and stylish laptop cover",
  },
  {
    id: 32,
    name: "Phone Lens Kit",
    price: 29.95,
    image:
      "https://rukminim2.flixcart.com/image/850/1000/xif0q/mobile-phone-lens/c/3/r/188-8-in-1-camera-lens-kit-for-cpl-universal-clip-on-cell-phone-original-imah9h22gyhvhjhx.jpeg?q=90&crop=false", // Kept: Relevant lens kit
    rating: 4.6,
    reviews: 456,
    badge: "Popular",
    description: "Enhance your smartphone photography",
  },
  {
    id: 33,
    name: "Digital Sketchbook",
    price: 95.0,
    image:
      "https://static.designboom.com/wp-content/dbsub/394889/2015-07-29/img_2_1438190503_a177e7bdf1735e76282862d4c6e6ce91.JPG", // Kept: Suitable digital sketchbook
    rating: 4.7,
    reviews: 387,
    badge: "New",
    description: "Digital canvas for creative sketching",
  },
  {
    id: 34,
    name: "Electric Toothbrush",
    price: 49.99,
    originalPrice: 69.99,
    image: "https://cdn.mos.cms.futurecdn.net/LpmQRMBSvwPGrSh2DjKVBL.jpg", // Kept: Modern toothbrush image
    rating: 4.8,
    reviews: 543,
    badge: "Sale",
    description: "Advanced oral care with multiple modes",
  },
  {
    id: 35,
    name: "Smart Home Plug",
    price: 22.0,
    image:
      "https://cdn.thewirecutter.com/wp-content/media/2025/06/smart-plug-2048px-2187-2x1-1.jpg?width=2048&quality=75&crop=2:1&auto=webp", // Kept: Relevant smart plug
    rating: 4.5,
    reviews: 389,
    badge: "Eco-Friendly",
    description: "Control devices with smart connectivity",
  },
  {
    id: 36,
    name: "Laptop Cooling Pad",
    price: 29.0,
    image:
      "https://images-cdn.ubuy.co.in/633aba5bb961822663096fbb-topmate-c11-laptop-cooling-pad-rgb.jpg", // Kept: Suitable cooling pad
    rating: 4.6,
    reviews: 456,
    description: "Keep your laptop cool during heavy use",
  },
];

export default products;
