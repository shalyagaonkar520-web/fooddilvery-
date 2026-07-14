const fs = require('fs');

let cartBar = fs.readFileSync('src/components/BottomCartBar.tsx', 'utf8');

// 1. Fix text-white on total
cartBar = cartBar.replace(
  '<span className="text-white text-xl md:text-3xl font-black italic tracking-tighter">₹{total}</span>',
  '<span className="text-gray-900 text-xl md:text-3xl font-black tracking-tighter">₹{total}</span>'
);

// 2. Add recent items summary card/preview inside the bar
const recentItemsHtml = `
                <div className="flex items-baseline gap-1 md:gap-2">
                  <span className="text-gray-900 text-xl md:text-3xl font-black tracking-tighter">₹{total}</span>
                </div>
                <div className="text-[10px] text-gray-500 font-medium truncate max-w-[120px] md:max-w-[200px]">
                  {items.map(i => \`\${i.quantity}x \${i.name}\`).join(', ')}
                </div>
`;

cartBar = cartBar.replace(
  '<div className="flex items-baseline gap-1 md:gap-2">\n                  <span className="text-gray-900 text-xl md:text-3xl font-black tracking-tighter">₹{total}</span>\n                </div>',
  recentItemsHtml
);

// We should also add a top bar snake type design for "Order Now Fresh etc". We already added a Marquee in HomePage.tsx. 
// "add top bar snake type design order now fresh etc" - maybe they want it fixed at the top of the screen? Or on the button?
// Actually they probably just mean the marquee at the top! We already have it, but maybe they want it fixed at the top. Let's check HomePage.tsx.

fs.writeFileSync('src/components/BottomCartBar.tsx', cartBar, 'utf8');
