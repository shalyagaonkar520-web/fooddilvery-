import React from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface PlateToggleProps {
  isVeg: boolean;
  onChange: (isVeg: boolean) => void;
}

export default function PlateToggle({ isVeg, onChange }: PlateToggleProps) {
  // Veg plate image
  const vegImg = "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=400&q=80"; // salad/veg bowl
  // Non-Veg plate image
  const nonVegImg = "https://images.unsplash.com/photo-1544025162-8360d7c7be93?auto=format&fit=crop&w=400&q=80"; // chicken/meat plate
  
  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center p-6">
      
      {/* Title / Info */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center z-20 mb-8"
      >
        <h2 className="text-3xl md:text-4xl font-black text-gray-900 tracking-tighter leading-tight drop-shadow-sm">
          Craving Something <span className="text-orange-500">Extraordinary?</span>
        </h2>
        <p className="mt-2 text-sm text-gray-700 font-medium tracking-wide">
          Freshly prepared. Delivered fresh and hot.
        </p>
      </motion.div>

      {/* The Toggle Container */}
      <div 
        className="relative w-full max-w-[280px] h-[100px] bg-white/40 backdrop-blur-md rounded-full shadow-inner border border-white/60 flex items-center p-2 cursor-pointer mt-4"
        onClick={() => onChange(!isVeg)}
      >
        
        {/* Texts */}
        <div className="absolute inset-0 flex items-center justify-between px-8 text-sm font-black tracking-widest uppercase z-10 pointer-events-none">
          <span className={`transition-colors duration-500 ${isVeg ? 'text-green-800' : 'text-gray-400'}`}>Veg</span>
          <span className={`transition-colors duration-500 ${!isVeg ? 'text-red-800' : 'text-gray-400'}`}>Non-Veg</span>
        </div>

        {/* The Rolling Plate */}
        <motion.div
          layout
          initial={false}
          animate={{
            x: isVeg ? 0 : 180, // assuming width is 280, plate is ~84px, so (280 - 16 - 84) = 180
            rotate: isVeg ? 0 : 360
          }}
          transition={{ type: "spring", stiffness: 100, damping: 15 }}
          className="absolute z-20 w-[84px] h-[84px] rounded-full shadow-[0_10px_20px_rgba(0,0,0,0.2)] overflow-hidden border-4 border-white"
        >
          <AnimatePresence mode="popLayout">
            <motion.img
              key={isVeg ? 'veg' : 'non-veg'}
              src={isVeg ? vegImg : nonVegImg}
              alt={isVeg ? "Veg Plate" : "Non-Veg Plate"}
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
  );
}
