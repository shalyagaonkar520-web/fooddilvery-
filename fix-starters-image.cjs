const fs = require('fs');
let code = fs.readFileSync('src/components/HomePage.tsx', 'utf8');

code = code.replace(
  /\{ name: "Starters", id: "Starters", image: "https:\/\/images.unsplash.com\/photo-1544025162-8111f42d59ac\?auto=format&fit=crop&w=150&q=80" \}/,
  '{ name: "Starters", id: "Starters", image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=150&q=80" }'
);

fs.writeFileSync('src/components/HomePage.tsx', code, 'utf8');
