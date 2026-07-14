const fs = require('fs');
let content = fs.readFileSync('src/store/menuStore.ts', 'utf8');
content = content.replace(/addMenuItem: \(item: Product\) => Promise<boolean>;\s+addMenuItem: \(item: Product\) => Promise<boolean>;/g, 'addMenuItem: (item: Product) => Promise<boolean>;');
fs.writeFileSync('src/store/menuStore.ts', content, 'utf8');
