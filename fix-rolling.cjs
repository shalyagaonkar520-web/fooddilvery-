const fs = require('fs');
let code = fs.readFileSync('src/components/HomePage.tsx', 'utf8');

const oldPlateImage = `<AnimatePresence mode="popLayout">
                <motion.img
                  key={activeFilters.includes('Non Veg') ? 'non-veg' : 'veg'}
                  src={activeFilters.includes('Non Veg') 
                    ? "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=200&q=80"
                    : "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=200&q=80"}
                  alt="Plate"
                  initial={{ opacity: 0, scale: 0.8, rotate: -90 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  exit={{ opacity: 0, scale: 0.8, rotate: 90 }}
                  transition={{ duration: 0.4 }}
                  className="w-full h-full object-cover pointer-events-none"
                />
              </AnimatePresence>`;

const newPlateImage = `<img
                  src={activeFilters.includes('Non Veg') 
                    ? "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?auto=format&fit=crop&w=200&q=80"
                    : "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=200&q=80"}
                  alt="Plate"
                  className="w-full h-full object-cover pointer-events-none transition-all duration-300"
                />`;

code = code.replace(oldPlateImage, newPlateImage);

fs.writeFileSync('src/components/HomePage.tsx', code, 'utf8');
