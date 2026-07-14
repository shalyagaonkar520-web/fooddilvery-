const fs = require('fs');
let content = fs.readFileSync('src/components/HomePage.tsx', 'utf8');

const target = `<div className="flex items-center gap-2 shrink-0 bg-gray-100 rounded-lg p-1 mx-2">
              <div 
                onClick={() => {
                  if(activeFilters.includes('Veg Only')) setActiveFilters(activeFilters.filter(f => f !== 'Veg Only'));
                  else setActiveFilters([...activeFilters, 'Veg Only']);
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
                  else setActiveFilters([...activeFilters, 'Non Veg']);
                }}
                className={\`w-6 h-6 rounded-md flex items-center justify-center cursor-pointer transition-colors \${activeFilters.includes('Non Veg') ? 'bg-white shadow-sm' : ''}\`}
              >
                <div className={\`w-3 h-3 border \${activeFilters.includes('Non Veg') ? 'border-red-500' : 'border-gray-400'} flex items-center justify-center\`}>
                  <div className={\`w-1.5 h-1.5 rounded-full \${activeFilters.includes('Non Veg') ? 'bg-red-500' : 'bg-gray-400'}\`} />
                </div>
              </div>
            </div>`;

const replacement = `<div className="flex items-center gap-2 shrink-0 px-2">
              <button 
                onClick={() => {
                  if(activeFilters.includes('Veg Only')) setActiveFilters(activeFilters.filter(f => f !== 'Veg Only'));
                  else setActiveFilters([...activeFilters.filter(f => f !== 'Non Veg'), 'Veg Only']);
                }}
                className={\`relative flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-[10px] font-black uppercase tracking-wider transition-all duration-300 overflow-hidden \${activeFilters.includes('Veg Only') ? 'bg-green-50 border-green-500 text-green-700 shadow-[0_0_10px_rgba(34,197,94,0.2)]' : 'bg-white border-gray-200 text-gray-500 hover:border-green-200 hover:bg-green-50/50'}\`}
              >
                <div className={\`relative z-10 w-3 h-3 border \${activeFilters.includes('Veg Only') ? 'border-green-600' : 'border-gray-400'} flex items-center justify-center bg-white\`}>
                  <div className={\`w-1.5 h-1.5 rounded-full \${activeFilters.includes('Veg Only') ? 'bg-green-600' : 'bg-gray-400'}\`} />
                </div>
                <span className="relative z-10">Veg</span>
              </button>
              <button 
                onClick={() => {
                  if(activeFilters.includes('Non Veg')) setActiveFilters(activeFilters.filter(f => f !== 'Non Veg'));
                  else setActiveFilters([...activeFilters.filter(f => f !== 'Veg Only'), 'Non Veg']);
                }}
                className={\`relative flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-[10px] font-black uppercase tracking-wider transition-all duration-300 overflow-hidden \${activeFilters.includes('Non Veg') ? 'bg-red-50 border-red-500 text-red-700 shadow-[0_0_10px_rgba(239,68,68,0.2)]' : 'bg-white border-gray-200 text-gray-500 hover:border-red-200 hover:bg-red-50/50'}\`}
              >
                <div className={\`relative z-10 w-3 h-3 border \${activeFilters.includes('Non Veg') ? 'border-red-600' : 'border-gray-400'} flex items-center justify-center bg-white\`}>
                  <div className={\`w-1.5 h-1.5 rounded-full \${activeFilters.includes('Non Veg') ? 'bg-red-600' : 'bg-gray-400'}\`} />
                </div>
                <span className="relative z-10">Non-Veg</span>
              </button>
            </div>`;

content = content.replace(target, replacement);

fs.writeFileSync('src/components/HomePage.tsx', content, 'utf8');
