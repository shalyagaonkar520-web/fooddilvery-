const fs = require('fs');
let code = fs.readFileSync('src/components/HomePage.tsx', 'utf8');

const oldPlateDiv = `<motion.div
              layout
              initial={false}
              animate={{
                x: activeFilters.includes('Non Veg') ? 174 : 0, 
                rotate: activeFilters.includes('Non Veg') ? 360 : 0
              }}
              transition={{ type: "spring", stiffness: 100, damping: 15 }}
              className="absolute z-20 w-[74px] h-[74px] rounded-full shadow-lg overflow-hidden border-4 border-white bg-white"
            >`;

const newPlateDiv = `<motion.div
              layout
              drag="x"
              dragConstraints={{ left: 0, right: 174 }}
              dragElastic={0.1}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = offset.x;
                if (swipe > 20 || velocity.x > 200) {
                  // Swipe Right -> Non Veg
                  if (!activeFilters.includes('Non Veg')) {
                    setActiveFilters(activeFilters.filter(f => f !== 'Veg Only' && f !== 'Non Veg').concat('Non Veg'));
                  }
                } else if (swipe < -20 || velocity.x < -200) {
                  // Swipe Left -> Veg
                  if (!activeFilters.includes('Veg Only')) {
                    setActiveFilters(activeFilters.filter(f => f !== 'Non Veg' && f !== 'Veg Only').concat('Veg Only'));
                  }
                }
              }}
              initial={false}
              animate={{
                x: activeFilters.includes('Non Veg') ? 174 : 0, 
                rotate: activeFilters.includes('Non Veg') ? 360 : 0
              }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="absolute left-2 z-20 w-[74px] h-[74px] rounded-full shadow-[0_10px_20px_rgba(0,0,0,0.15)] overflow-hidden border-[3px] border-white bg-white cursor-grab active:cursor-grabbing"
            >`;

// Also fix the x offset because we added `left-2`. The container width is 280. The plate width is 74. If left is 8 (left-2), then we have 280 - 8 - 74 - 8 = 190.
// Let's just remove left-2 and keep the absolute positioning matching exactly what was there, just adding the drag handlers.
const fixedNewPlateDiv = `<motion.div
              layout
              drag="x"
              dragConstraints={activeFilters.includes('Non Veg') ? { left: -174, right: 0 } : { left: 0, right: 174 }}
              dragElastic={0.1}
              onDragEnd={(e, { offset, velocity }) => {
                if (offset.x > 30 || velocity.x > 200) {
                  if (!activeFilters.includes('Non Veg')) {
                    setActiveFilters(activeFilters.filter(f => f !== 'Veg Only' && f !== 'Non Veg').concat('Non Veg'));
                  }
                } else if (offset.x < -30 || velocity.x < -200) {
                  if (!activeFilters.includes('Veg Only')) {
                    setActiveFilters(activeFilters.filter(f => f !== 'Non Veg' && f !== 'Veg Only').concat('Veg Only'));
                  }
                }
              }}
              initial={false}
              animate={{
                x: activeFilters.includes('Non Veg') ? 174 : 0, 
                rotate: activeFilters.includes('Non Veg') ? 360 : 0
              }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="absolute z-20 w-[74px] h-[74px] rounded-full shadow-lg overflow-hidden border-[3px] border-white bg-white cursor-grab active:cursor-grabbing"
            >`;

code = code.replace(oldPlateDiv, fixedNewPlateDiv);

// Also change the non veg plate to a nice chicken roast/plate
code = code.replace(
  /"https:\/\/images.unsplash.com\/photo-1544025162-8360d7c7be93\?auto=format&fit=crop&w=200&q=80"/,
  '"https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=200&q=80"'
);

fs.writeFileSync('src/components/HomePage.tsx', code, 'utf8');
