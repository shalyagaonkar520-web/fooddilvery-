const fs = require('fs');

const path = './src/store/menuStore.ts';
let content = fs.readFileSync(path, 'utf8');

content = content.replace(/addMenuItem: \(item: Omit<MenuItem, 'id'>\) => void;\n  addMenuItem: \(item: Omit<MenuItem, 'id'>\) => void;/g, "addMenuItem: (item: Omit<MenuItem, 'id'>) => void;");

fs.writeFileSync(path, content, 'utf8');
console.log('Fixed menu store');
