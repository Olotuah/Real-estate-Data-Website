// SocialAmenities.jsx

import React, { useState } from 'react';

const SocialAmenities = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleDropdownChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="frame" style={{ borderRadius: '15px', marginRight: '10px' }}>
      <h2>Social Amenities</h2>
      <select value={selectedOption} onChange={handleDropdownChange}>
        <option value="default">Select Option</option>
        <option value="school">School</option>
        <option value="church">Church</option>
        <option value="hospital">Hospital</option>
        {/* Add more options as needed */}
      </select>
    </div>
  );
};

export default SocialAmenities;

