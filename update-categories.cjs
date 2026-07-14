const fs = require('fs');
let code = fs.readFileSync('src/components/HomePage.tsx', 'utf8');

const newCategories = `const CATEGORIES = [
  { name: "Burger", id: "Burgers & Rolls", icon: "🍔" },
  { name: "Pizza", id: "Pizzas & Momos", icon: "🍕" },
  { name: "Chinese", id: "Rice & Noodles", icon: "🍜" },
  { name: "Rice", id: "Veg / Gravy", icon: "🍚" },
  { name: "Biryani", id: "Biryani", icon: "🥘" },
  { name: "Dessert", id: "Drinks", icon: "🍦" },
  { name: "All", id: "All Dishes", icon: "🍽️" },
  { name: "Starters", id: "Starters", icon: "🍗" },
];`;

const oldCategoriesRegex = /const CATEGORIES = \[\s*\{[^\}]+\},[\s\S]*?\];/;
code = code.replace(oldCategoriesRegex, newCategories);

const oldCategoriesHTMLRegex = /\{\/\* Categories Horizontal \*\/\}.*?\{\/\* Quick Filters \*\/\}/s;

const newCategoriesHTML = `{/* Categories Horizontal */}
        <div className="-mx-4 px-4 overflow-x-auto no-scrollbar pb-4 snap-x snap-mandatory">
          <div className="grid grid-rows-2 grid-flow-col gap-3 min-w-max">
            {CATEGORIES.map((cat) => {
              const isSelected = activeCategory === cat.id;
              return (
                <div
                  key={cat.id}
                  onClick={() => {
                    setActiveCategory(cat.id);
                    playSound(SOUNDS.CLICK);
                  }}
                  className={\`flex items-center gap-3 pr-6 pl-2 py-2 rounded-full cursor-pointer transition-all duration-300 snap-start select-none border \${
                    isSelected
                      ? 'bg-gradient-to-r from-[#C89B3C] to-[#E6D2AD] shadow-[0_8px_20px_rgba(200,155,60,0.3)] scale-[1.02] border-transparent'
                      : 'bg-slate-900/90 backdrop-blur-md border-slate-700/50 hover:bg-slate-800 hover:scale-[1.02]'
                  }\`}
                >
                  <div className={\`w-10 h-10 rounded-full flex items-center justify-center text-xl shadow-inner transition-all duration-300 \${
                    isSelected ? 'bg-white/20' : 'bg-slate-800 border border-slate-700'
                  }\`}>
                    <span className={\`transition-all duration-300 \${isSelected ? 'brightness-0 invert drop-shadow-md scale-110' : 'grayscale-[0.2]'}\`}>{cat.icon}</span>
                  </div>
                  <span className={\`text-[11px] font-black uppercase tracking-wider transition-colors \${
                    isSelected ? 'text-white drop-shadow-sm' : 'text-slate-300'
                  }\`}>
                    {cat.name}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Quick Filters */}`;

code = code.replace(oldCategoriesHTMLRegex, newCategoriesHTML);

fs.writeFileSync('src/components/HomePage.tsx', code, 'utf8');
