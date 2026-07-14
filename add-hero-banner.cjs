const fs = require('fs');

let content = fs.readFileSync('src/components/HomePage.tsx', 'utf8');

content = content.replace(
  "import { Search, MapPin, Plus, Minus, ChevronRight, Star, Clock, Zap, Filter, Heart } from 'lucide-react';",
  "import { Search, MapPin, Plus, Minus, ChevronRight, Star, Clock, Zap, Filter, Heart, ArrowRight } from 'lucide-react';"
);

const heroBanner = `
        {/* Premium Hero Banner */}
        <div className="relative w-full h-[35vh] min-h-[300px] rounded-[32px] overflow-hidden group shadow-2xl shadow-orange-500/10">
          {/* Background Image */}
          <img 
            src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&q=80" 
            alt="Premium Food" 
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-[10s] group-hover:scale-110"
          />
          
          {/* Cinematic Dark Gradient Overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/20 to-transparent" />
          
          {/* Steam Animation Layer (subtle) */}
          <div className="absolute inset-0 opacity-30 mix-blend-screen pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/smoke.png')] animate-[smoke_20s_linear_infinite]" />

          {/* Floating Glass Chips */}
          <div className="absolute top-4 left-4 flex flex-wrap gap-2 z-20">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 text-white text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1.5">
              ⭐ 4.9 Rating
            </div>
            <div className="bg-white/10 backdrop-blur-md border border-white/20 text-white text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1.5">
              🚀 10 Min Delivery
            </div>
          </div>
          <div className="absolute top-4 right-4 z-20">
            <div className="bg-orange-500/80 backdrop-blur-md border border-orange-400/50 text-white text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full shadow-lg shadow-orange-500/30 flex items-center gap-1.5">
              🔥 Today's Special
            </div>
          </div>

          {/* Content */}
          <div className="absolute inset-0 p-6 flex flex-col justify-end z-20">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.8, ease: "easeOut" }}
              className="text-3xl md:text-4xl font-black text-white tracking-tighter leading-tight drop-shadow-xl max-w-[80%]"
            >
              Craving Something <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C89B3C] to-[#E6D2AD]">Extraordinary?</span>
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
              className="mt-2 text-sm text-gray-300 font-medium tracking-wide drop-shadow-md"
            >
              Freshly prepared. Delivered in minutes.
            </motion.p>
            
            <motion.button 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ delay: 0.3, duration: 0.5, ease: "easeOut" }}
              className="mt-5 w-max px-8 py-3 rounded-2xl text-xs font-black uppercase tracking-[2px] text-gray-900 shadow-[0_0_20px_rgba(200,155,60,0.4)] relative overflow-hidden group/btn"
              style={{ background: 'linear-gradient(135deg, #C89B3C, #E6D2AD)' }}
              onClick={() => {
                const element = document.getElementById('categories-section');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700 ease-in-out skew-x-12" />
              <span className="relative z-10 flex items-center gap-2">
                Order Now
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </span>
            </motion.button>
          </div>
        </div>
`;

content = content.replace(
  '{/* Categories Horizontal */}',
  heroBanner + '\n\n        <div id="categories-section" className="scroll-mt-32" />\n        {/* Categories Horizontal */}'
);

fs.writeFileSync('src/components/HomePage.tsx', content, 'utf8');
