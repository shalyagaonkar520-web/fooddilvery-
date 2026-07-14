const fs = require('fs');

let cartBar = fs.readFileSync('src/components/BottomCartBar.tsx', 'utf8');

cartBar = cartBar.replace(
  '<div className="flex items-center gap-3 md:gap-6">',
  '<div className="flex items-center gap-2 md:gap-6 min-w-0 flex-1">'
);

cartBar = cartBar.replace(
  '<div className="flex flex-col">',
  '<div className="flex flex-col min-w-0">'
);

cartBar = cartBar.replace(
  '<span className="text-gray-500 text-[8px] md:text-[10px] font-black uppercase tracking-[2px] whitespace-nowrap">',
  '<span className="text-gray-500 text-[8px] md:text-[10px] font-black uppercase tracking-[2px] truncate">'
);

cartBar = cartBar.replace(
  '<div className="text-[10px] text-gray-500 font-medium truncate max-w-[120px] md:max-w-[200px]">',
  '<div className="text-[9px] md:text-[10px] text-gray-500 font-medium truncate w-full">'
);

cartBar = cartBar.replace(
  'className="h-12 md:h-18 px-5 md:px-10 rounded-xl md:rounded-2xl text-[10px] md:text-xs font-black uppercase tracking-[2px] text-gray-900 flex items-center gap-2 md:gap-3 relative overflow-hidden group/btn shadow-[0_0_20px_rgba(200,155,60,0.5)] shrink-0"',
  'className="h-11 md:h-16 px-4 md:px-8 ml-2 rounded-xl md:rounded-2xl text-[9px] md:text-xs font-black uppercase tracking-[2px] text-gray-900 flex items-center justify-center gap-1.5 md:gap-3 relative overflow-hidden group/btn shadow-[0_0_20px_rgba(200,155,60,0.5)] shrink-0"'
);

cartBar = cartBar.replace(
  'className="w-12 h-12 md:w-18 md:h-18 rounded-[20px] md:rounded-[28px] bg-[#C89B3C] flex items-center justify-center relative shadow-xl shadow-brand/10 border border-gray-200 shrink-0"',
  'className="w-10 h-10 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-[#C89B3C] flex items-center justify-center relative shadow-xl shadow-brand/10 border border-gray-200 shrink-0"'
);

fs.writeFileSync('src/components/BottomCartBar.tsx', cartBar, 'utf8');
