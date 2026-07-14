const fs = require('fs');
let code = fs.readFileSync('src/components/HomePage.tsx', 'utf8');

code = code.replace(
  /className="bg-\[\#9e334a\] px-4 pt-6 pb-4 relative z-30 rounded-b-3xl shadow-lg border-b border-white\/10"/,
  'className="bg-transparent px-4 pt-6 pb-4 relative z-30"'
);

code = code.replace(
  /className="flex items-center gap-3 max-w-\[75%\] cursor-pointer border border-white\/30 bg-white\/10 px-3 py-2 rounded-2xl shadow-\[0_0_15px_rgba\(255,255,255,0\.2\)\]"/,
  'className="flex items-center gap-3 max-w-[75%] cursor-pointer border border-white bg-white/60 px-3 py-2 rounded-2xl shadow-sm"'
);

code = code.replace(
  /className="text-\[13px\] font-black text-white flex items-center gap-1"/,
  'className="text-[13px] font-black text-gray-900 flex items-center gap-1"'
);

code = code.replace(
  /className="text-xs font-medium text-gray-300 truncate mt-0\.5"/,
  'className="text-xs font-medium text-gray-500 truncate mt-0.5"'
);

code = code.replace(
  /className="w-10 h-10 bg-white text-gray-900 rounded-full flex items-center justify-center border border-white\/20 cursor-pointer overflow-hidden"/,
  'className="w-10 h-10 bg-white text-gray-900 rounded-full flex items-center justify-center border border-gray-200 cursor-pointer shadow-sm overflow-hidden"'
);

fs.writeFileSync('src/components/HomePage.tsx', code, 'utf8');
