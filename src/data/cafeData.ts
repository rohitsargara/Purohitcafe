import { Testimonial, PlantInfo, StrengthFeature, GalleryItem, MenuCard } from '../types';

export const CAFE_INFO = {
  name: 'Purohit Cafe',
  tagline: 'Best South Indian Food & Chaat of Udaipur',
  subTagline: 'Authentic South Indian Restaurant & Chaat Sanctuary',
  address: 'Anand Plaza, University Rd, opp. INOX mall, Shabri Colony, Ayad, Ganapati Nagar, Udaipur, Rajasthan 313001',
  phone: '+0294-2429635',
  phoneClean: '02942429635',
  phoneTel: 'tel:02942429635',
  phoneMobile: '+91 94141 55635',
  phoneMobileTel: 'tel:+919414155635',
  email: 'contact@purohitcafe.com',
  timings: 'Daily : 8:00 am–10:00 pm',
  timingsWeekly: 'Sunday – Saturday : 8:00 am–10:00 pm',
  onlineOrderUrl: 'https://purohitcafe.com/menu-restaurant/',
  zomatoUrl: 'https://www.zomato.com/udaipur/purohit-cafe-subhash-nagar',
  swiggyUrl: 'https://www.swiggy.com/city/udaipur/purohit-cafe-subhash-nagar-rest422176',
  instagramUrl: 'https://www.instagram.com/purohitcafe/',
  facebookUrl: 'https://www.facebook.com/purohitcafe/',
  mapEmbedUrl: 'https://maps.google.com/maps?q=purohit%20cafe%20udaipur&t=m&z=15&output=embed&iwloc=near',
  mapDirectUrl: 'https://maps.google.com/?q=Purohit+Cafe+Anand+Plaza+University+Rd+opp+INOX+mall+Udaipur+Rajasthan+313001'
};

export const HERO_SLIDES = [
  {
    id: 1,
    image: '/images/main-slider/slider-2.jpg',
    subtitle: 'Authentic South Indian & Chaat',
    title: 'Crispy Dosas & Timeless Flavors',
    description: 'Come with family & friends to experience Udaipur’s finest dosas, savory rava dosas, and authentic South Indian delicacies.',
    ctaText: 'Explore Menu',
    ctaLink: '#/menu'
  },
  {
    id: 2,
    image: '/images/main-slider/slider-1.jpg',
    subtitle: 'Where Every Bite Tells a Story',
    title: 'From South Indian Dosas to Chaat',
    description: 'Fermented to perfection using traditional stone-ground lentils and rice. Savor the crisp perfection of Mysore butter dosas and spicy chutneys.',
    ctaText: 'Order On Swiggy',
    ctaLink: CAFE_INFO.swiggyUrl
  },
  {
    id: 3,
    image: '/images/main-slider/slider-3.jpg',
    subtitle: 'Freshly Prepared Daily',
    title: 'Soft Idlis, Crispy Vadas & Filter Coffee',
    description: 'Enjoy steaming hot sambhar, velvety coconut chutney, and authentic South Indian filter coffee in our peaceful botanical ambience.',
    ctaText: 'Order On Zomato',
    ctaLink: CAFE_INFO.zomatoUrl
  }
];

export const STATS_DATA = [
  { target: 350, label: 'Daily Orders', suffix: '+' },
  { target: 85, label: 'South Indian Dishes', suffix: '+' },
  { target: 25, label: 'Master Chefs', suffix: '+' },
  { target: 5000, label: 'Satisfied Foodies', suffix: '+' }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Dr. Rahul Sharma',
    role: 'Food Enthusiast, Udaipur',
    avatar: '/images/resource/t1.png',
    rating: 5,
    content:
      'Purohit Cafe is hands-down the best spot for South Indian food in Udaipur! Their Mysore Butter Masala Dosa is wonderfully crispy, the sambar has that authentic home-style aroma, and the filter coffee is unmatched.'
  },
  {
    id: '2',
    name: 'Pooja Menaria',
    role: 'Regular Patron',
    avatar: '/images/resource/t2.png',
    rating: 5,
    content:
      'Visited Purohit Cafe with my family near INOX Mall. The Paper Plain Dosa was huge and golden, and the Dahi Vada was melt-in-mouth soft. Very clean kitchen, polite service, and serene ambience.'
  },
  {
    id: '3',
    name: 'Virendra Singh Rathore',
    role: 'Udaipur Local Guide',
    avatar: '/images/resource/t3.png',
    rating: 5,
    content:
      'If you crave genuine South Indian food in Udaipur, Purohit Cafe is the place to be. The Rava Onion Dosa and Sevpuri are absolute must-tries. Fast service and authentic taste every single time.'
  },
  {
    id: '4',
    name: 'Deepika Purohit',
    role: 'Happy Customer',
    avatar: '/images/resource/t4.png',
    rating: 5,
    content:
      'The cheese butter masala dosa and steaming hot idli-vada combo here made our Sunday morning! Great location at Anand Plaza on University Road with ample parking and lovely garden vibes.'
  }
];

export const STRENGTHS: StrengthFeature[] = [
  {
    title: 'Authentic Recipes',
    image: '/images/resource/featured-1.jpg',
    icon: '/images/resource/why-icon-1.png',
    delay: '0ms'
  },
  {
    title: 'Fresh & Hygienic',
    image: '/images/resource/featured-2.jpg',
    icon: '/images/resource/why-icon-2.png',
    delay: '300ms'
  },
  {
    title: 'Master South Indian Chefs',
    image: '/images/resource/featured-4.jpg',
    icon: '/images/resource/why-icon-3.png',
    delay: '600ms'
  },
  {
    title: '30-Min Fast Delivery',
    image: '/images/resource/featured-3.jpg',
    icon: '/images/resource/why-icon-4.png',
    delay: '900ms'
  }
];

export const BOTANICAL_HERBS: PlantInfo[] = [
  {
    id: 'curry-leaf',
    name: 'Fresh Curry Leaf (Kadi Patta)',
    scientificName: 'Murraya koenigii',
    description: 'The aromatic soul of our tadkas. Freshly plucked leaves tossed in hot mustard oil to release earthy, antioxidant-rich flavor across our sambar and chutneys.',
    iconName: 'fa-leaf',
    benefits: ['Rich in Antioxidants', 'Aids Digestion', 'Signature South Indian Aroma']
  },
  {
    id: 'fenugreek',
    name: 'Golden Fenugreek (Methi Seeds)',
    scientificName: 'Trigonella foenum-graecum',
    description: 'Blended into our traditional dosa batter to impart that delicate crispiness, golden hue, and natural digestive fermentation.',
    iconName: 'fa-seedling',
    benefits: ['Natural Fermentation Booster', 'Crisp Golden Crust', 'Balances Blood Sugar']
  },
  {
    id: 'fresh-coconut',
    name: 'Fresh Coconut Palms',
    scientificName: 'Cocos nucifera',
    description: 'Freshly grated white coconut ground daily with roasted gram dal, green chillies, and ginger for our creamy signature chutneys.',
    iconName: 'fa-tree',
    benefits: ['Healthy Medium-Chain Fats', 'Cooling & Hydrating', 'Daily Fresh Grated']
  },
  {
    id: 'mint',
    name: 'Fresh Garden Mint (Pudina)',
    scientificName: 'Mentha spicata',
    description: 'Hand-picked mint leaves infused into our famous Pudina Masala Dosa and tangy chaat pani for a zesty, refreshing botanical kick.',
    iconName: 'fa-spa',
    benefits: ['Invigorating Freshness', 'Gut Soothing', 'Herbaceous Flavor']
  },
  {
    id: 'mustard-cumin',
    name: 'Botanical Mustard & Cumin',
    scientificName: 'Brassica nigra & Cuminum cyminum',
    description: 'Crackle-tempered in pure desi ghee and ground freshly into our rasam and sambar spice masalas for authentic South Indian depth.',
    iconName: 'fa-feather-pointed',
    benefits: ['Heart-Healthy Phytonutrients', 'Deep Tempered Crunch', 'Warming Spiciness']
  },
  {
    id: 'chicory-coffee',
    name: 'South Indian Coffee Shrub',
    scientificName: 'Coffea arabica',
    description: 'High-altitude Arabica & Robusta coffee beans slow-dripped in traditional South Indian brass filters with a touch of chicory.',
    iconName: 'fa-mug-hot',
    benefits: ['Authentic Frothy Decoction', 'Natural Morning Energy', 'Rich Aromatics']
  },
  {
    id: 'coriander',
    name: 'Green Coriander Herb',
    scientificName: 'Coriandrum sativum',
    description: 'Tender fresh green coriander generously garnishing every hot uttapam, sev puri, and bowl of steaming idli sambhar.',
    iconName: 'fa-sun',
    benefits: ['Vitamin C Rich', 'Detoxifying Herb', 'Bright Culinary Finish']
  }
];

export interface PurohitDish {
  id: string;
  name: string;
  category: 'dosa' | 'rava-dosa' | 'uttapam' | 'idli-vada' | 'chaat' | 'beverages';
  categoryLabel: string;
  price: string;
  description: string;
  image: string;
  badge?: string;
}

export const PUROHIT_DISHES: PurohitDish[] = [
  // --- DOSAS ---
  {
    id: 'd1',
    name: 'Paper Mysore Plain Dosa',
    category: 'dosa',
    categoryLabel: 'Dosa Specialities',
    price: '₹140',
    description: 'Classic extra-thin, crispy South Indian delicacy smeared with fiery Mysore red chutney, served golden with coconut chutney and piping hot sambhar.',
    image: '/images/purohit/paneer-masala.webp',
    badge: 'Bestseller'
  },
  {
    id: 'd2',
    name: 'Onion Butter Masala Dosa',
    category: 'dosa',
    categoryLabel: 'Dosa Specialities',
    price: '₹170',
    description: 'Loaded with sautéed onions, dollops of pure Amul butter, and spiced potato masala rolled to golden perfection.',
    image: '/images/purohit/round-dosa.webp',
    badge: 'Chef Special'
  },
  {
    id: 'd3',
    name: 'Cheese Plain Dosa',
    category: 'dosa',
    categoryLabel: 'Dosa Specialities',
    price: '₹160',
    description: 'Mouthwatering crisp dosa generously smothered with melted cheese inside and out, favored by kids and cheese lovers alike.',
    image: '/images/purohit/cheese-dosa.webp'
  },
  {
    id: 'd4',
    name: 'Pudina Masala Dosa',
    category: 'dosa',
    categoryLabel: 'Dosa Specialities',
    price: '₹160',
    description: 'Fresh botanical garden mint paste spread over crisp crepe, stuffed with seasoned potato masala and served hot.',
    image: '/images/purohit/pudina-dosa.webp'
  },
  {
    id: 'd5',
    name: 'Butter Paper Mysore Masala Dosa',
    category: 'dosa',
    categoryLabel: 'Dosa Specialities',
    price: '₹190',
    description: 'Extra-long paper-thin crispy dosa infused with Mysore spices, butter, and hearty spiced potatoes.',
    image: '/images/purohit/masala-dosa.webp',
    badge: 'Popular'
  },
  {
    id: 'd6',
    name: 'Butter Plain Dosa',
    category: 'dosa',
    categoryLabel: 'Dosa Specialities',
    price: '₹130',
    description: 'Simple, pure, and golden-crisp dosa brushed with rich butter, paired with coconut chutney and tomato relish.',
    image: '/images/purohit/butter-dosa.webp'
  },
  {
    id: 'd7',
    name: 'Cheese Butter Masala Dosa',
    category: 'dosa',
    categoryLabel: 'Dosa Specialities',
    price: '₹195',
    description: 'Indulgent fusion of velvety Amul butter, shredded cheddar cheese, and signature spiced potato filling.',
    image: '/images/purohit/cheese-dosa.webp'
  },
  {
    id: 'd8',
    name: 'Butter Paper Paneer Masala Dosa',
    category: 'dosa',
    categoryLabel: 'Dosa Specialities',
    price: '₹210',
    description: 'Stuffed with freshly crumbled cottage cheese cooked with mild South Indian spices and ghee.',
    image: '/images/purohit/paneer-masala.webp',
    badge: 'House Favorite'
  },

  // --- RAVA DOSAS ---
  {
    id: 'r1',
    name: 'Butter Rava Onion Mysore Masala Dosa',
    category: 'rava-dosa',
    categoryLabel: 'Rava Dosa Specialities',
    price: '₹185',
    description: 'Lacy, netted semolina crepe studded with crushed black pepper, chopped onions, and Mysore garlic-chilli chutney.',
    image: '/images/purohit/rava-dosa.webp',
    badge: 'Bestseller'
  },
  {
    id: 'r2',
    name: 'Butter Rava Paneer Dosa',
    category: 'rava-dosa',
    categoryLabel: 'Rava Dosa Specialities',
    price: '₹200',
    description: 'Crispy golden rava dosa filled with succulent spiced paneer, roasted cashews, and aromatic curry leaves.',
    image: '/images/purohit/rava-dosa.webp'
  },
  {
    id: 'r3',
    name: 'Spring Mix Veg Cheese Masala Dosa',
    category: 'rava-dosa',
    categoryLabel: 'Rava Dosa Specialities',
    price: '₹210',
    description: 'Loaded with finely shredded cabbage, capsicum, carrots, melted cheese, and savoury South Indian herbs.',
    image: '/images/purohit/round-dosa.webp'
  },
  {
    id: 'r4',
    name: 'Rava Pudina Masala Dosa',
    category: 'rava-dosa',
    categoryLabel: 'Rava Dosa Specialities',
    price: '₹175',
    description: 'Crispy lattice crepe laced with fresh green mint chutney and tender spiced potatoes.',
    image: '/images/purohit/pudina-dosa.webp'
  },

  // --- UTTAPAMS ---
  {
    id: 'u1',
    name: 'Onion Tomato Uttapam',
    category: 'uttapam',
    categoryLabel: 'Uttapam Specialities',
    price: '₹150',
    description: 'Thick, fluffy fermented pancake topped with juicy tomatoes, crisp onions, green chillies, and fresh coriander.',
    image: '/images/purohit/uttapam.webp',
    badge: 'Comfort Food'
  },
  {
    id: 'u2',
    name: 'Mix Veg Uttapam',
    category: 'uttapam',
    categoryLabel: 'Uttapam Specialities',
    price: '₹165',
    description: 'wholesome pancake packed with diced farm vegetables, pan-seared with golden edges and soft center.',
    image: '/images/purohit/uttapam.webp'
  },
  {
    id: 'u3',
    name: 'Cheese Uttapam',
    category: 'uttapam',
    categoryLabel: 'Uttapam Specialities',
    price: '₹180',
    description: 'Fluffy uttapam smothered with melted cheese and mild green herbs, served with coconut chutney.',
    image: '/images/purohit/uttapam.webp'
  },

  // --- IDLI & VADA ---
  {
    id: 'i1',
    name: 'Idli Vada Combo',
    category: 'idli-vada',
    categoryLabel: 'Idli & Vada',
    price: '₹120',
    description: 'Two fluffy steamed rice cakes alongside two crispy, golden medu vadas dipped in piping hot lentil sambhar.',
    image: '/images/purohit/idlivada.webp',
    badge: 'Breakfast Staple'
  },
  {
    id: 'i2',
    name: 'Dahivada',
    category: 'idli-vada',
    categoryLabel: 'Idli & Vada',
    price: '₹130',
    description: 'Soft lentil dumplings soaked in chilled whipped yogurt, crowned with roasted cumin, rock salt, and sweet tamarind chutney.',
    image: '/images/purohit/idlivada.webp'
  },
  {
    id: 'i3',
    name: 'Ghee Podi Idli',
    category: 'idli-vada',
    categoryLabel: 'Idli & Vada',
    price: '₹140',
    description: 'Bite-sized steamed idlis generously tossed in fragrant gunpowder (milagai podi) and clarified desi ghee.',
    image: '/images/purohit/idlivada.webp',
    badge: 'Authentic'
  },

  // --- CHAAT ---
  {
    id: 'c1',
    name: 'Papdi Chaat',
    category: 'chaat',
    categoryLabel: 'Chaat Specialities',
    price: '₹90',
    description: 'Crisp whole-wheat papdis layered with boiled potatoes, chickpeas, whipped yoghurt, tangy saunth, and sev.',
    image: '/images/purohit/papdi-chaat.webp',
    badge: 'Popular'
  },
  {
    id: 'c2',
    name: 'Dahipuri',
    category: 'chaat',
    categoryLabel: 'Chaat Specialities',
    price: '₹90',
    description: 'Crispy puffed puris stuffed with potatoes and sprouts, filled to the brim with sweet curd and spiced chutneys.',
    image: '/images/purohit/panipuri.webp'
  },
  {
    id: 'c3',
    name: 'Panipuri (Puchka)',
    category: 'chaat',
    categoryLabel: 'Chaat Specialities',
    price: '₹60',
    description: 'Crisp puris served with zesty mint-coriander water, sweet tamarind chutney, and spiced potato filling.',
    image: '/images/purohit/panipuri.webp'
  },
  {
    id: 'c4',
    name: 'Sevpuri & Bhelpuri',
    category: 'chaat',
    categoryLabel: 'Chaat Specialities',
    price: '₹80',
    description: 'Puffed rice, crispy sev, onions, tomatoes, and raw mango tossed with tangy tamarind and spicy green chutney.',
    image: '/images/purohit/papdi-chaat.webp'
  },

  // --- BEVERAGES ---
  {
    id: 'b1',
    name: 'Authentic South Indian Filter Coffee',
    category: 'beverages',
    categoryLabel: 'Beverages',
    price: '₹60',
    description: 'Traditional slow-filtered South Indian coffee frothed with boiling whole milk, served piping hot in a brass davarah.',
    image: '/images/resource/drinks/1.jpg',
    badge: 'Signature'
  },
  {
    id: 'b2',
    name: 'Spiced Masala Buttermilk (Chaas)',
    category: 'beverages',
    categoryLabel: 'Beverages',
    price: '₹50',
    description: 'Chilled churned curd seasoned with roasted cumin, fresh ginger, green chillies, rock salt, and fresh coriander leaves.',
    image: '/images/resource/drinks/2.jpg'
  },
  {
    id: 'b3',
    name: 'Chilled Soft Drinks & Maaza',
    category: 'beverages',
    categoryLabel: 'Beverages',
    price: '₹50',
    description: 'Refreshing cold soft drinks including Thums Up, Sprite, Limca, Fanta, and chilled mango Maaza.',
    image: '/images/resource/drinks/3.jpg'
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 1,
    src: '/images/purohit/dosaplate.webp',
    title: 'Signature Paper Mysore Dosa Plate',
    category: 'food'
  },
  {
    id: 2,
    src: '/images/purohit/rava-dosa.webp',
    title: 'Lacy Golden Rava Onion Dosa',
    category: 'food'
  },
  {
    id: 3,
    src: '/images/purohit/uttapam.webp',
    title: 'Freshly Baked Onion Tomato Uttapam',
    category: 'food'
  },
  {
    id: 4,
    src: '/images/purohit/idlivada.webp',
    title: 'Steaming Idli & Crisp Medu Vada Combo',
    category: 'food'
  },
  {
    id: 5,
    src: '/images/purohit/papdi-chaat.webp',
    title: 'Delightful Street Style Papdi Chaat',
    category: 'food'
  },
  {
    id: 6,
    src: '/images/purohit/panipuri.webp',
    title: 'Crispy Tangy Panipuri Shots',
    category: 'food'
  },
  {
    id: 7,
    src: '/images/purohit/cheese-dosa.webp',
    title: 'Loaded Cheese Butter Masala Dosa',
    category: 'food'
  },
  {
    id: 8,
    src: '/images/purohit/pudina-dosa.webp',
    title: 'Herbaceous Botanical Pudina Dosa',
    category: 'food'
  },
  {
    id: 9,
    src: '/images/purohit/paneer-masala.webp',
    title: 'Butter Paper Paneer Masala Dosa',
    category: 'food'
  },
  {
    id: 10,
    src: '/images/resource/gallery-1.jpg',
    title: 'Purohit Cafe Dining Garden Ambience',
    category: 'ambience'
  },
  {
    id: 11,
    src: '/images/resource/gallery-2.jpg',
    title: 'Family Dining Tables at Anand Plaza',
    category: 'ambience'
  },
  {
    id: 12,
    src: '/images/resource/gallery-3.jpg',
    title: 'Botanical Plant Sanctuary & Seating',
    category: 'greenery'
  },
  {
    id: 13,
    src: '/images/resource/gallery-4.jpg',
    title: 'Lush Green Outdoor Patio',
    category: 'greenery'
  },
  {
    id: 14,
    src: '/images/resource/gallery-5.jpg',
    title: 'Evening Café Lighting & Vibe',
    category: 'ambience'
  },
  {
    id: 15,
    src: '/images/resource/gallery-6.jpg',
    title: 'Authentic South Indian Filter Coffee',
    category: 'food'
  },
  {
    id: 16,
    src: '/images/resource/gallery-7.jpg',
    title: 'Master Chef Preparing Fresh Dosas',
    category: 'ambience'
  },
  {
    id: 17,
    src: '/images/resource/gallery-8.jpg',
    title: 'Freshly Ground Spices & Chutneys',
    category: 'greenery'
  },
  {
    id: 18,
    src: '/images/resource/gallery-9.jpg',
    title: 'Warm Welcoming Cafe Courtyard',
    category: 'ambience'
  },
  {
    id: 19,
    src: '/images/resource/gallery-10.jpg',
    title: 'Specialty Dosa Preparation On Iron Tawa',
    category: 'food'
  },
  {
    id: 20,
    src: '/images/resource/gallery-11.jpg',
    title: 'Refreshing Chilled Chaas & Cold Beverages',
    category: 'food'
  }
];

export const HOME_GALLERY_SNIPPETS = [
  '/images/purohit/dosaplate.webp',
  '/images/purohit/rava-dosa.webp',
  '/images/purohit/uttapam.webp',
  '/images/purohit/idlivada.webp',
  '/images/purohit/papdi-chaat.webp'
];

export const MENU_CARDS: MenuCard[] = PUROHIT_DISHES.map((dish) => ({
  id: dish.id,
  title: `${dish.name} (${dish.price})`,
  category: dish.category === 'beverages' ? 'drinks' : 'cafe',
  src: dish.image
}));
