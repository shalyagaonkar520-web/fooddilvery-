const fs = require('fs');
let code = fs.readFileSync('src/components/HomePage.tsx', 'utf8');

code = code.replace(
  /className="bg-transparent px-4 pb-6 pt-2 relative z-20 -mt-4 transition-all duration-500"/,
  'className="bg-transparent pb-6 relative z-20 -mt-4 transition-all duration-500"'
);

fs.writeFileSync('src/components/HomePage.tsx', code, 'utf8');
