const fs = require('fs');

const path = './src/App.tsx';
let content = fs.readFileSync(path, 'utf8');

content = content.replace("const LandingPage = lazy(() => import('./components/LandingPage'));", "const AuthPage = lazy(() => import('./components/AuthPage'));\nconst HomePage = lazy(() => import('./components/HomePage'));");
content = content.replace("const CategoryPage = lazy(() => import('./components/CategoryPage'));", "");

fs.writeFileSync(path, content, 'utf8');
console.log('Fixed lazy imports');
