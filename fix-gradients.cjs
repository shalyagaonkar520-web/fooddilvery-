const fs = require('fs');
let cartBar = fs.readFileSync('src/components/BottomCartBar.tsx', 'utf8');
cartBar = cartBar.replace(/#f97316/g, '#C89B3C').replace(/#fbbf24/g, '#E6D2AD');
fs.writeFileSync('src/components/BottomCartBar.tsx', cartBar);

let homePage = fs.readFileSync('src/components/HomePage.tsx', 'utf8');
homePage = homePage.replace(/#f97316/g, '#C89B3C');
fs.writeFileSync('src/components/HomePage.tsx', homePage);
