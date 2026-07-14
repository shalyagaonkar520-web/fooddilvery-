const fs = require('fs');

const path = './src/components/Checkout.tsx';
let content = fs.readFileSync(path, 'utf8');

// Remove the useEffect that forces COD/Online
const lines = content.split('\n');
let newLines = [];
let skip = false;

for (let i = 0; i < lines.length; i++) {
  if (lines[i].includes('// Force COD when within 5 km, force online when beyond')) {
    skip = true;
  }
  if (skip && lines[i].includes('  }, [deliveryLocation]);')) {
    skip = false;
    continue;
  }
  if (!skip) {
    newLines.push(lines[i]);
  }
}

content = newLines.join('\n');

content = content.replace("setPaymentMethod(dist > 5 ? 'online' : 'cod');", "");

fs.writeFileSync(path, content, 'utf8');
console.log('Fixed checkout effect');
