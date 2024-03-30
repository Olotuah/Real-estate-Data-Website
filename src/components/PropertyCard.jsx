import React from 'react';
import { Link } from 'react-router-dom';

const PropertyCard = ({ property, onClick, isCompareClicked, onPriceClick, onSelect }) => {
  // Format price with comma and Naira symbol
  const formattedPrice = new Intl.NumberFormat('en-NG', { style: 'currency', currency: 'NGN' }).format(property.price);

  // Handle property selection only if Compare button is clicked
  const handleSelect = () => {
    if (isCompareClicked) {
      onSelect(property);
    }
  };

  return (
    <Link to={`/property-details/${property.text}`} style={{ textDecoration: 'none', color: 'inherit' }}>
      <div
        className="property-listing-item"
        onClick={onClick}
        style={{
          width: '330px',
          height: 'auto',
          margin: '20px auto',
          marginBottom: '-20px',
          border: '1px solid #dddddd',
          borderRadius: '12px',
          cursor: isCompareClicked ? 'pointer' : 'default', // Allow selection only if Compare button is clicked
          overflow: 'hidden',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        }}
      >
        <div className="image-container">
          <img src={property.image} alt="Property" style={{ width: '100%', marginBottom: '-6px', height: '200px', objectFit: 'cover', borderTopLeftRadius: '12px', borderTopRightRadius: '12px' }} />
        </div>
        <div className="property-details" onClick={() => onPriceClick(property)} style={{ padding: '10px', fontFamily: 'Manrope, sans-serif', fontSize: '13px' }}>
          <h2 style={{ fontSize: '1.0rem', marginBottom: '7px', marginTop: '7px', fontWeight: 500 }}>{property.name}</h2>
          <div style={{ fontWeight: 'bold', fontSize: '1rem', marginBottom: '5px' }}>
            {formattedPrice}
          </div>
          <div className="address" style={{ color: '#555', fontSize: '1.0rem', fontWeight: 'bold', marginBottom: '10px' }}>
            {property.location}
          </div>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px', fontSize: '13px' }}>
            <img src={`${process.env.PUBLIC_URL}/bed.png`} alt="Bed" style={{ marginRight: '5px', width: '16px', height: '16px' }} />
            <span>{property.no_beds} Bed</span>
            <img src={`${process.env.PUBLIC_URL}/bath.png`} alt="Bath" style={{ marginLeft: '15px', marginRight: '5px', width: '16px', height: '16px' }} />
            <span>{property.no_baths} Bath</span>
            <div style={{ borderLeft: '1px solid #ccc', height: '16px', margin: '0 10px' }}></div> {/* Vertical grey line */}
            <img src={`${process.env.PUBLIC_URL}/views.png`} alt="Views" style={{ marginLeft: '10px', marginRight: '5px', width: '16px', height: '16px' }} />
            <span>{property.views} Views</span>
          </div>
          {/* Site and verified info at the bottom, centered */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '10px' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <img src={`${process.env.PUBLIC_URL}/proicon.png`} alt="PropertyPro Icon" style={{ marginRight: '5px', width: '20px', height: '20px' }} />
              <span>{property.site}</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <img src={`${process.env.PUBLIC_URL}/Vector.png`} alt="Verified Icon" style={{ marginRight: '5px', width: '14px', height: '15px' }} />
              <span>Verified</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PropertyCard;
