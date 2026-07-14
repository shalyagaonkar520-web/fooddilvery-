const fs = require('fs');
let code = fs.readFileSync('src/components/HomePage.tsx', 'utf8');

// Fix Veg toggle
code = code.replace(
  "if(activeFilters.includes('Veg Only')) setActiveFilters(activeFilters.filter(f => f !== 'Veg Only'));\n                  else setActiveFilters([...activeFilters.filter(f => f !== 'Non Veg'), 'Veg Only']);",
  "if(activeFilters.includes('Veg Only')) setActiveFilters(activeFilters.filter(f => f !== 'Veg Only'));\n                  else setActiveFilters([...activeFilters, 'Veg Only']);"
);

// Fix Non Veg toggle
code = code.replace(
  "if(activeFilters.includes('Non Veg')) setActiveFilters(activeFilters.filter(f => f !== 'Non Veg'));\n                  else setActiveFilters([...activeFilters.filter(f => f !== 'Veg Only'), 'Non Veg']);",
  "if(activeFilters.includes('Non Veg')) setActiveFilters(activeFilters.filter(f => f !== 'Non Veg'));\n                  else setActiveFilters([...activeFilters, 'Non Veg']);"
);

// Also let's fix Offers to be item.price < 200 (or whatever the offer condition is). Wait, what if Offers is item.price < 200?
code = code.replace(
  "if (activeFilters.includes('Offers')) items = items.filter(i => (i as any).fires && (i as any).fires > 0); // mock offers for now",
  "if (activeFilters.includes('Offers')) items = items.filter(i => i.price < 200); // mock offers"
);

fs.writeFileSync('src/components/HomePage.tsx', code, 'utf8');
