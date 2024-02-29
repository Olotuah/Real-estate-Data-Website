import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const ComparisonView = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { selectedProperties } = location.state || {}; // Access selectedProperties from location state

  // Handle back button click
  const handleBackClick = () => {
    navigate(-1); // Go back to previous page
  };

  return (
    <div>
      {/* Back button */}
      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        <button onClick={handleBackClick}>Back</button>
      </div>
      {/* Render selected properties */}
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        {/* Display selected properties horizontally */}
        {selectedProperties &&
          selectedProperties.map((property) => (
            <div key={property} style={{ margin: '0 10px' }}>
              {/* Render property details */}
            </div>
          ))}
      </div>
    </div>
  );
};

export default ComparisonView;
