const fs = require('fs');
let code = fs.readFileSync('src/components/HomePage.tsx', 'utf8');

const newCategories = `const CATEGORIES = [
  { name: "Burger", id: "Burgers & Rolls", image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=150&q=80" },
  { name: "Pizza", id: "Pizzas & Momos", image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=150&q=80" },
  { name: "Chinese", id: "Rice & Noodles", image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=150&q=80" },
  { name: "Rice", id: "Veg / Gravy", image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=150&q=80" },
  { name: "Biryani", id: "Biryani", image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=150&q=80" },
  { name: "Dessert", id: "Drinks", image: "https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=150&q=80" },
  { name: "All", id: "All Dishes", image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=150&q=80" },
  { name: "Starters", id: "Starters", image: "https://images.unsplash.com/photo-1544025162-8111f42d59ac?auto=format&fit=crop&w=150&q=80" },
];`;

const oldCategoriesRegex = /const CATEGORIES = \[\s*\{[^\}]+\},[\s\S]*?\];/;
code = code.replace(oldCategoriesRegex, newCategories);

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
                  <div className={\`w-16 h-16 rounded-full overflow-hidden flex items-center justify-center shadow-sm border transition-all duration-300 \${
                    isSelected 
                      ? 'bg-orange-50 border-orange-500 shadow-orange-500/20 scale-110' 
                      : 'bg-white border-gray-100 group-hover:bg-gray-50 group-hover:scale-105'
                  }\`}>
                    <img 
                      src={cat.image} 
                      alt={cat.name} 
                      className={\`w-full h-full object-cover transition-transform duration-500 \${isSelected ? 'scale-110' : 'group-hover:scale-110'}\`} 
                    />
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
