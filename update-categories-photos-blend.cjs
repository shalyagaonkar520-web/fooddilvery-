const fs = require('fs');
let code = fs.readFileSync('src/components/HomePage.tsx', 'utf8');

const oldHTMLRegex = /<img\s+src=\{cat\.image\}[\s\S]*?\/>/;
const newHTML = `<img 
                      src={cat.image} 
                      alt={cat.name} 
                      className={\`w-full h-full object-cover mix-blend-multiply transition-transform duration-500 \${isSelected ? 'scale-110' : 'group-hover:scale-110'}\`} 
                    />`;

code = code.replace(oldHTMLRegex, newHTML);
fs.writeFileSync('src/components/HomePage.tsx', code, 'utf8');
