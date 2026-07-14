const fs = require('fs');
let code = fs.readFileSync('src/components/HomePage.tsx', 'utf8');

code = code.replace(
  /"https:\/\/images.unsplash.com\/photo-1626645738196-c2a7c87a8f58\?auto=format&fit=crop&w=200&q=80"/g,
  '"https://images.unsplash.com/photo-1588168333986-5078d3ae3976?auto=format&fit=crop&w=200&q=80"'
);

fs.writeFileSync('src/components/HomePage.tsx', code, 'utf8');
