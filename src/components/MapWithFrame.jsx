// MapWithFrame.jsx

import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import '../leaflet.css';
import '../index.css'; // Import your global CSS for styling

const MapWithFrame = () => {
  const latitude = 51.505, longitude = -0.09; // Replace with your desired coordinates

  return (
    <div className="map-container">
      <div className="frame">
        <h2>Pricing Information</h2>
        {/* Add more HTML structure for pricing details */}
        <div className="pricing-details">
          {/* Your pricing details here */}
        </div>
      </div>

      <MapContainer center={[latitude, longitude]} zoom={13} style={{ flex: 1 }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />

        <Marker position={[latitude, longitude]}>
          <Popup>
            A marker with a popup.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

 
