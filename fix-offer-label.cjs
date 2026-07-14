const fs = require('fs');
let code = fs.readFileSync('src/components/HomePage.tsx', 'utf8');

const offerLabel = `
                    {item.price < 99 && (
                      <div className="absolute bottom-2 right-2 bg-red-500/90 backdrop-blur-sm px-2 py-0.5 rounded-lg text-[10px] font-black text-white flex items-center gap-1 shadow-sm">
                        % Offer
                      </div>
                    )}
`;

// Insert after the Bestseller label
code = code.replace(
  '🔥 Bestseller\n                      </div>\n                    )}',
  '🔥 Bestseller\n                      </div>\n                    )}' + offerLabel
);

fs.writeFileSync('src/components/HomePage.tsx', code, 'utf8');
