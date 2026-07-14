const fs = require('fs');

const path = './src/components/BottomNav.tsx';
let content = fs.readFileSync(path, 'utf8');

const targetStr = `<Link to="/checkout" className={\`flex flex-col items-center gap-1 transition-colors relative \${isActive('/checkout') ? 'text-orange-500' : 'text-gray-400 hover:text-gray-900'}\`}>
          <div className="relative">
            <ShoppingBag className={\`w-6 h-6 \${isActive('/checkout') ? 'fill-orange-500/20' : ''}\`} />
            {items.length > 0 && (
              <span className="absolute -top-1 -right-1.5 w-4 h-4 bg-orange-500 text-white text-[10px] font-black flex items-center justify-center rounded-full shadow-sm">
                {items.length}
              </span>
            )}
          </div>
          <span className="text-[10px] font-bold">Cart</span>
        </Link>`;

const replacementStr = `<Link to="/orders" className={\`flex flex-col items-center gap-1 transition-colors relative \${isActive('/orders') ? 'text-orange-500' : 'text-gray-400 hover:text-gray-900'}\`}>
          <div className="relative">
            <ShoppingBag className={\`w-6 h-6 \${isActive('/orders') ? 'fill-orange-500/20' : ''}\`} />
          </div>
          <span className="text-[10px] font-bold">Orders</span>
        </Link>`;

content = content.replace(targetStr, replacementStr);
fs.writeFileSync(path, content, 'utf8');
console.log('Fixed bottom nav orders');
