const fs = require('fs');
let css = fs.readFileSync('src/index.css', 'utf8');

// We will replace the `@theme { ... }` block entirely.
const themeBlock = `@theme {
  --font-sans: "Inter", ui-sans-serif, system-ui, sans-serif;
  --font-heading: "Outfit", "Inter", sans-serif;
  
  /* Overriding Tailwind colors to achieve the premium restaurant feel */
  --color-orange-50: #FAF5EB;
  --color-orange-100: #F2E8D3;
  --color-orange-200: #E6D2AD;
  --color-orange-300: #D8B781;
  --color-orange-400: #CDA45E;
  --color-orange-500: #C89B3C; /* Accent Gold */
  --color-orange-600: #A67C2D; /* Dark Gold */
  --color-orange-700: #8C6826;
  --color-orange-900: #594318;
  
  --color-gray-50: #FAF8F5;    /* Background */
  --color-gray-100: #F3F1EC;   /* Slightly darker background for borders/hover */
  --color-gray-200: #E5E2DC;
  --color-gray-300: #D4D0C8;
  --color-gray-400: #9CA3AF;
  --color-gray-500: #6B7280;   /* Secondary Text */
  --color-gray-600: #4B5563;
  --color-gray-700: #374151;
  --color-gray-800: #292929;
  --color-gray-900: #111111;   /* Primary Text */

  --color-slate-900: #111111;  /* Dark headers */

  --color-green-500: #2E7D32;  /* Success */
  --color-green-600: #1B5E20;

  /* Premium Light Theme Palette */
  --color-brand: #C89B3C; 
  --color-brand-hover: #A67C2D;
  --color-brand-glow: rgba(200, 155, 60, 0.1);
  
  --color-gold: #C89B3C; 
  --color-gold-soft: #E6D2AD; 
  
  --color-matte-black: #FAF8F5; 
  --color-dark-surface: #FFFFFF; 
  
  --color-text-main: #111111; 
  --color-text-muted: #6B7280; 
}`;

css = css.replace(/@theme \{[\s\S]*?\}/, themeBlock);

// Also replace linear gradients with hardcoded colors
css = css.replace(/background: #f97316;/g, 'background: #C89B3C;');

fs.writeFileSync('src/index.css', css);

