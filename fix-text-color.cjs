const fs = require('fs');

let cartBar = fs.readFileSync('src/components/BottomCartBar.tsx', 'utf8');
cartBar = cartBar.replace(
  'className="h-12 md:h-18 px-5 md:px-10 rounded-xl md:rounded-2xl text-[10px] md:text-xs font-black uppercase tracking-[2px] text-white flex items-center gap-2 md:gap-3 relative overflow-hidden group/btn shadow-[0_0_20px_rgba(245,158,11,0.5)] shrink-0"',
  'className="h-12 md:h-18 px-5 md:px-10 rounded-xl md:rounded-2xl text-[10px] md:text-xs font-black uppercase tracking-[2px] text-gray-900 flex items-center gap-2 md:gap-3 relative overflow-hidden group/btn shadow-[0_0_20px_rgba(200,155,60,0.5)] shrink-0"'
);

// Also let's change the bg-orange-500 class in the bag icon to something that looks better, like bg-brand (if it exists) or just inline style for gold
cartBar = cartBar.replace(/bg-orange-500/g, 'bg-[#C89B3C]');

fs.writeFileSync('src/components/BottomCartBar.tsx', cartBar, 'utf8');
