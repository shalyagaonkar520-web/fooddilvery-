const fs = require('fs');

const path = './src/components/Checkout.tsx';
let content = fs.readFileSync(path, 'utf8');

// Replace the strict check
content = content.replace(/if \(distanceKm <= 5\).*?return; \}/g, "");
content = content.replace(/if \(distanceKm > 5\).*?return; \}/g, "");

// Also remove opacity-30 and the condition
content = content.replace(/distanceKm <= 5\s*\?\s*'opacity-30 cursor-not-allowed bg-gray-50 border-gray-200 text-gray-500'\s*:\s*/g, "");
content = content.replace(/distanceKm > 5\s*\?\s*'opacity-30 cursor-not-allowed bg-gray-50 border-gray-200 text-gray-500'\s*:\s*/g, "");

fs.writeFileSync(path, content, 'utf8');
console.log('Fixed checkout onclick');
