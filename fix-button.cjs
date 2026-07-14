const fs = require('fs');
let cartBar = fs.readFileSync('src/components/BottomCartBar.tsx', 'utf8');

cartBar = cartBar.replace(
  'className="h-11 md:h-16 px-4 md:px-8 ml-2 rounded-xl md:rounded-2xl text-[9px] md:text-xs font-black uppercase tracking-[2px] text-gray-900 flex items-center justify-center gap-1.5 md:gap-3 relative overflow-hidden group/btn shadow-[0_0_20px_rgba(200,155,60,0.5)] shrink-0"',
  'className="h-10 md:h-14 px-3 md:px-6 ml-2 md:ml-4 rounded-lg md:rounded-xl text-[10px] md:text-xs font-black uppercase tracking-[1px] md:tracking-[2px] text-gray-900 flex items-center justify-center gap-1 md:gap-2 relative overflow-hidden group/btn shadow-[0_0_15px_rgba(200,155,60,0.3)] shrink-0 whitespace-nowrap"'
);

fs.writeFileSync('src/components/BottomCartBar.tsx', cartBar, 'utf8');
