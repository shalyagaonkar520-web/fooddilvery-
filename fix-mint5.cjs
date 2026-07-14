const fs = require('fs');
let code = fs.readFileSync('src/components/HomePage.tsx', 'utf8');

// Ensure Hero Banner is EXACT same mint green
code = code.replace(
  /bg-\[\#b5e8d5\]/g,
  'bg-[#d1f2e5]'
);

// Fix the gold button
code = code.replace(
  /className="mt-5 w-max px-8 py-3 rounded-2xl text-xs font-black uppercase tracking-\[2px\] text-gray-900 shadow-\[0_0_20px_rgba\(200,155,60,0\.4\)\] relative overflow-hidden group\/btn"              style={{ background: 'linear-gradient\\(135deg, #C89B3C, #E6D2AD\\)' }}/,
  'className="mt-5 w-max px-8 py-3 rounded-2xl text-xs font-black uppercase tracking-[2px] text-white bg-gray-900 shadow-md relative overflow-hidden group/btn"'
);

// Ensure the floating glass chips are also mint green or flat white
code = code.replace(
  /className="bg-white backdrop-blur-md border border-white\/20 text-gray-900 text-\[10px\] font-black uppercase tracking-widest px-3 py-1\.5 rounded-full shadow-lg flex items-center gap-1\.5"/g,
  'className="bg-white/80 border border-white text-gray-900 text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full shadow-sm flex items-center gap-1.5"'
);

code = code.replace(
  /className="bg-white backdrop-blur-md border border-white\/50 text-orange-500 text-\[10px\] font-black uppercase tracking-widest px-3 py-1\.5 rounded-full shadow-lg shadow-orange-500\/30 flex items-center gap-1\.5"/,
  'className="bg-white/80 border border-white text-orange-500 text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full shadow-sm flex items-center gap-1.5"'
);

fs.writeFileSync('src/components/HomePage.tsx', code, 'utf8');
