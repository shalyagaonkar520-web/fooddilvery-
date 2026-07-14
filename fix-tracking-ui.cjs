const fs = require('fs');

const path = './src/components/TrackingPage.tsx';
let content = fs.readFileSync(path, 'utf8');

// Replace standard marker icons with custom ones
content = content.replace(/bg-neutral-900/g, 'bg-gray-100');
content = content.replace(/border-orange-500\/20/g, 'border-gray-200');
content = content.replace(/bg-white\/95/g, 'bg-white');

fs.writeFileSync(path, content, 'utf8');
console.log('Fixed tracking UI');
