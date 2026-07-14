const fs = require('fs');
let code = fs.readFileSync('src/components/TrackingPage.tsx', 'utf8');

const orderIdHook = `  // 1. Real-time Listener for the Order document
  useEffect(() => {
    if (!orderId) {
      setLoading(false);
      return;
    }
    const orderDocRef = doc(db, 'orders', orderId);
    const unsubscribeOrder = onSnapshot(orderDocRef, (docSnap) => {
      if (docSnap.exists()) {
        const orderData = docSnap.data();
        setOrder({ id: docSnap.id, ...orderData });
      } else {
        setOrder(null);
      }
      setLoading(false);
    }, (error) => {
      console.error("Error listening to order:", error);
      setLoading(false);
    });
    return () => unsubscribeOrder();
  }, [orderId, navigate]);`;

code = code.replace(/  \/\/ 1\. Real-time Listener for the Order document\s*useEffect\(\(\) => \{\s*if \(\!orderId\) return;\s*const orderDocRef = doc\(db, 'orders', orderId\);\s*const unsubscribeOrder = onSnapshot\(orderDocRef, \(docSnap\) => \{\s*if \(docSnap\.exists\(\)\) \{\s*const orderData = docSnap\.data\(\);\s*setOrder\(\{ id: docSnap\.id, \.\.\.orderData \}\);\s*\} else \{\s*setOrder\(null\);\s*\}\s*\}\);\s*return \(\) => unsubscribeOrder\(\);\s*\}, \[orderId, navigate\]\);/, orderIdHook);

const loadingRender = `  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-orange-500"></div>
      </div>
    );
  }

  if (!order) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4">
        <div className="w-24 h-24 bg-orange-100 rounded-full flex items-center justify-center mb-6">
          <MapPin className="w-12 h-12 text-orange-500" />
        </div>
        <h2 className="text-2xl font-black text-gray-900 mb-2">No Active Tracking</h2>
        <p className="text-gray-500 text-center mb-8">You don't have any active orders to track right now.</p>
        <button 
          onClick={() => navigate('/home')}
          className="bg-orange-500 text-white px-8 py-4 rounded-xl font-bold uppercase tracking-wider text-sm shadow-[0_4px_20px_rgba(249,115,22,0.3)] hover:scale-105 transition-transform"
        >
          Order Now
        </button>
      </div>
    );
  }`;

code = code.replace(/  if \(\!order\) \{\s*return \(\s*<div className="min-h-screen bg-gray-50 flex items-center justify-center">\s*<div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-orange-500"><\/div>\s*<\/div>\s*\);\s*\}/, loadingRender);

fs.writeFileSync('src/components/TrackingPage.tsx', code, 'utf8');
