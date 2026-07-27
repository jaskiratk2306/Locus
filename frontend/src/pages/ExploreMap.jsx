import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

// Fix for default marker icons in React Leaflet
let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41]
});
L.Marker.prototype.options.icon = DefaultIcon;

const ExploreMap = () => {
  return (
    <div className="h-screen w-full pt-16 relative">
      {/* Search Bar Overlay */}
      <div className="absolute top-20 left-14 z-[400] w-64 bg-white/90 p-2 rounded shadow-lg">
        <input 
          type="text" 
          placeholder="Search location..."
          className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-brand-primary"
        />
      </div>

      <MapContainer 
        center={[21.0000, 78.0000]} 
        zoom={5} 
        scrollWheelZoom={true} 
        style={{ height: '100%', width: '100%', zIndex: 0 }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[21.0000, 78.0000]}>
          <Popup>
            India <br /> Welcome to Locus Reference.
          </Popup>
        </Marker>
      </MapContainer>
      
      {/* Bottom Buttons */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-4 z-[400]">
          <button className="px-6 py-3 bg-brand-primary text-brand-bg rounded-full shadow-lg hover:bg-brand-secondary transition">Directions</button>
          <button className="px-6 py-3 bg-brand-primary text-brand-bg rounded-full shadow-lg hover:bg-brand-secondary transition">Current Location</button>
      </div>
    </div>
  );
};

export default ExploreMap;
