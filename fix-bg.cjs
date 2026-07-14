const fs = require('fs');
let code = fs.readFileSync('src/App.tsx', 'utf8');

code = code.replace(
  /className="min-h-screen bg-\[\#fae6d8\] text-gray-900 font-sans relative flex flex-col selection:bg-orange-500\/30"/,
  'className="min-h-screen bg-gradient-to-b from-white to-[#d1f2e5] text-gray-900 font-sans relative flex flex-col selection:bg-green-500/30"'
);

fs.writeFileSync('src/App.tsx', code, 'utf8');
