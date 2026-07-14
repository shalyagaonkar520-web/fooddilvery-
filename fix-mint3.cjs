const fs = require('fs');
let code = fs.readFileSync('src/components/HomePage.tsx', 'utf8');

// Search Bar background
code = code.replace(
  /className="sticky top-0 z-50 bg-\[\#fae6d8\]\/90 backdrop-blur-md px-4 py-3 shadow-\[0_4px_20px_rgba\(0,0,0,0\.3\)\] transition-all"/,
  'className="sticky top-0 z-50 bg-[#d1f2e5]/90 backdrop-blur-md px-4 py-3 shadow-[0_4px_20px_rgba(0,0,0,0.1)] transition-all"'
);

// Remove image and dark gradients from Hero Banner
code = code.replace(
  /<div className="relative w-full h-\[35vh\] min-h-\[300px\] rounded-none overflow-hidden group shadow-2xl border-y border-orange-500\/30">[\s\S]*?{\/\* Floating Glass Chips \*\/}/,
  `<div className="relative w-full h-[35vh] min-h-[300px] rounded-[30px] overflow-hidden group shadow-lg border border-white/50 bg-[#b5e8d5]">
          {/* Floating Glass Chips */}`
);

// Fix text colors in Hero Banner
code = code.replace(
  /className="mt-2 text-sm text-gray-300 font-medium tracking-wide drop-shadow-md"/,
  'className="mt-2 text-sm text-gray-700 font-medium tracking-wide"'
);

code = code.replace(
  /className="text-3xl md:text-4xl font-black text-gray-900 tracking-tighter leading-tight drop-shadow-xl max-w-\[80%\]"/,
  'className="text-3xl md:text-4xl font-black text-gray-900 tracking-tighter leading-tight max-w-[80%]"'
);

code = code.replace(
  /<span className="text-transparent bg-clip-text bg-gradient-to-r from-\[\#C89B3C\] to-\[\#E6D2AD\]">Extraordinary\?<\/span>/g,
  '<span className="text-orange-500">Extraordinary?</span>'
);

code = code.replace(
  /bg-orange-500\/80 backdrop-blur-md border border-orange-400\/50 text-gray-900/g,
  'bg-white backdrop-blur-md border border-white/50 text-orange-500'
);

// Fix button in hero banner
code = code.replace(
  /className="mt-6 px-6 py-3 bg-gradient-to-r from-\[\#C89B3C\] to-\[\#E6D2AD\] text-gray-900 rounded-full font-bold text-sm tracking-wide shadow-lg shadow-black\/20 flex items-center gap-2 w-max group\/btn overflow-hidden relative border border-white\/20"/,
  'className="mt-6 px-6 py-3 bg-gray-900 text-white rounded-full font-bold text-sm tracking-wide shadow-md flex items-center gap-2 w-max group/btn overflow-hidden relative"'
);

// Top Section Location
code = code.replace(
  /className="bg-\[\#d1f2e5\] pb-6 relative z-20 -mt-8 pt-4 transition-all duration-500 rounded-b-\[30px\] shadow-sm"/,
  'className="bg-transparent pb-6 px-4 relative z-20 -mt-2 transition-all duration-500"'
);

fs.writeFileSync('src/components/HomePage.tsx', code, 'utf8');
