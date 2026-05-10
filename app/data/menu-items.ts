export interface MenuItem {
  category: string;
  name: string;
  description: string;
  price: number;
  badge?: string;
  image: string;
}

export const menuItems: MenuItem[] = [
  // Hot Drinks
  {
    category: "Hot Drinks",
    name: "Classic Latte",
    description: "Espresso with steamed milk and a thin layer of microfoam.",
    price: 4.5,
    image: "/images/menu/classic-latte.webp",
  },
  {
    category: "Hot Drinks",
    name: "Cappuccino",
    description: "Double espresso topped with equal parts steamed milk and velvety foam.",
    price: 4.5,
    image: "/images/menu/cappuccino.webp",
  },
  {
    category: "Hot Drinks",
    name: "Flat White",
    description: "Double ristretto poured over silky steamed milk with a delicate rosetta.",
    price: 5.0,
    badge: "House Favorite",
    image: "/images/menu/flat-white.webp",
  },
  {
    category: "Hot Drinks",
    name: "Pour-Over",
    description: "House-roasted single-origin beans hand-poured to order.",
    price: 5.5,
    image: "/images/menu/pour-over.webp",
  },
  {
    category: "Hot Drinks",
    name: "Mocha",
    description: "Espresso and house chocolate sauce finished with steamed milk and whipped cream.",
    price: 5.25,
    badge: "Popular",
    image: "/images/menu/mocha.webp",
  },
  {
    category: "Hot Drinks",
    name: "Americano",
    description: "Double espresso lengthened with hot water for a clean bold finish.",
    price: 3.75,
    image: "/images/menu/americano.webp",
  },

  // Cold Drinks
  {
    category: "Cold Drinks",
    name: "Cold Brew",
    description: "Steeped 20 hours for a smooth naturally sweet concentrate served over ice.",
    price: 5.0,
    badge: "Popular",
    image: "/images/menu/cold-brew.webp",
  },
  {
    category: "Cold Drinks",
    name: "Iced Latte",
    description: "Double espresso poured over chilled oat or whole milk and ice.",
    price: 4.75,
    image: "/images/menu/iced-latte.webp",
  },
  {
    category: "Cold Drinks",
    name: "Nitro Cold Brew",
    description: "Cold brew infused with nitrogen for a creamy cascading texture and velvety finish.",
    price: 6.0,
    badge: "House Favorite",
    image: "/images/menu/nitro-cold-brew.webp",
  },
  {
    category: "Cold Drinks",
    name: "Iced Chai Latte",
    description: "House-spiced chai concentrate shaken with chilled milk and poured over ice.",
    price: 5.25,
    image: "/images/menu/iced-chai-latte.webp",
  },
  {
    category: "Cold Drinks",
    name: "Matcha Lemonade",
    description: "Ceremonial-grade matcha whisked with house-squeezed lemonade and a hint of agave.",
    price: 5.5,
    image: "/images/menu/matcha-lemonade.webp",
  },

  // Pastries
  {
    category: "Pastries",
    name: "Butter Croissant",
    description: "Twenty-four-layer laminated pastry baked to a golden flaky finish.",
    price: 4.0,
    badge: "House Favorite",
    image: "/images/menu/butter-croissant.webp",
  },
  {
    category: "Pastries",
    name: "Blueberry Muffin",
    description: "Fresh wild blueberries folded into a tender batter with a buttery streusel crown.",
    price: 3.75,
    badge: "Popular",
    image: "/images/menu/blueberry-muffin.webp",
  },
  {
    category: "Pastries",
    name: "Cinnamon Roll",
    description: "Soft brioche spiraled with brown sugar and cinnamon topped with cream cheese icing.",
    price: 5.0,
    image: "/images/menu/cinnamon-roll.webp",
  },
  {
    category: "Pastries",
    name: "Chocolate Chip Cookie",
    description: "Toasted brown butter base with dark chocolate chunks and flaky sea salt.",
    price: 3.25,
    image: "/images/menu/chocolate-chip-cookie.webp",
  },
  {
    category: "Pastries",
    name: "Banana Bread",
    description: "House-baked with overripe bananas and finished with honey butter.",
    price: 4.5,
    image: "/images/menu/banana-bread.webp",
  },

  // Sandwiches
  {
    category: "Sandwiches",
    name: "Avocado Toast",
    description: "Smashed avocado on toasted sourdough with chili flake and blistered cherry tomatoes.",
    price: 8.5,
    badge: "Popular",
    image: "/images/menu/avocado-toast.webp",
  },
  {
    category: "Sandwiches",
    name: "Breakfast Baguette",
    description: "Fresh-baked baguette with scrambled egg, aged cheddar, applewood bacon, and truffle aioli.",
    price: 9.0,
    badge: "House Favorite",
    image: "/images/menu/breakfast-baguette.webp",
  },
  {
    category: "Sandwiches",
    name: "Turkey Havarti",
    description: "Roasted turkey breast, creamy havarti, and peppery arugula on toasted ciabatta.",
    price: 10.0,
    image: "/images/menu/turkey-havarti.webp",
  },
  {
    category: "Sandwiches",
    name: "Tomato Basil Soup",
    description: "House-made San Marzano tomato soup served with a grilled cheese crouton.",
    price: 7.0,
    image: "/images/menu/tomato-basil-soup.webp",
  },
];

export const categories = [
  "Hot Drinks",
  "Cold Drinks",
  "Pastries",
  "Sandwiches",
] as const;

export const popularItems = menuItems.filter((item) => item.badge === "Popular");
