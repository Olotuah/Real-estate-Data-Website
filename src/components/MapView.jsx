import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter, faSearch, faList, faBalanceScale } from '@fortawesome/free-solid-svg-icons';
import MapComponent from './MapComponent'; // Adjust the path accordingly
import '../leaflet.css';

const MapView = () => {
  const [showMap, setShowMap] = useState(true); // Set it to true to directly show the map
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (e) => {
  const value = e.target.value;
  // Sanitize the input to handle special characters
  const sanitizedValue = encodeURIComponent(value);
  setSearchQuery(sanitizedValue);
  };

  const handleCompareClick = () => {
    console.log('Compare button clicked');
  };

  const handleFilterClick = () => {
    console.log('Filter button clicked');
  };

  const handleGridClick = () => {
    console.log('Grid button clicked');
  };

  return (
    <div style={{ margin: '20px' }}> {/* Adjust the margin as needed */}
      {/* Heading */}
      {/* <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>Interactive Map</h1> */}

      {/* Search Input, Compare Button, Filter Button, Grid Button */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'left', marginBottom: '10px', width: '70%' }}>
        <FontAwesomeIcon icon={faSearch} style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)', color: '#888' }} />
        <input
          type="text"
          placeholder="Search"
          value={searchQuery}
          onChange={handleSearchChange}
          style={{ padding: '1.3em', width: '', border: '1px solid #ccc', borderRadius: '15px', marginBottom: '1em' }}
        />
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <button onClick={handleGridClick} className="grid-button" style={{ padding: '0.7em', marginRight: '1em' }}>
            <FontAwesomeIcon icon={faList} style={{ marginRight: '0.5em' }} />
            Grid
          </button>
          <div style={{ display: 'flex' }}>
            <button onClick={handleCompareClick} className="compare-button" style={{ padding: '0.7em', marginRight: '1em' }}>
              <FontAwesomeIcon icon={faBalanceScale} style={{ marginRight: '0.5em' }} />
              Compare
            </button>
            <button onClick={handleFilterClick} className="filter-button" style={{ padding: '1em', marginRight: '5px' }}>
              <FontAwesomeIcon icon={faFilter} style={{ marginRight: '0.5em' }} />
              Filter
            </button>
          </div>
        </div>
      </div>

      {/* Map Component */}
      {showMap && <MapComponent style={{ marginTop: '20px' }} />} {/* Adjust the margin as needed */}
      {/* Additional components can be added here */}
    </div>
  );
};

export default MapView;
