const fs = require('fs');

// Fix DeliveryDashboard.tsx
let dash = fs.readFileSync('src/components/DeliveryDashboard.tsx', 'utf8');
dash = dash.replace(/o\.status/g, "(o as any).status");
fs.writeFileSync('src/components/DeliveryDashboard.tsx', dash);

// Fix LocationPicker.tsx
let loc = fs.readFileSync('src/components/LocationPicker.tsx', 'utf8');
// remove useCityStore entirely
loc = loc.replace("import { useCityStore } from '../store/cityStore';", "");
loc = loc.replace("const { selectedCity } = useCityStore();", "");

loc = loc.replace("const { isLocationPickerOpen, closeLocationPicker, updateLocation, deliveryLocation } = useLocationStore();", "const { isLocationPickerOpen, closeLocationPicker, setDeliveryLocation, deliveryLocation, restaurantLocation, maxDeliveryRange } = useLocationStore();");

// Distance calculation
loc = loc.replace("const dist = selectedCity ? haversineDistance(selectedCity.lat, selectedCity.lng, lat, lon) : 0;", "const dist = haversineDistance(restaurantLocation.lat, restaurantLocation.lng, lat, lon);");
loc = loc.replace("const dist = selectedCity ? haversineDistance(selectedCity.lat, selectedCity.lng, latitude, longitude) : 0;", "const dist = haversineDistance(restaurantLocation.lat, restaurantLocation.lng, latitude, longitude);");

// updateLocation -> setDeliveryLocation
loc = loc.replace("updateLocation(lat, lon, result.display_name, parseFloat(dist.toFixed(1)));", "setDeliveryLocation({ lat, lng: lon, address: result.display_name, distance: parseFloat(dist.toFixed(1)), isDeliverable: dist <= maxDeliveryRange });");
loc = loc.replace("updateLocation(latitude, longitude, address, parseFloat(dist.toFixed(1)));", "setDeliveryLocation({ lat: latitude, lng: longitude, address, distance: parseFloat(dist.toFixed(1)), isDeliverable: dist <= maxDeliveryRange });");

fs.writeFileSync('src/components/LocationPicker.tsx', loc);

