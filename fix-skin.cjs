const fs = require('fs');

let appCode = fs.readFileSync('src/App.tsx', 'utf8');
appCode = appCode.replace(/bg-gradient-to-br from-\[\#4a0404\] via-\[\#750016\] to-\[\#3b0024\]/g, 'bg-[#fcf2eb]');
appCode = appCode.replace(/text-white/g, 'text-gray-900'); // the wrapper
fs.writeFileSync('src/App.tsx', appCode, 'utf8');

let cssCode = fs.readFileSync('src/index.css', 'utf8');
cssCode = cssCode.replace(/bg-\[\#4a0404\]/g, 'bg-[#fcf2eb]');
cssCode = cssCode.replace(/text-white/g, 'text-gray-900');
fs.writeFileSync('src/index.css', cssCode, 'utf8');

let homeCode = fs.readFileSync('src/components/HomePage.tsx', 'utf8');
homeCode = homeCode.replace(/bg-\[\#3b0024\]\/80/g, 'bg-[#fcf2eb]/90');
homeCode = homeCode.replace(/text-white/g, 'text-gray-900'); // wait, the previous instruction changed ALL text-gray-900 to text-white. We need to revert it back.
homeCode = homeCode.replace(/bg-white\/10/g, 'bg-white'); // revert search bar bg
fs.writeFileSync('src/components/HomePage.tsx', homeCode, 'utf8');

