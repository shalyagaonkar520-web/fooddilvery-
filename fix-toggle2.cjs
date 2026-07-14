const fs = require('fs');
let code = fs.readFileSync('src/components/HomePage.tsx', 'utf8');

const startIdx = code.indexOf('{/* Premium Hero Banner Section */}');
const endIdx = code.indexOf('{/* Sticky Search Bar */}');

const replacement = `
      {/* Plate Toggle Hero Section */}
      <div className="bg-transparent pb-6 relative z-20 -mt-2 transition-all duration-500">
        <div className="relative w-full aspect-square rounded-none overflow-hidden group shadow-md border-y border-white/50 bg-[#d1f2e5] flex flex-col items-center justify-center p-6">
          {/* Header */}
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center z-20 mb-8"
          >
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 tracking-tighter leading-tight max-w-[80%] mx-auto">
              Craving Something <span className="text-orange-500">Extraordinary?</span>
            </h2>
            <p className="mt-2 text-sm text-gray-700 font-medium tracking-wide">
              Tap the plate to switch your preference.
            </p>
          </motion.div>

          {/* The Plate Toggle */}
          <div 
            className="relative w-full max-w-[280px] h-[90px] bg-white/60 backdrop-blur-md rounded-[45px] shadow-inner border border-white flex items-center p-2 cursor-pointer"
            onClick={() => {
              if(activeFilters.includes('Veg Only')) {
                 // Switch to non-veg
                 setActiveFilters(activeFilters.filter(f => f !== 'Veg Only' && f !== 'Non Veg').concat('Non Veg'));
              } else if (activeFilters.includes('Non Veg')) {
                 // Switch to veg
                 setActiveFilters(activeFilters.filter(f => f !== 'Non Veg' && f !== 'Veg Only').concat('Veg Only'));
              } else {
                 // Neither selected, default to veg
                 setActiveFilters([...activeFilters, 'Veg Only']);
              }
            }}
          >
            {/* Texts */}
            <div className="absolute inset-0 flex items-center justify-between px-8 text-sm font-black tracking-widest uppercase z-10 pointer-events-none">
              <span className={\`transition-colors duration-500 \${activeFilters.includes('Veg Only') ? 'text-green-700' : 'text-gray-400'}\`}>Veg</span>
              <span className={\`transition-colors duration-500 \${activeFilters.includes('Non Veg') ? 'text-red-700' : 'text-gray-400'}\`}>Non-Veg</span>
            </div>

            {/* The Rolling Plate */}
            <motion.div
              layout
              initial={false}
              animate={{
                x: activeFilters.includes('Non Veg') ? 174 : 0, 
                rotate: activeFilters.includes('Non Veg') ? 360 : 0
              }}
              transition={{ type: "spring", stiffness: 100, damping: 15 }}
              className="absolute z-20 w-[74px] h-[74px] rounded-full shadow-lg overflow-hidden border-4 border-white bg-white"
            >
              <AnimatePresence mode="popLayout">
                <motion.img
                  key={activeFilters.includes('Non Veg') ? 'non-veg' : 'veg'}
                  src={activeFilters.includes('Non Veg') 
                    ? "https://images.unsplash.com/photo-1544025162-8360d7c7be93?auto=format&fit=crop&w=200&q=80"
                    : "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=200&q=80"}
                  alt="Plate"
                  initial={{ opacity: 0, scale: 0.8, rotate: -90 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  exit={{ opacity: 0, scale: 0.8, rotate: 90 }}
                  transition={{ duration: 0.4 }}
                  className="w-full h-full object-cover"
                />
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </div>
      `;

code = code.substring(0, startIdx) + replacement + code.substring(endIdx);
fs.writeFileSync('src/components/HomePage.tsx', code, 'utf8');
