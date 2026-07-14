const fs = require('fs');
let code = fs.readFileSync('src/components/HomePage.tsx', 'utf8');

code = code.replace(
  /className="bg-transparent px-4 pt-6 pb-4 relative z-30"/,
  'className="bg-[#d1f2e5] px-4 pt-6 pb-8 relative z-30"'
);

code = code.replace(
  /className="bg-transparent pb-6 relative z-20 -mt-4 transition-all duration-500"/,
  'className="bg-[#d1f2e5] pb-6 relative z-20 -mt-8 pt-4 transition-all duration-500 rounded-b-[30px] shadow-sm"'
);

fs.writeFileSync('src/components/HomePage.tsx', code, 'utf8');
