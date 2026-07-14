const fs = require('fs');
let code = fs.readFileSync('src/components/HomePage.tsx', 'utf8');

code = code.replace(
  /className="w-10 h-10 bg-slate-800 text-white rounded-full flex items-center justify-center border border-slate-700 cursor-pointer overflow-hidden"/g, 
  'className="w-10 h-10 bg-white/10 text-white rounded-full flex items-center justify-center border border-white/20 cursor-pointer overflow-hidden"'
);

// also inside the hero banner there's a border border-slate-700/50
code = code.replace(
  /border border-slate-700\/50/g,
  'border border-fuchsia-900/50'
);

fs.writeFileSync('src/components/HomePage.tsx', code, 'utf8');
