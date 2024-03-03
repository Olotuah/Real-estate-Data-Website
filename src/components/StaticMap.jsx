import React from 'react';
import { MapContainer, TileLayer, ImageOverlay, Marker, useMap } from 'react-leaflet';
import L from 'leaflet';

const StaticMap = ({ latitude, longitude, onPriceClick }) => {
  const map = useMap(); // Access the Leaflet map instance

  // Convert geographical coordinates to pixel coordinates
  const getPixelPosition = (lat, lng) => {
    const point = map.latLngToContainerPoint([lat, lng]);
    return { x: point.x, y: point.y };
  };

  // Define image bounds
  const imageBounds = [
    [latitude - 0.03, longitude - 0.06],
    [latitude + 0.02, longitude + 0.03],
  ];

  // Custom red marker icons
  const redIcon1 = new L.Icon({
    iconUrl: `${process.env.PUBLIC_URL}/school.png`,
    iconSize: [45, 51],
    iconAnchor: [12, 41],
  });

  const redIcon2 = new L.Icon({
    iconUrl: `${process.env.PUBLIC_URL}/school.png`,
    iconSize: [45, 51],
    iconAnchor: [12, 41],
  });

  const redIcon3 = new L.Icon({
    iconUrl: `${process.env.PUBLIC_URL}/school.png`,
    iconSize: [45, 51],
    iconAnchor: [12, 41],
  });

  // Custom black marker icons
  const blackIcon1 = new L.Icon({
    iconUrl: `${process.env.PUBLIC_URL}/church.png`,
    iconSize: [45, 51],
    iconAnchor: [12, 41],
  });

  const blackIcon2 = new L.Icon({
    iconUrl: `${process.env.PUBLIC_URL}/church.png`,
    iconSize: [45, 51],
    iconAnchor: [12, 41],
  });

  const blackIcon3 = new L.Icon({
    iconUrl: `${process.env.PUBLIC_URL}/church.png`,
    iconSize: [45, 51],
    iconAnchor: [12, 41],
  });

  const blackIcon4 = new L.Icon({
    iconUrl: `${process.env.PUBLIC_URL}/church.png`,
    iconSize: [45, 51],
    iconAnchor: [12, 41],
  });

  const blackIcon5 = new L.Icon({
    iconUrl: `${process.env.PUBLIC_URL}/church.png`,
    iconSize: [45, 51],
    iconAnchor: [12, 41],
  });

  const blackIcon6 = new L.Icon({
    iconUrl: `${process.env.PUBLIC_URL}/church.png`,
    iconSize: [45, 51],
    iconAnchor: [12, 41],
  });

  // Define property prices with their locations
  const propertyPrices = [
    { id: 1, price: 'N350,000', lat: latitude - 0.005, lng: longitude - 0.01 },
    { id: 2, price: 'N400,000', lat: latitude + 0.01, lng: longitude - 0.05 },
    { id: 3, price: 'N500,000', lat: latitude - 0.02, lng: longitude - 0.034 },
    // Add more property prices with distinct latitude and longitude values
    { id: 4, price: 'N550,000', lat: latitude - 0.01, lng: longitude + 0.02 },
    { id: 5, price: 'N600,000', lat: latitude + 0.015, lng: longitude - 0.03 },
    // Add as many properties as needed, ensuring distinct positions
  ];

  // Function to handle click event on price markers
  const handlePriceClick = (property) => {
    onPriceClick(property);
  };

  return (
    <MapContainer center={[latitude, longitude]} zoom={13} style={{ width: '100%', height: '100%', position: 'relative' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />

      <ImageOverlay bounds={imageBounds} url={process.env.PUBLIC_URL + '/Frame1.png'} />

      {/* Red Markers */}
      <Marker position={[latitude - 0.005, longitude - 0.01]} icon={redIcon1} />
      <Marker position={[latitude + 0.01, longitude - 0.05]} icon={redIcon2} />
      <Marker position={[latitude - 0.02, longitude - 0.034]} icon={redIcon3} />

      {/* Black Markers */}
      <Marker position={[latitude + 0.005, longitude + 0.01]} icon={blackIcon1} />
      <Marker position={[latitude - 0.008, longitude - 0.05]} icon={blackIcon2} />
      <Marker position={[latitude - 0.027, longitude - 0.02]} icon={blackIcon3} />
      <Marker position={[latitude + 0.012, longitude - 0.03]} icon={blackIcon4} />
      <Marker position={[latitude - 0.02, longitude + 0.002]} icon={blackIcon5} />
      <Marker position={[latitude - 0.007, longitude - 0.02]} icon={blackIcon6} />

      {/* Render property prices on the map */}
      {propertyPrices.map((property, index) => {
        const { x, y } = getPixelPosition(property.lat, property.lng);
        return (
          <div key={index} className="price" style={{ position: 'absolute', left: x, top: y, zIndex: 1000, cursor: 'pointer', backgroundColor: 'white', borderRadius: '15px', padding: '5px', border: '2px solid #ccc' }} onClick={() => handlePriceClick(property)}>
            {property.price}
          </div>
        );
      })}
    </MapContainer>
  );
};

export default StaticMap;
