const fs = require('fs');
let code = fs.readFileSync('src/components/HomePage.tsx', 'utf8');

code = code.replace(
  /className="bg-orange-500 text-gray-900 overflow-hidden py-1"/,
  'className="bg-gradient-to-r from-white to-[#d1f2e5] text-green-900 overflow-hidden py-1"'
);

fs.writeFileSync('src/components/HomePage.tsx', code, 'utf8');
