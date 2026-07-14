const fs = require('fs');
let code = fs.readFileSync('src/components/HomePage.tsx', 'utf8');

code = code.replace(
  /className="sticky top-0 z-50 bg-white\/95 backdrop-blur-md px-4 py-3 shadow-\[0_4px_20px_rgba\(0,0,0,0\.03\)\] transition-all"/,
  'className="sticky top-0 z-50 bg-[#3b0024]/80 backdrop-blur-md px-4 py-3 shadow-[0_4px_20px_rgba(0,0,0,0.3)] transition-all"'
);

code = code.replace(
  /className="relative bg-white border border-gray-200 rounded-2xl shadow-sm flex items-center px-4 py-3\.5 z-10 overflow-hidden"/,
  'className="relative bg-white/10 border-2 border-orange-400 rounded-2xl shadow-[0_0_15px_rgba(249,115,22,0.3)] flex items-center px-4 py-3.5 z-10 overflow-hidden"'
);

// We should also replace the fuchsia classes if they were added.
code = code.replace(/bg-fuchsia-950/g, 'bg-transparent'); // since App.tsx will have the background

fs.writeFileSync('src/components/HomePage.tsx', code, 'utf8');

let appCode = fs.readFileSync('src/App.tsx', 'utf8');
appCode = appCode.replace(/bg-fuchsia-950/g, 'bg-gradient-to-br from-[#4a0404] via-[#750016] to-[#3b0024]');
appCode = appCode.replace(/selection:bg-fuchsia-500\/30/g, 'selection:bg-orange-500/30');
fs.writeFileSync('src/App.tsx', appCode, 'utf8');

let cssCode = fs.readFileSync('src/index.css', 'utf8');
cssCode = cssCode.replace(/bg-fuchsia-950/g, 'bg-[#4a0404]');
cssCode = cssCode.replace(/selection:bg-fuchsia-500\/20/g, 'selection:bg-orange-500/20');
fs.writeFileSync('src/index.css', cssCode, 'utf8');
