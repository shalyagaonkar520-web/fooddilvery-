import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Home, Search, ShoppingBag, User, MapPin } from 'lucide-react';
import { useCartStore } from '../store/cartStore';

export default function BottomNav() {
  const location = useLocation();
  const { items } = useCartStore();
  const navigate = useNavigate();

  // Hide bottom nav on specific screens like login or admin
  const hiddenRoutes = ['/', '/admin', '/delivery', '/checkout', '/cart'];
  if (hiddenRoutes.includes(location.pathname)) return null;

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed bottom-0 left-0 w-full z-[100] bg-white border-t border-gray-200 pb-safe md:hidden">
      <div className="flex items-center justify-around py-3 px-2 shadow-[0_-4px_20px_rgba(0,0,0,0.05)]">
        <Link to="/home" className={`flex flex-col items-center gap-1 transition-colors ${isActive('/home') ? 'text-orange-500' : 'text-gray-400 hover:text-gray-900'}`}>
          <Home className={`w-6 h-6 ${isActive('/home') ? 'fill-orange-500/20' : ''}`} />
          <span className="text-[9px] font-bold">Home</span>
        </Link>
        
        <div onClick={() => { 
          if(location.pathname !== '/home') {
             navigate('/home?search=true');
          } else {
             window.scrollTo({ top: 0, behavior: 'smooth' });
             const input = document.getElementById('home-search-input');
             if (input) input.focus();
          }
        }} className={`flex flex-col items-center gap-1 transition-colors cursor-pointer ${(location.pathname === '/home' && new URLSearchParams(location.search).get('search') === 'true') ? 'text-orange-500' : 'text-gray-400 hover:text-gray-900'}`}>
          <Search className="w-6 h-6" />
          <span className="text-[9px] font-bold">Search</span>
        </div>

        <Link to="/orders" className={`flex flex-col items-center gap-1 transition-colors relative ${isActive('/orders') ? 'text-orange-500' : 'text-gray-400 hover:text-gray-900'}`}>
          <div className="relative">
            <ShoppingBag className={`w-6 h-6 ${isActive('/orders') ? 'fill-orange-500/20' : ''}`} />
          </div>
          <span className="text-[9px] font-bold">Orders</span>
        </Link>

        <Link to="/track" className={`flex flex-col items-center gap-1 transition-colors ${location.pathname.startsWith('/track') ? 'text-orange-500' : 'text-gray-400 hover:text-gray-900'}`}>
          <MapPin className={`w-6 h-6 ${location.pathname.startsWith('/track') ? 'fill-orange-500/20' : ''}`} />
          <span className="text-[9px] font-bold">Track</span>
        </Link>

        <Link to="/profile" className={`flex flex-col items-center gap-1 transition-colors ${isActive('/profile') ? 'text-orange-500' : 'text-gray-400 hover:text-gray-900'}`}>
          <User className={`w-6 h-6 ${isActive('/profile') ? 'fill-orange-500/20' : ''}`} />
          <span className="text-[9px] font-bold">Profile</span>
        </Link>
      </div>
    </nav>
  );
}
