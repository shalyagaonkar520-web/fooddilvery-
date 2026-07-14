const fs = require('fs');
let code = fs.readFileSync('src/components/HomePage.tsx', 'utf8');

// Make Hero Banner square and remove borders
code = code.replace(
  /className="relative w-full h-\[35vh\] min-h-\[300px\] rounded-none overflow-hidden group shadow-md border-y border-white\/50 bg-\[\#d1f2e5\]"/,
  'className="relative w-full aspect-square rounded-none overflow-hidden group bg-[#d1f2e5]"'
);

// Remove the shadow-md as well, since they should merge, we don't want a shadow in between, or rather, if there's no border, shadow won't be an issue if the shadow is at the bottom, but the wrapper might have issues.

code = code.replace(
  /className="bg-[#d1f2e5] px-4 pt-6 pb-8 relative z-30"/,
  'className="bg-[#d1f2e5] px-4 pt-6 pb-2 relative z-30"'
);

fs.writeFileSync('src/components/HomePage.tsx', code, 'utf8');
