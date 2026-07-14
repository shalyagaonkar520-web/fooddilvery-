const fs = require('fs');

let homePage = fs.readFileSync('src/components/HomePage.tsx', 'utf8');

homePage = homePage.replace(
  /if \(activeFilters\.includes\('Veg Only'\)\) items = items\.filter\(i => i\.isVeg\);\n\s*if \(activeFilters\.includes\('Non Veg'\)\) items = items\.filter\(i => !i\.isVeg\);/,
  `const showVeg = activeFilters.includes('Veg Only');
    const showNonVeg = activeFilters.includes('Non Veg');
    if (showVeg && !showNonVeg) items = items.filter(i => i.isVeg);
    if (showNonVeg && !showVeg) items = items.filter(i => !i.isVeg);`
);

homePage = homePage.replace(
  /if \(activeFilters\.includes\('Under ₹200'\)\) items = items\.filter\(i => i\.price < 200\);\n\s*if \(activeFilters\.includes\('Offers'\)\) items = items\.filter\(i => i\.price < 200\);/g,
  `if (activeFilters.includes('Under ₹99')) items = items.filter(i => i.price < 99);
    if (activeFilters.includes('Offers')) items = items.filter(i => (i as any).fires && (i as any).fires > 0);`
);

homePage = homePage.replace(
  /\['Veg Only', 'Non Veg', 'Bestsellers', 'Offers', 'Under ₹200'\]\.map/,
  `['Veg Only', 'Non Veg', 'Bestsellers', 'Offers', 'Under ₹99'].map`
);

fs.writeFileSync('src/components/HomePage.tsx', homePage, 'utf8');
