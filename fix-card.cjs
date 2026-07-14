const fs = require('fs');
let code = fs.readFileSync('src/components/HomePage.tsx', 'utf8');

code = code.replace(
  /className="bg-\[\#750016\] px-4 pt-6 pb-4 relative z-30 rounded-b-3xl shadow-lg"/,
  'className="bg-[#9e334a] px-4 pt-6 pb-4 relative z-30 rounded-b-3xl shadow-lg border-b border-white/10"'
);

code = code.replace(
  /className="flex items-center gap-3 max-w-\[75%\] cursor-pointer"/,
  'className="flex items-center gap-3 max-w-[75%] cursor-pointer border border-white/30 bg-white/10 px-3 py-2 rounded-2xl shadow-[0_0_15px_rgba(255,255,255,0.2)]"'
);

code = code.replace(
  /className="relative bg-white border-2 border-orange-400 rounded-2xl shadow-\[0_0_15px_rgba\(249,115,22,0\.3\)\] flex items-center px-4 py-3\.5 z-10 overflow-hidden"/,
  'className="relative bg-gradient-to-r from-white via-white to-gray-50 border-2 border-white rounded-2xl shadow-[0_0_30px_rgba(255,255,255,1)] flex items-center px-4 py-3.5 z-10 overflow-hidden"'
);

fs.writeFileSync('src/components/HomePage.tsx', code, 'utf8');
