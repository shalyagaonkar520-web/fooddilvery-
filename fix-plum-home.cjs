const fs = require('fs');
let code = fs.readFileSync('src/components/HomePage.tsx', 'utf8');

// replace bg-gray-50 with bg-transparent so the app background shows
code = code.replace(/className="min-h-screen bg-gray-50 pb-\[180px\] relative"/, 'className="min-h-screen bg-transparent pb-[180px] relative"');

// also any text-gray-900 might need to be white
code = code.replace(/text-gray-900/g, 'text-white');

fs.writeFileSync('src/components/HomePage.tsx', code, 'utf8');
