const fs = require('fs');
let code = fs.readFileSync('src/components/BottomNav.tsx', 'utf8');

const searchLink = `        <div onClick={() => { 
          if(location.pathname !== '/home') {
             navigate('/home?search=true');
          } else {
             window.scrollTo({ top: 0, behavior: 'smooth' });
             const input = document.getElementById('home-search-input');
             if (input) input.focus();
          }
        }} className={\`flex flex-col items-center gap-1 transition-colors cursor-pointer \${(location.pathname === '/home' && new URLSearchParams(location.search).get('search') === 'true') ? 'text-orange-500' : 'text-gray-400 hover:text-gray-900'}\`}>
          <Search className="w-6 h-6" />
          <span className="text-[9px] font-bold">Search</span>
        </div>`;

code = code.replace(/<div onClick=\{.*?\).*?navigate\('\/home'\).*?<Search className="w-6 h-6" \/>[\s\S]*?<\/div>/, searchLink);

const trackLink = `        <Link to="/track" className={\`flex flex-col items-center gap-1 transition-colors \${location.pathname.startsWith('/track') ? 'text-orange-500' : 'text-gray-400 hover:text-gray-900'}\`}>
          <MapPin className={\`w-6 h-6 \${location.pathname.startsWith('/track') ? 'fill-orange-500/20' : ''}\`} />
          <span className="text-[9px] font-bold">Track</span>
        </Link>`;

code = code.replace(/<Link to="\/orders".*?MapPin className=\{.*?\} \/>.*?<\/Link>/, trackLink);

fs.writeFileSync('src/components/BottomNav.tsx', code, 'utf8');
