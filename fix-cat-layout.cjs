const fs = require('fs');
let code = fs.readFileSync('src/components/HomePage.tsx', 'utf8');

const oldCategoriesHTMLRegex = /\{\/\* Categories Horizontal \*\/\}.*?\{\/\* Quick Filters \*\/\}/s;

const newCategoriesHTML = `{/* Categories Horizontal */}
        <div className="-mx-4 px-4 overflow-x-auto no-scrollbar pb-4">
          <div className="grid grid-cols-4 gap-y-6 gap-x-2 min-w-full">
            {CATEGORIES.map((cat) => {
              const isSelected = activeCategory === cat.id;
              return (
                <div
                  key={cat.id}
                  onClick={() => {
                    setActiveCategory(cat.id);
                    playSound(SOUNDS.CLICK);
                  }}
                  className="flex flex-col items-center gap-2 cursor-pointer group"
                >
                  <div className={\`w-16 h-16 rounded-full flex items-center justify-center text-3xl shadow-sm border transition-all duration-300 \${
                    isSelected 
                      ? 'bg-orange-50 border-orange-500 shadow-orange-500/20 scale-110' 
                      : 'bg-white border-gray-100 group-hover:bg-gray-50 group-hover:scale-105'
                  }\`}>
                    {cat.icon}
                  </div>
                  <span className={\`text-[10px] font-black uppercase tracking-wider text-center transition-colors \${
                    isSelected ? 'text-orange-500' : 'text-gray-500 group-hover:text-gray-900'
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
