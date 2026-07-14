const fs = require('fs');
const path = './src/components/AdminPage.tsx';
let content = fs.readFileSync(path, 'utf8');

const targetStr = `<div className="space-y-4 max-h-[600px] overflow-y-auto pr-2 no-scrollbar">
                  null}`;

content = content.replace(targetStr, `</div>`);

fs.writeFileSync(path, content, 'utf8');
console.log('Fixed broken block syntax');
