const fs = require('fs');

const path = './src/components/Checkout.tsx';
let content = fs.readFileSync(path, 'utf8');

// Default to online
content = content.replace("const [paymentMethod, setPaymentMethod] = useState<'online' | 'cod'>('cod');", "const [paymentMethod, setPaymentMethod] = useState<'online' | 'cod'>('online');");

// Remove validations that restrict COD/Online by distance
content = content.replace("if (distanceKm > 5 && paymentMethod === 'cod')  { toast.error('COD not available beyond 5km. Please pay online.'); return; }", "");
content = content.replace("if (distanceKm <= 5 && paymentMethod === 'online') { toast.error('Online payment is only for deliveries above 5km.'); return; }", "");

fs.writeFileSync(path, content, 'utf8');
console.log('Fixed checkout payment');
