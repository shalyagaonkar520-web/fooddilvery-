const fs = require('fs');
let code = fs.readFileSync('src/components/BottomNav.tsx', 'utf8');
code = code.replace(/\\\$/g, '$').replace(/\\`/g, '`');
fs.writeFileSync('src/components/BottomNav.tsx', code, 'utf8');
