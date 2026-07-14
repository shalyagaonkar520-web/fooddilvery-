const fs = require('fs');
let sys = fs.readFileSync('src/store/systemStore.ts', 'utf8');
sys = sys.replace(/minOrderValue: 150/g, "minOrderValue: 150,\n  coupons: []");
fs.writeFileSync('src/store/systemStore.ts', sys);
