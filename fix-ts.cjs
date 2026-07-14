const fs = require('fs');

let menu = fs.readFileSync('src/store/menuStore.ts', 'utf8');
menu = menu.replace("addMenuItem: (item: Omit<MenuItem, 'id'>) => void;\n  addMenuItem: (item: Omit<MenuItem, 'id'>) => void;", "addMenuItem: (item: Omit<MenuItem, 'id'>) => void;");
menu = menu.replace(/addMenuItem: \(item: Omit<MenuItem, 'id'>\) => void;\s+addMenuItem: \(item: Omit<MenuItem, 'id'>\) => void;/g, "addMenuItem: (item: Omit<MenuItem, 'id'>) => void;");
fs.writeFileSync('src/store/menuStore.ts', menu);

let sys = fs.readFileSync('src/store/systemStore.ts', 'utf8');
sys = sys.replace(/minOrderValue: 0,/g, "minOrderValue: 0,\n    coupons: [],");
fs.writeFileSync('src/store/systemStore.ts', sys);

let dash = fs.readFileSync('src/components/DeliveryDashboard.tsx', 'utf8');
dash = dash.replace(/order\.status/g, "(order as any).status");
fs.writeFileSync('src/components/DeliveryDashboard.tsx', dash);
