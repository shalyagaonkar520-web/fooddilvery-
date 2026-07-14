const fs = require('fs');
let code = fs.readFileSync('src/components/HomePage.tsx', 'utf8');

code = code.replace(/x: activeFilters\.includes\('Non Veg'\) \? 174 : 0,/g, 'x: activeFilters.includes(\'Non Veg\') ? 190 : 0,');
code = code.replace(/dragConstraints=\{\{ left: 0, right: 0 \}\}/, "dragConstraints={activeFilters.includes('Non Veg') ? { left: -190, right: 0 } : { left: 0, right: 190 }}");

fs.writeFileSync('src/components/HomePage.tsx', code, 'utf8');
