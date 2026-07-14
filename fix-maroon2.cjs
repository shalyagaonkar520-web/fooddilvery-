const fs = require('fs');
let code = fs.readFileSync('src/components/HomePage.tsx', 'utf8');

code = code.replace(
  /className="bg-transparent px-4 pt-6 pb-4 relative z-30 rounded-b-3xl shadow-lg"/,
  'className="bg-[#750016] px-4 pt-6 pb-4 relative z-30 rounded-b-3xl shadow-lg"'
);

code = code.replace(
  /className="bg-transparent px-4 pb-6 pt-2 relative z-20 -mt-4 pt-8 rounded-b-\[30px\] shadow-xl transition-all duration-500"/,
  'className="bg-[#4a0404] px-4 pb-6 pt-2 relative z-20 -mt-4 pt-8 rounded-b-[30px] shadow-xl transition-all duration-500"'
);

// We should fix text colors in the top section
// text-[13px] font-black text-gray-900 flex items-center gap-1 -> text-white
code = code.replace(
  /text-\[13px\] font-black text-gray-900 flex items-center gap-1/,
  'text-[13px] font-black text-white flex items-center gap-1'
);

// Also border-fuchsia-900/50 to border-orange-500/30
code = code.replace(/border-fuchsia-900\/50/g, 'border-orange-500/30');

fs.writeFileSync('src/components/HomePage.tsx', code, 'utf8');
