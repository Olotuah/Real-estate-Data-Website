import React from 'react';
import { FaBed, FaBath, FaCheckCircle, FaEye } from 'react-icons/fa';
import { IoIosBusiness } from 'react-icons/io';
import maskGroupImage from '../Mask group.png';

const PropertyCard = ({ property, onSelect, isSelected }) => {
  const realEstateCompany = 'From PropertyPro'; // Define the real estate company name

  const handlePropertyClick = () => {
    onSelect(property.id); // Pass the property ID to the onSelect function
  };

  // Ensure property object is valid before accessing its properties
  if (!property || !property.images || property.images.length === 0) {
    return null; // Render nothing if property or images are undefined or empty
  }

  // Extracting the first image URL from the images array
  const imageUrl = property.images[0];

  return (
    <div
      className={`property-listing-item ${isSelected ? 'selected' : ''}`}
      style={{
        maxWidth: '330px',
        margin: '60px auto',
        marginBottom: '-50px',
        marginTop: '60px',
        position: 'relative',
        border: '1px solid #blue',
        borderRadius: '20px',
        cursor: 'pointer', // Add cursor pointer for better interaction
      }}
      onClick={handlePropertyClick}
    >
      <div className="image-container">
        <img src={imageUrl} alt="Property" style={{ width: '100%' }} />
      </div>
      <div className="property-details" style={{ padding: '10px', fontFamily: 'Manrope, sans-serif', fontSize: '14px' }}>
        <p style={{ marginBottom: '8px' }}>{property.description}</p>
        <div className="property-price" style={{ marginTop: '-1px', fontWeight: 'bold', fontSize: '1rem' }}>
          {property.currency} {property.price}
        </div>
        <h2 style={{ fontSize: '1.2rem', marginBottom: '10px', fontSize: '1rem', marginTop: '7px', fontWeight: 500 }}>{property.address}</h2>
        <div className="property-icons" style={{ display: 'flex', justifyContent: 'flex-start', marginBottom: '29px' }}>
          <div className="icon" style={{ marginRight: '14px', fontSize: '0.8rem', display: 'flex', alignItems: 'center' }}>
            <FaBed />
            <span style={{ marginLeft: '5px' }}>{property.bedrooms} Bed</span>
          </div>
          <div className="icon" style={{ fontSize: '0.8rem', display: 'flex', alignItems: 'center' }}>
            <FaBath />
            <span style={{ marginLeft: '5px', marginRight: '10px' }}>{property.bathrooms} Bath</span>
          </div>
          <div className="icon" style={{ fontSize: '0.8rem', display: 'flex', alignItems: 'center' }}>
            <FaEye />
            <span style={{ marginLeft: '5px' }}>{property.views} views</span>
          </div>
        </div>
        <div className="bottom-icons" style={{ position: 'absolute', bottom: '10px', left: '10px', right: '10px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
          <div className="left-icons" style={{ display: 'flex', alignItems: 'flex-end' }}>
            <div className="icon" style={{ marginRight: '5px' }}>
              <img
                src={maskGroupImage}
                alt="Mask Group"
                style={{ width: '1.2rem', height: '1.2rem' }}
              />
            </div>
            <div className="real-estate-company" style={{ color: '#555', fontSize: '0.8rem', fontWeight: "bold" }}>
              {realEstateCompany}
            </div>
          </div>
          <div className="right-icons" style={{ display: 'flex', alignItems: 'flex-end' }}>
            <div className="icon" style={{ marginRight: '15px', fontSize: '0.8rem' }}>
              <FaCheckCircle style={{ color: property.verified ? '#4CAF50' : '#ccc' }} />
              <span style={{ marginLeft: '5px' }}>Verified</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
