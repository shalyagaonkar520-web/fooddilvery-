const fs = require('fs');
let content = fs.readFileSync('src/components/HomePage.tsx', 'utf8');

// Add scroll state
content = content.replace(
  'const [placeholderIndex, setPlaceholderIndex] = useState(0);',
  `const [placeholderIndex, setPlaceholderIndex] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);`
);

// Update button visibility
content = content.replace(
  '<button \n          onClick={() => window.scrollTo({ top: 0, behavior: \'smooth\' })}\n          className="fixed bottom-28 right-6 z-50 w-12 h-12 bg-white rounded-full shadow-xl border border-gray-100 flex items-center justify-center text-gray-900 hover:bg-gray-50 transition-all active:scale-95"\n        >\n          <ChevronRight className="w-6 h-6 -rotate-90" />\n        </button>',
  `{showScrollTop && (
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-28 right-6 z-50 w-12 h-12 bg-white rounded-full shadow-xl border border-gray-100 flex items-center justify-center text-gray-900 hover:bg-gray-50 transition-all active:scale-95"
        >
          <ChevronRight className="w-6 h-6 -rotate-90" />
        </button>
        )}`
);

fs.writeFileSync('src/components/HomePage.tsx', content, 'utf8');
