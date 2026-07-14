const fs = require('fs');
let code = fs.readFileSync('src/components/HomePage.tsx', 'utf8');

const startIdx = code.indexOf('{/* The Plate Toggle */}');
const endIdx = code.indexOf('{/* Sticky Search Bar */}');

const replacement = `{/* The Plate Toggle */}
          <div 
            className="relative w-full max-w-[340px] h-[90px] bg-white/60 backdrop-blur-md rounded-[45px] shadow-inner border border-white flex items-center p-2 cursor-pointer"
            onClick={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              const x = e.clientX - rect.left;
              if (x < rect.width / 3) {
                 // Veg
                 setActiveFilters(activeFilters.filter(f => f !== 'Non Veg' && f !== 'Veg Only').concat('Veg Only'));
              } else if (x > (rect.width * 2) / 3) {
                 // Non Veg
                 setActiveFilters(activeFilters.filter(f => f !== 'Veg Only' && f !== 'Non Veg').concat('Non Veg'));
              } else {
                 // Both
                 setActiveFilters(activeFilters.filter(f => f !== 'Veg Only' && f !== 'Non Veg'));
              }
            }}
          >
            {/* Texts */}
            <div className="absolute inset-0 flex items-center justify-between px-6 text-[11px] sm:text-xs font-black tracking-widest uppercase z-10 pointer-events-none">
              <span className={\`transition-colors duration-500 \${activeFilters.includes('Veg Only') ? 'text-green-700' : 'text-gray-400'}\`}>Veg</span>
              <span className={\`transition-colors duration-500 \${(!activeFilters.includes('Veg Only') && !activeFilters.includes('Non Veg')) ? 'text-orange-600' : 'text-gray-400'}\`}>Both</span>
              <span className={\`transition-colors duration-500 \${activeFilters.includes('Non Veg') ? 'text-red-700' : 'text-gray-400'}\`}>Non-Veg</span>
            </div>

            {/* The Rolling Plate */}
            <motion.div
              layout
              drag="x"
              dragConstraints={{ left: 0, right: 250 }}
              dragElastic={0.4}
              onDragEnd={(e, { offset, velocity }) => {
                // If it was Veg
                if (activeFilters.includes('Veg Only')) {
                  if (offset.x > 150 || velocity.x > 300) {
                     setActiveFilters(activeFilters.filter(f => f !== 'Veg Only' && f !== 'Non Veg').concat('Non Veg'));
                  } else if (offset.x > 50 || velocity.x > 100) {
                     setActiveFilters(activeFilters.filter(f => f !== 'Veg Only' && f !== 'Non Veg'));
                  }
                } 
                // If it was Non Veg
                else if (activeFilters.includes('Non Veg')) {
                  if (offset.x < -150 || velocity.x < -300) {
                     setActiveFilters(activeFilters.filter(f => f !== 'Non Veg' && f !== 'Veg Only').concat('Veg Only'));
                  } else if (offset.x < -50 || velocity.x < -100) {
                     setActiveFilters(activeFilters.filter(f => f !== 'Non Veg' && f !== 'Veg Only'));
                  }
                }
                // If it was Both
                else {
                  if (offset.x > 50 || velocity.x > 100) {
                     setActiveFilters(activeFilters.filter(f => f !== 'Veg Only' && f !== 'Non Veg').concat('Non Veg'));
                  } else if (offset.x < -50 || velocity.x < -100) {
                     setActiveFilters(activeFilters.filter(f => f !== 'Non Veg' && f !== 'Veg Only').concat('Veg Only'));
                  }
                }
              }}
              initial={false}
              animate={{
                x: activeFilters.includes('Non Veg') ? 250 : activeFilters.includes('Veg Only') ? 0 : 125, 
                rotate: activeFilters.includes('Non Veg') ? 360 : activeFilters.includes('Veg Only') ? 0 : 180
              }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="absolute z-20 w-[74px] h-[74px] rounded-full shadow-lg overflow-hidden border-[3px] border-white bg-white cursor-grab active:cursor-grabbing"
            >
              <img
                  src={activeFilters.includes('Non Veg') 
                    ? "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?auto=format&fit=crop&w=200&q=80"
                    : activeFilters.includes('Veg Only') 
                    ? "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=200&q=80"
                    : "https://images.unsplash.com/photo-1628294895950-9805252327bc?auto=format&fit=crop&w=200&q=80"}
                  alt="Plate"
                  className="w-full h-full object-cover pointer-events-none transition-all duration-300"
                />
            </motion.div>
          </div>
        </div>
      </div>
`;

code = code.substring(0, startIdx) + replacement + code.substring(endIdx);
fs.writeFileSync('src/components/HomePage.tsx', code, 'utf8');
