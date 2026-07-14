const fs = require('fs');
let code = fs.readFileSync('src/components/HomePage.tsx', 'utf8');

code = code.replace(
  /className="bg-\[\#4a0404\] px-4 pb-6 pt-2 relative z-20 -mt-4 pt-8 rounded-b-\[30px\] shadow-xl transition-all duration-500"/,
  'className="bg-transparent px-4 pb-6 pt-2 relative z-20 -mt-4 transition-all duration-500"'
);

code = code.replace(
  /className="relative w-full h-\[35vh\] min-h-\[300px\] rounded-\[32px\] overflow-hidden group shadow-2xl mt-2 border border-orange-500\/30"/,
  'className="relative w-full h-[35vh] min-h-[300px] rounded-none overflow-hidden group shadow-2xl border-y border-orange-500/30"'
);

fs.writeFileSync('src/components/HomePage.tsx', code, 'utf8');
