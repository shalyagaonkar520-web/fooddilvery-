const fs = require('fs');
let code = fs.readFileSync('src/components/HomePage.tsx', 'utf8');

code = code.replace(/className="relative w-full max-w-\[340px\]/g, 'className="relative w-full max-w-[320px]');
code = code.replace(/dragConstraints=\{\{ left: 0, right: 250 \}\}/g, 'dragConstraints={{ left: 0, right: 230 }}');
code = code.replace(/x: activeFilters.includes\('Non Veg'\) \? 250 : activeFilters.includes\('Veg Only'\) \? 0 : 125/g, 'x: activeFilters.includes(\'Non Veg\') ? 230 : activeFilters.includes(\'Veg Only\') ? 0 : 115');

fs.writeFileSync('src/components/HomePage.tsx', code, 'utf8');
