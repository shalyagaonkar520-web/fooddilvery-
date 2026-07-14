const fs = require('fs');
let code = fs.readFileSync('src/components/HomePage.tsx', 'utf8');

const oldRegex = /<div className=\{`w-16 h-16 rounded-full overflow-hidden flex items-center justify-center shadow-sm border transition-all duration-300 \$\{[\s\S]*?\}`\}>[\s\S]*?<img[\s\S]*?\/>\s*<\/div>/;

const newHTML = `<div className={\`w-16 h-16 rounded-full overflow-hidden flex items-center justify-center shadow-sm border transition-all duration-300 relative \${
                    isSelected 
                      ? 'bg-orange-50 border-orange-500 shadow-[0_0_20px_rgba(249,115,22,0.4)] scale-110' 
                      : 'bg-white border-gray-100 group-hover:bg-orange-50 group-hover:scale-105 group-hover:shadow-[0_0_15px_rgba(249,115,22,0.2)] group-hover:border-orange-200'
                  }\`}>
                    {isSelected && <div className="absolute inset-0 bg-orange-500/30 blur-md rounded-full animate-pulse z-0" />}
                    <img 
                      src={cat.image} 
                      alt={cat.name} 
                      className={\`w-full h-full object-cover mix-blend-multiply transition-transform duration-500 relative z-10 \${isSelected ? 'scale-110' : 'group-hover:scale-110'}\`} 
                    />
                  </div>`;

code = code.replace(oldRegex, newHTML);
fs.writeFileSync('src/components/HomePage.tsx', code, 'utf8');
