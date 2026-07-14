const fs = require('fs');

// 1. Fix BottomCartBar text visibility
let cartBar = fs.readFileSync('src/components/BottomCartBar.tsx', 'utf8');
cartBar = cartBar.replace(
  '<div className="absolute inset-0 bg-gray-100 -translate-x-full group-hover/btn:translate-x-0 transition-transform duration-500" />',
  '<div className="absolute inset-0 bg-orange-600 -translate-x-full group-hover/btn:translate-x-0 transition-transform duration-500" />'
);
cartBar = cartBar.replace('whileTap={{ scale: 0.98 }}', 'whileTap={{ scale: 0.90 }}');
fs.writeFileSync('src/components/BottomCartBar.tsx', cartBar, 'utf8');

// 2. Fix HomePage padding & add Top Bar Marquee
let homePage = fs.readFileSync('src/components/HomePage.tsx', 'utf8');
homePage = homePage.replace('pb-[90px]', 'pb-[180px]');

const marqueeStr = `      {/* Top Scrolling Marquee */}
      <div className="bg-orange-500 text-white overflow-hidden py-1">
        <div className="whitespace-nowrap animate-[scroll_20s_linear_infinite] text-[10px] font-black uppercase tracking-widest flex gap-8 items-center">
          <span>✨ 100% FRESH INGREDIENTS</span>
          <span>•</span>
          <span>⚡ 10 MINS DELIVERY</span>
          <span>•</span>
          <span>🎁 ORDER NOW FOR 50% OFF</span>
          <span>•</span>
          <span>✨ 100% FRESH INGREDIENTS</span>
          <span>•</span>
          <span>⚡ 10 MINS DELIVERY</span>
          <span>•</span>
          <span>🎁 ORDER NOW FOR 50% OFF</span>
        </div>
      </div>
`;

homePage = homePage.replace(
  '      {/* Top Section - Location & Profile */}',
  marqueeStr + '      {/* Top Section - Location & Profile */}'
);

fs.writeFileSync('src/components/HomePage.tsx', homePage, 'utf8');

