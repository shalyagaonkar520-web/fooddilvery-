const fs = require('fs');
let content = fs.readFileSync('src/components/HomePage.tsx', 'utf8');

const oldHeroBannerStr = `<div className="bg-slate-900 px-4 pb-6 pt-2 relative z-20 -mt-4 pt-8 rounded-b-[30px] shadow-xl">
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

const newHeroBannerStr = `{activeCategory === 'All Dishes' ? (
      <div className="bg-slate-900 px-4 pb-6 pt-2 relative z-20 -mt-4 pt-8 rounded-b-[30px] shadow-xl transition-all duration-500">
        <div className="relative w-full h-48 rounded-[24px] overflow-hidden bg-slate-800 shadow-2xl mt-2 border border-slate-700/50 group">
           <img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1000&auto=format&fit=crop" className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700" alt="Craving Food" />
           <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent flex flex-col justify-center p-6">
              <motion.span 
                animate={{ textShadow: ["0px 0px 10px #f97316", "0px 0px 30px #f97316", "0px 0px 10px #f97316"] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-white text-4xl font-black leading-tight tracking-tighter italic"
              >
                CRAVING <br/><span className="text-orange-500">MAGIC?</span>
              </motion.span>
              <span className="text-orange-400 text-[10px] font-black uppercase tracking-[4px] mt-2 bg-orange-500/20 w-max px-3 py-1.5 rounded-full border border-orange-500/30 backdrop-blur-md">
                Recommended For You
              </span>
           </div>
        </div>
      </div>
      ) : (
      <div className="bg-slate-900 px-4 pb-6 pt-2 relative z-20 -mt-4 pt-8 rounded-b-[30px] shadow-xl transition-all duration-500">
        <div className="relative w-full h-40 rounded-[24px] overflow-hidden bg-slate-800 shadow-2xl mt-2 border border-slate-700/50">
           <img src="https://images.unsplash.com/photo-1543353071-873f17a7a088?q=80&w=1000&auto=format&fit=crop" className="w-full h-full object-cover opacity-50" alt="Category" />
           <div className="absolute inset-0 bg-gradient-to-r from-black/90 to-transparent flex flex-col justify-center p-6">
              <motion.span 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0, textShadow: ["0px 0px 10px #f97316", "0px 0px 30px #f97316", "0px 0px 10px #f97316"] }}
                key={activeCategory}
                transition={{ duration: 0.5 }}
                className="text-white text-3xl font-black leading-tight tracking-tighter italic uppercase"
              >
                EXPLORE <br/><span className="text-orange-500">{activeCategory}</span>
              </motion.span>
           </div>
        </div>
      </div>
      )}`;

content = content.replace(oldHeroBannerStr, newHeroBannerStr);
fs.writeFileSync('src/components/HomePage.tsx', content, 'utf8');
