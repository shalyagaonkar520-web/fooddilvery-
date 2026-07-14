const fs = require('fs');

let sys = fs.readFileSync('src/store/systemStore.ts', 'utf8');
sys = sys.replace("minOrderValue: 0,", "minOrderValue: 0,\n    coupons: [],");
fs.writeFileSync('src/store/systemStore.ts', sys);

let dash = fs.readFileSync('src/components/DeliveryDashboard.tsx', 'utf8');
dash = dash.replace(/order\.status/g, "(order as any).status");
fs.writeFileSync('src/components/DeliveryDashboard.tsx', dash);
