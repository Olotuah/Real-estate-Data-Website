// ShowCrimeRate.jsx

import React, { useState } from 'react';

const ShowCrimeRate = () => {
  const [showCrimeRate, setShowCrimeRate] = useState(true);

  const handleCheckboxChange = () => {
    setShowCrimeRate(!showCrimeRate);
  };

  return (
    <div className="frame" style={{ borderRadius: '15px' }}>
      <label>
        <input type="checkbox" checked={showCrimeRate} onChange={handleCheckboxChange} />
        Show Crime Rate
      </label>
    </div>
  );
};

export default ShowCrimeRate;
