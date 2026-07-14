const fs = require('fs');
let code = fs.readFileSync('src/components/HomePage.tsx', 'utf8');

code = code.replace(
  "if (activeFilters.includes('Offers')) items = items.filter(i => i.price < 200); // mock offers",
  "if (activeFilters.includes('Offers')) items = items.filter(i => i.price < 99); // mock offers"
);

code = code.replace(
  '{item.price < 200 && <span className="ml-2 text-[10px] text-gray-400 line-through">₹{item.price + 50}</span>}',
  '{item.price < 99 && <span className="ml-2 text-[10px] text-gray-400 line-through">₹{item.price + 50}</span>}'
);

fs.writeFileSync('src/components/HomePage.tsx', code, 'utf8');
