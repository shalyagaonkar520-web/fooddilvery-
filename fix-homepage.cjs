const fs = require('fs');
let content = fs.readFileSync('src/components/HomePage.tsx', 'utf8');

// Replace top section
// 1. till search make a unique colour and top food slider with unique style txt glowing animation kind off recomded for uh
content = content.replace(
  '<div className="bg-white px-4 pt-4 pb-2 relative z-30">',
  `<div className="bg-slate-900 px-4 pt-6 pb-4 relative z-30 rounded-b-3xl shadow-lg">`
);

content = content.replace(
  'text-[13px] font-black text-gray-900 flex items-center gap-1',
  'text-[13px] font-black text-white flex items-center gap-1'
);

content = content.replace(
  'text-xs font-medium text-gray-500 truncate mt-0.5',
  'text-xs font-medium text-gray-300 truncate mt-0.5'
);

content = content.replace(
  'className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center border border-gray-200 cursor-pointer overflow-hidden"',
  'className="w-10 h-10 bg-slate-800 text-white rounded-full flex items-center justify-center border border-slate-700 cursor-pointer overflow-hidden"'
);

// Search Bar - Red and Green buttons
const searchBarStr = `<div className="relative bg-white border border-gray-200 rounded-2xl shadow-sm flex items-center px-4 py-3.5 z-10 overflow-hidden">
            <Search className="w-5 h-5 text-gray-400 shrink-0" />
            <div className="relative flex-1 h-6 ml-3">
              <input`;

const searchBarNewStr = `<div className="relative bg-white border border-gray-200 rounded-2xl shadow-sm flex items-center px-4 py-3.5 z-10 overflow-hidden">
            <Search className="w-5 h-5 text-gray-400 shrink-0" />
            <div className="relative flex-1 h-6 ml-3">
              <input`;

// Let's add Veg/NonVeg toggle next to Filter
const filterIconStr = `<div className="w-px h-5 bg-gray-200 mx-3 shrink-0" />
            <Filter className="w-5 h-5 text-orange-500 shrink-0" />`;

const filterNewStr = `<div className="flex items-center gap-2 shrink-0 bg-gray-100 rounded-lg p-1 mx-2">
              <div 
                onClick={() => {
                  if(activeFilters.includes('Veg Only')) setActiveFilters(activeFilters.filter(f => f !== 'Veg Only'));
                  else setActiveFilters([...activeFilters.filter(f => f !== 'Non Veg'), 'Veg Only']);
                }}
                className={\`w-6 h-6 rounded-md flex items-center justify-center cursor-pointer transition-colors \${activeFilters.includes('Veg Only') ? 'bg-white shadow-sm' : ''}\`}
              >
                <div className={\`w-3 h-3 border \${activeFilters.includes('Veg Only') ? 'border-green-500' : 'border-gray-400'} flex items-center justify-center\`}>
                  <div className={\`w-1.5 h-1.5 rounded-full \${activeFilters.includes('Veg Only') ? 'bg-green-500' : 'bg-gray-400'}\`} />
                </div>
              </div>
              <div 
                onClick={() => {
                  if(activeFilters.includes('Non Veg')) setActiveFilters(activeFilters.filter(f => f !== 'Non Veg'));
                  else setActiveFilters([...activeFilters.filter(f => f !== 'Veg Only'), 'Non Veg']);
                }}
                className={\`w-6 h-6 rounded-md flex items-center justify-center cursor-pointer transition-colors \${activeFilters.includes('Non Veg') ? 'bg-white shadow-sm' : ''}\`}
              >
                <div className={\`w-3 h-3 border \${activeFilters.includes('Non Veg') ? 'border-red-500' : 'border-gray-400'} flex items-center justify-center\`}>
                  <div className={\`w-1.5 h-1.5 rounded-full \${activeFilters.includes('Non Veg') ? 'bg-red-500' : 'bg-gray-400'}\`} />
                </div>
              </div>
            </div>
            <div className="w-px h-5 bg-gray-200 mx-2 shrink-0" />
            <Filter className="w-5 h-5 text-orange-500 shrink-0" />`;

content = content.replace(filterIconStr, filterNewStr);

// "recomded for uh make 2 x 2 layout in mobile view"
content = content.replace(
  'className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"',
  'className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4"'
);

// For 2x2 layout, the items look too big in column, let's adjust the item card to be flex-col for grid-cols-2
content = content.replace(
  'className="bg-white rounded-3xl p-4 border border-gray-100 shadow-[0_8px_30px_rgba(0,0,0,0.04)] flex gap-4 relative overflow-hidden group"',
  'className="bg-white rounded-2xl p-3 border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.04)] flex flex-col gap-3 relative overflow-hidden group"'
);
content = content.replace(
  'className="w-32 h-32 rounded-2xl overflow-hidden relative shrink-0"',
  'className="w-full h-32 rounded-xl overflow-hidden relative shrink-0"'
);

// Hero Banner Section replacement - Top Food Slider with glowing animation text
const heroBannerStr = `{/* Hero Banner Section */}
      <div className="bg-white px-4 pb-4 relative z-30">
        <div className="relative w-full h-40 rounded-[24px] overflow-hidden bg-orange-100 shadow-sm mt-2">
           <img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1000&auto=format&fit=crop" className="w-full h-full object-cover" alt="Craving Food" />
           <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent flex flex-col justify-center p-6">
              <span className="text-white text-3xl font-black leading-tight">50% OFF<br/>ON FIRST ORDER</span>
              <span className="text-orange-400 text-sm font-bold uppercase tracking-wider mt-1">Use Code: MAGIC50</span>
           </div>
        </div>
      </div>`;

const newHeroBannerStr = `{/* Hero Banner Section */}
      <div className="bg-slate-900 px-4 pb-6 pt-2 relative z-20 -mt-4 pt-8 rounded-b-[30px] shadow-xl">
        <div className="relative w-full h-48 rounded-[24px] overflow-hidden bg-slate-800 shadow-2xl mt-2 border border-slate-700/50">
           <img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1000&auto=format&fit=crop" className="w-full h-full object-cover opacity-60" alt="Craving Food" />
           <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent flex flex-col justify-center p-6">
              <motion.span 
                animate={{ textShadow: ["0px 0px 10px #f97316", "0px 0px 30px #f97316", "0px 0px 10px #f97316"] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-white text-4xl font-black leading-tight tracking-tighter italic"
              >
                CRAVING <br/><span className="text-orange-500">MAGIC?</span>
              </motion.span>
              <span className="text-orange-400 text-xs font-bold uppercase tracking-[4px] mt-2 bg-orange-500/20 w-max px-3 py-1 rounded-full border border-orange-500/30">
                Recommended For You
              </span>
           </div>
        </div>
      </div>`;

content = content.replace(heroBannerStr, newHeroBannerStr);

// Change the name inside categories to have mini banner next to them
const catStr = `<span className={\`text-[10px] font-black uppercase tracking-wider transition-colors \${
                  activeCategory === cat.name ? 'text-orange-500' : 'text-gray-500 group-hover:text-gray-900'
                }\`}>
                  {cat.name}
                </span>`;
const newCatStr = `<span className={\`text-[10px] font-black uppercase tracking-wider transition-colors flex items-center gap-1 \${
                  activeCategory === cat.name ? 'text-orange-500' : 'text-gray-500 group-hover:text-gray-900'
                }\`}>
                  {cat.name}
                  {cat.name === 'Biryani' || cat.name === 'Pizzas & Momos' ? (
                    <span className="bg-red-500 text-white text-[8px] px-1.5 py-0.5 rounded-[4px] ml-0.5 animate-pulse">HOT</span>
                  ) : null}
                </span>`;
content = content.replace(catStr, newCatStr);

// Back to Top button
// Wait, I need to add state for it or just window.scrollTo. Let's add it at the bottom.
const bottomStr = `</div>
    </div>
  );
}`;
const backToTopStr = `
        {/* Back to Top */}
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-28 right-6 z-50 w-12 h-12 bg-white rounded-full shadow-xl border border-gray-100 flex items-center justify-center text-gray-900 hover:bg-gray-50 transition-all active:scale-95"
        >
          <ChevronRight className="w-6 h-6 -rotate-90" />
        </button>
      </div>
    </div>
  );
}`;
content = content.replace(bottomStr, backToTopStr);

fs.writeFileSync('src/components/HomePage.tsx', content, 'utf8');
