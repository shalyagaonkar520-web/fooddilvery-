const fs = require('fs');

const path = './src/components/Checkout.tsx';
let content = fs.readFileSync(path, 'utf8');

// Replace WhatsApp redirect with navigate
const targetStr = `      toast.success('🎉 Order placed! Opening WhatsApp...');

      // Redirect to WhatsApp using a safer method for mobile browsers
      const link = document.createElement('a');
      link.href = waUrl;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      // Fallback redirect just in case
      setTimeout(() => {
        window.location.href = waUrl;
      }, 500);`;

const replacementStr = `      toast.success('🎉 Order placed successfully!');
      setTimeout(() => navigate('/track/' + orderId), 500);`;

content = content.replace(targetStr, replacementStr);

fs.writeFileSync(path, content, 'utf8');
console.log('Fixed checkout redirect');
