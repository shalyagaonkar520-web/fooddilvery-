const fs = require('fs');
let code = fs.readFileSync('src/components/HomePage.tsx', 'utf8');

const newCategories = `const CATEGORIES = [
  { name: "Burger", id: "Burgers & Rolls", icon: "🍔" },
  { name: "Pizza", id: "Pizzas & Momos", icon: "🍕" },
  { name: "Chinese", id: "Rice & Noodles", icon: "🍜" },
  { name: "Rice", id: "Veg / Gravy", icon: "🍚" },
  { name: "Biryani", id: "Biryani", icon: "🥘" },
  { name: "Dessert", id: "Drinks", icon: "🍦" },
  { name: "All", id: "All Dishes", icon: "🍽️" },
  { name: "Starters", id: "Starters", icon: "🍗" },
];`;

const oldCategoriesRegex = /const CATEGORIES = \[\s*\{[^\}]+\},[\s\S]*?\];/;
code = code.replace(oldCategoriesRegex, newCategories);

fs.writeFileSync('src/components/HomePage.tsx', code, 'utf8');
