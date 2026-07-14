const fs = require('fs');
const path = './src/components/BottomCartBar.tsx';
let content = fs.readFileSync(path, 'utf8');

content = content.replace(/bg-brand/g, 'bg-orange-500');
content = content.replace(/#FC8019/g, '#f97316');
content = content.replace(/#E06C00/g, '#ea580c');
content = content.replace(/#0B0E14/g, '#ffffff');
content = content.replace(/text-gray-900/g, 'text-white');

// Wait, some places I replaced text-gray-900 with text-white, let's fix it for the button text
content = content.replace(/text-white flex items-center/g, 'text-white flex items-center');

fs.writeFileSync(path, content, 'utf8');
console.log('Fixed cart bar colors');
