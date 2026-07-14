const fs = require('fs');
let code = fs.readFileSync('src/components/HomePage.tsx', 'utf8');

const searchEffect = `  useEffect(() => {
    if (new URLSearchParams(window.location.search).get('search') === 'true') {
      setTimeout(() => {
        const input = document.getElementById('home-search-input');
        if (input) {
          input.focus();
        }
      }, 100); // small delay to ensure render
    }
  }, []);`;

code = code.replace(/  const handleFilterToggle/, searchEffect + '\n\n  const handleFilterToggle');

code = code.replace(/<input\s*type="text"\s*value=\{searchQuery\}/, '<input\n                id="home-search-input"\n                type="text"\n                value={searchQuery}');

fs.writeFileSync('src/components/HomePage.tsx', code, 'utf8');
