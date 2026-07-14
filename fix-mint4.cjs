const fs = require('fs');
let code = fs.readFileSync('src/components/HomePage.tsx', 'utf8');

// Ensure Hero Banner is square
code = code.replace(
  /className="relative w-full h-\[35vh\] min-h-\[300px\] rounded-\[30px\] overflow-hidden group shadow-lg border border-white\/50 bg-\[\#b5e8d5\]"/,
  'className="relative w-full h-[35vh] min-h-[300px] rounded-none overflow-hidden group shadow-md border-y border-white/50 bg-[#b5e8d5]"'
);

code = code.replace(
  /className="bg-transparent pb-6 px-4 relative z-20 -mt-2 transition-all duration-500"/,
  'className="bg-transparent pb-6 relative z-20 -mt-2 transition-all duration-500"'
);

fs.writeFileSync('src/components/HomePage.tsx', code, 'utf8');
