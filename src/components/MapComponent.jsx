import React, { useState } from 'react';
import { MapContainer, TileLayer, ImageOverlay, Marker, useMap } from 'react-leaflet';
import L from 'leaflet';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSchool, faChurch, faTimes, faHospital, faUtensils, faShoppingCart, faGlassCheers } from '@fortawesome/free-solid-svg-icons';
import PropertyCard from './PropertyCard'; // Import your PropertyCard component

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
    { price: 'N350,000', lat: latitude - 0.005, lng: longitude - 0.01 },
    { price: 'N400,000', lat: latitude + 0.01, lng: longitude - 0.05 },
    { price: 'N500,000', lat: latitude - 0.02, lng: longitude - 0.034 },
    // Add more property prices with distinct latitude and longitude values
    { price: 'N550,000', lat: latitude - 0.01, lng: longitude + 0.02 },
    { price: 'N600,000', lat: latitude + 0.015, lng: longitude - 0.03 },
    // Add as many properties as needed, ensuring distinct positions
  ];

  return (
    <MapContainer center={[latitude, longitude]} zoom={13} style={{ width: '100%', height: '100%', position: 'relative' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />

      <ImageOverlay bounds={imageBounds} url={process.env.PUBLIC_URL + '/Frame1.png'} />

      {/* Red Markers */}
      <Marker position={[latitude -0.005 , longitude -0.01]} icon={redIcon1} />
      <Marker position={[latitude + 0.01, longitude - 0.05]} icon={redIcon2} />
      <Marker position={[latitude - 0.02, longitude - 0.034]} icon={redIcon3} />

      {/* Black Markers */}
      <Marker position={[latitude +0.005, longitude + 0.01]} icon={blackIcon1} />
      <Marker position={[latitude - 0.008, longitude - 0.05]} icon={blackIcon2} />
      <Marker position={[latitude - 0.027, longitude - 0.02]} icon={blackIcon3} />
      <Marker position={[latitude + 0.012, longitude - 0.03]} icon={blackIcon4} />
      <Marker position={[latitude - 0.02, longitude + 0.002]} icon={blackIcon5} />
      <Marker position={[latitude - 0.007, longitude - 0.02]} icon={blackIcon6} />

       {/* Render property prices on the map */}
      {propertyPrices.map((property, index) => {
        const { x, y } = getPixelPosition(property.lat, property.lng);
        return (
          <div key={index} className="price" style={{ position: 'absolute', left: x, top: y, zIndex: 1000, cursor: 'pointer', backgroundColor: 'white', borderRadius: '15px', padding: '5px', border: '2px solid #ccc'  }} onClick={() => onPriceClick(property)}>
            {property.price}
          </div>
        );
      })}
    </MapContainer>
  );
};



const MapComponent = ({ showPropertyListing, togglePropertyListing }) => {
  const latitude = 6.5765;
  const longitude = 3.3431;

  const [selectedProperty, setSelectedProperty] = useState(null);
  const [showCrimeRate, setShowCrimeRate] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isSocialAmenitiesOpen, setSocialAmenitiesOpen] = useState(false);
  const [socialAmenities, setSocialAmenities] = useState({
    school: false,
    church: false,
    hospital: false,
    restaurant: false,
    shopping: false,
    bars: false,
  });

  const getAmenityIcon = (amenity) => {
    switch (amenity) {
      case 'school':
        return faSchool;
      case 'church':
        return faChurch;
      case 'hospital':
        return faHospital;
      case 'restaurant':
        return faUtensils;
      case 'shopping':
        return faShoppingCart;
      case 'bars':
        return faGlassCheers;      // Add more cases as needed
      default:
        return null;
    }
  };

  const handlePriceClick = (property) => {
    setSelectedProperty(property);
  };

  const handleCheckboxChange = (amenity) => {
    setSocialAmenities((prevAmenities) => ({
      ...prevAmenities,
      [amenity]: !prevAmenities[amenity],
    }));
  };

  return (
    <div style={{ position: 'relative' }}>
      {/* Your StaticMap component */}
      <div style={{ width: '100%', height: '462px', borderRadius: '15px', overflow: 'hidden', marginTop: '13px', position: 'relative' }}>
        {/* Conditionally render the crime rate image */}
        {showCrimeRate && (
          <img src={`${process.env.PUBLIC_URL}/crime rate.png`} alt="Crime Rate" style={{ position: 'absolute', bottom: '20px', right: '10px', zIndex: '1000', width: '170px', height: '120px' }} />
        )}
        <MapContainer center={[latitude, longitude]} zoom={13} style={{ width: '100%', height: '100%', position: 'relative' }}>
          <StaticMap latitude={latitude} longitude={longitude} onPriceClick={handlePriceClick} />
        </MapContainer>
      </div>

      {/* Render selected property card */}
      {selectedProperty && (
        <div className="property-card-overlay">
          <PropertyCard property={selectedProperty} />
        </div>
      )}

      {/* Filter Container */}
      <div className="filter-container" style={{ position: 'absolute', top: '10px', left: '60px', backgroundColor: 'white', padding: '8px', borderRadius: '50px', zIndex: '1000', fontSize: '12px' }}>
        <label>
          <input type="checkbox" checked={showCrimeRate} onChange={() => setShowCrimeRate(!showCrimeRate)} />
          Show Crime Rate
        </label>
      </div>

      {/* Social Amenities Dropdown */}
      <div className="dropdown-container" style={{ position: 'absolute', top: '12px', left: '210px', zIndex: '1000', fontSize: '12px', display: 'flex', flexDirection: 'column' }}>
        <label style={{ display: 'flex', alignItems: 'center', backgroundColor: 'white', padding: '10px', borderRadius: '50px', fontSize: '12px' }}>
          <div onClick={() => setDropdownOpen(!isDropdownOpen)}>&#9662;</div>
          <span style={{ marginLeft: '5px' }}>Social Amenities</span>
        </label>
        {isDropdownOpen && (
          <div style={{ display: 'flex', flexDirection: 'column', backgroundColor: 'white', padding: '10px', borderRadius: '10px', marginTop: '5px', fontSize: '12px' }}>
            {Object.entries(socialAmenities).map(([amenity, isChecked]) => (
              <label key={amenity} style={{ margin: '5px 0', display: 'flex', alignItems: 'center' }}>
                <input type="checkbox" checked={isChecked} onChange={() => handleCheckboxChange(amenity)} />
                <FontAwesomeIcon icon={getAmenityIcon(amenity)} style={{ marginLeft: '6px', fontSize: '12px' }} />
                <div style={{ marginLeft: '6px' }}>{amenity.charAt(0).toUpperCase() + amenity.slice(1)}</div> {/* Capitalize first letter */}
              </label>
            ))}
          </div>
        )}
      </div>

      {/* School Icon */}
      <div className="school-icon" style={{ position: 'absolute', top: '12px', left: '370px', zIndex: '1000', fontSize: '12px' }}>
        <div style={{ display: 'flex', alignItems: 'center', backgroundColor: 'white', padding: '10px', borderRadius: '50px', marginTop: '5px', fontSize: '12px' }}>
          <FontAwesomeIcon icon={faSchool} style={{ marginLeft: '6px', fontSize: '12px' }} />
          <div style={{ marginLeft: '6px' }}>Schools</div>
          <FontAwesomeIcon icon={faTimes} style={{ marginLeft: '6px', fontSize: '12px' }} />
        </div>
      </div>

      {/* Church Icon */}
      <div className="church-icon" style={{ position: 'absolute', top: '12px', left: '490px', zIndex: '1000', fontSize: '12px' }}>
        <div style={{ display: 'flex', alignItems: 'center', backgroundColor: 'white', padding: '10px', borderRadius: '50px', marginTop: '5px', fontSize: '12px' }}>
          <FontAwesomeIcon icon={faChurch} style={{ marginLeft: '6px', fontSize: '12px', color: 'red' }} />
          <div style={{ marginLeft: '6px', color: 'red' }}>Churches</div>
          <FontAwesomeIcon icon={faTimes} style={{ marginLeft: '6px', fontSize: '12px' }} />
        </div>
      </div>

      {/* Social Amenities Modal */}
      {isSocialAmenitiesOpen && (
        <div className="social-amenities-modal" style={{ position: 'absolute', top: '50px', left: '230px', zIndex: '1000', backgroundColor: 'white', padding: '10px', borderRadius: '10px', fontSize: '12px' }}>
          <h3>Social Amenities</h3>
          {Object.entries(socialAmenities).map(([amenity, isChecked]) => (
            <label key={amenity} style={{ margin: '5px 0', fontSize: '12px' }}>
              <input type="checkbox" checked={isChecked} onChange={() => handleCheckboxChange(amenity)} />
              {amenity.charAt(0).toUpperCase() + amenity.slice(1)} {/* Capitalize first letter */}
            </label>
          ))}
        </div>
      )}
    </div>
  );
};

export default MapComponent;
