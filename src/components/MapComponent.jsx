import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import L from 'leaflet';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSchool, faChurch, faTimes, faHospital, faUtensils, faShoppingCart, faGlassCheers } from '@fortawesome/free-solid-svg-icons';
import PropertyCard from './PropertyCard'; // Import your PropertyCard component
import StaticMap from './StaticMap'; // Import your StaticMap component

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
      <div style={{ width: '100%', height: '462px', borderRadius: '15px', overflow: 'hidden', marginTop: '13px', position: 'relative' }}>
        {showCrimeRate && (
          <img src={`${process.env.PUBLIC_URL}/crime rate.png`} alt="Crime Rate" style={{ position: 'absolute', bottom: '20px', right: '10px', zIndex: '1000', width: '170px', height: '120px' }} />
        )}
       
        <div className="property-card-overlay">
          {selectedProperty && <PropertyCard property={selectedProperty} />}
        </div>
      
        <MapContainer center={[latitude, longitude]} zoom={13} style={{ width: '100%', height: '100%', position: 'relative' }}>
          <StaticMap latitude={latitude} longitude={longitude} onPriceClick={handlePriceClick} />
        </MapContainer>
      </div>

       
      <div className="buttons-container" style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
        <div className="filter-container" style={{ position: 'absolute', top: '10px', left: '60px', backgroundColor: 'white', padding: '8px', borderRadius: '50px', zIndex: '1000', fontSize: '12px' }}>
          <label>
            <input type="checkbox" checked={showCrimeRate} onChange={() => setShowCrimeRate(!showCrimeRate)} />
            Show Crime Rate
          </label>
        </div>

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
                  <div style={{ marginLeft: '6px' }}>{amenity.charAt(0).toUpperCase() + amenity.slice(1)}</div>
                </label>
              ))}
            </div>
          )}
        </div>

        <div className="school-icon" style={{ position: 'absolute', top: '12px', left: '370px', zIndex: '1000', fontSize: '12px' }}>
          <div style={{ display: 'flex', alignItems: 'center', backgroundColor: 'white', padding: '10px', borderRadius: '50px', marginTop: '5px', fontSize: '12px' }}>
            <FontAwesomeIcon icon={faSchool} style={{ marginLeft: '6px', fontSize: '12px' }} />
            <div style={{ marginLeft: '6px' }}>Schools</div>
            <FontAwesomeIcon icon={faTimes} style={{ marginLeft: '6px', fontSize: '12px' }} />
          </div>
        </div>

        <div className="church-icon" style={{ position: 'absolute', top: '12px', left: '490px', zIndex: '1000', fontSize: '12px' }}>
          <div style={{ display: 'flex', alignItems: 'center', backgroundColor: 'white', padding: '10px', borderRadius: '50px', marginTop: '5px', fontSize: '12px' }}>
            <FontAwesomeIcon icon={faChurch} style={{ marginLeft: '6px', fontSize: '12px', color: 'red' }} />
            <div style={{ marginLeft: '6px', color: 'red' }}>Churches</div>
            <FontAwesomeIcon icon={faTimes} style={{ marginLeft: '6px', fontSize: '12px' }} />
          </div>
        </div>
      </div>

      {isSocialAmenitiesOpen && (
        <div className="social-amenities-modal" style={{ position: 'absolute', top: '50px', left: '230px', zIndex: '1000', backgroundColor: 'white', padding: '10px', borderRadius: '10px', fontSize: '12px' }}>
          <h3>Social Amenities</h3>
          {Object.entries(socialAmenities).map(([amenity, isChecked]) => (
            <label key={amenity} style={{ margin: '5px 0', fontSize: '12px' }}>
              <input type="checkbox" checked={isChecked} onChange={() => handleCheckboxChange(amenity)} />
              {amenity.charAt(0).toUpperCase() + amenity.slice(1)}
            </label>
          ))}
        </div>
      )}
    </div>
  );
};

export default MapComponent;
