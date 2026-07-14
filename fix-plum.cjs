const fs = require('fs');
let code = fs.readFileSync('src/components/HomePage.tsx', 'utf8');

code = code.replace(
  /className="bg-slate-900 px-4 pt-6 pb-4 relative z-30 rounded-b-3xl shadow-lg"/, 
  'className="bg-fuchsia-950 px-4 pt-6 pb-4 relative z-30 rounded-b-3xl shadow-lg"'
);

code = code.replace(
  /className="bg-slate-900 px-4 pb-6 pt-2 relative z-20 -mt-4 pt-8 rounded-b-\[30px\] shadow-xl transition-all duration-500"/, 
  'className="bg-fuchsia-950 px-4 pb-6 pt-2 relative z-20 -mt-4 pt-8 rounded-b-[30px] shadow-xl transition-all duration-500"'
);

fs.writeFileSync('src/components/HomePage.tsx', code, 'utf8');
