import React from 'react';
import { useNavigate } from 'react-router-dom';

const ComparisonModal = ({ selectedProperties, onClose }) => {
  const navigate = useNavigate();

  const handleCompareClick = () => {
    navigate('/ComparisonPage', { state: { selectedProperties } });
  };

  return (
    <div className="comparison-modal" style={{
      position: 'fixed', // Change position to fixed
      backgroundColor: '#fff',
      borderRadius: '20px',
      padding: '30px',
      boxShadow: '30px 30px 30px rgba(8.0, 8.9, 8.9, 8.0)',
      top: 'calc(100vh - 110px)', // Adjust the distance from the bottom of the viewport
      left: '50%',
      transform: 'translateX(-49%)',
      zIndex: 1000, // Ensure the modal is above other content
    }}>
      <div className="modal-content">
        <div className="modal-header" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <span className="close" onClick={onClose}>&times;</span>
          {/* Conditionally render the text */}
          {selectedProperties.length > 0 && (
            <h2 style={{ margin: '0', marginRight: '10px', fontFamily: 'Manrope', color: '#333' }}>You've selected {selectedProperties.length} properties</h2>  
          )}
          {/* Compare Button */}
          <button className="compare-button" onClick={handleCompareClick} style={{ margin: '0', marginLeft: '10px', backgroundColor: '#12AF9B', color: '#fff', fontFamily: 'Manrope' }}>Compare </button> {/* Adjusted margin-left */}
        </div>
        <div className="modal-body">
          {/* Render selected properties */}
        </div>
      </div>
    </div>
  );
};

export default ComparisonModal;
