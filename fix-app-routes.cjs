const fs = require('fs');

const path = './src/App.tsx';
let content = fs.readFileSync(path, 'utf8');

// Replace imports
content = content.replace("import LandingPage from './components/LandingPage';", "import AuthPage from './components/AuthPage';\nimport HomePage from './components/HomePage';");
content = content.replace("const FeedbackPage = lazy(() => import('./components/FeedbackPage'));", "");
content = content.replace("const AboutFounder = lazy(() => import('./components/AboutFounder'));", "");
content = content.replace("const CelebrationHub = lazy(() => import('./components/CelebrationHub'));", "");
content = content.replace("const CelebrationDesign = lazy(() => import('./components/CelebrationDesign'));", "");
content = content.replace("const LuckyWheelPage = lazy(() => import('./components/LuckyWheelPage'));", "");
content = content.replace("import CategoryPage from './components/CategoryPage';", "");

// Replace routes
const routesStart = content.indexOf('<Routes>');
const routesEnd = content.indexOf('</Routes>') + '</Routes>'.length;

const newRoutes = `<Routes>
                    <Route path="/" element={<AuthPage />} />
                    <Route path="/home" element={<HomePage />} />
                    <Route path="/cart" element={<Navigate to="/checkout" replace />} />
                    <Route path="/checkout" element={<Checkout />} />
                    <Route path="/profile" element={<ProfilePage />} />
                    <Route path="/track/:orderId" element={<TrackingPage />} />
                    <Route path="/delivery" element={<DeliveryDashboard />} />
                    <Route path="/bulk" element={<BulkOrderPage />} />
                    <Route path="/admin" element={<AdminPage />} />
                    <Route path="/orders" element={<OrdersPage />} />
                  </Routes>`;

content = content.substring(0, routesStart) + newRoutes + content.substring(routesEnd);

fs.writeFileSync(path, content, 'utf8');
console.log('Fixed App.tsx routes');
