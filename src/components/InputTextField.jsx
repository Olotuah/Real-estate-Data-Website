import React from 'react';
import { FaSearch } from 'react-icons/fa';

const InputTextField = ({ value, onChange, onInput, placeholder }) => {
  return (
    <div className="search-bar-container" style={{ margin: '9px ', position: 'relative', width: '100%' }}>
      <div style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)' }}>
        <FaSearch style={{ fontWeight: 'lighter' }} />
      </div>
      <input
        type="text"
        name="location"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onInput={onInput}
        style={{
          padding: '15px',
          paddingLeft: '40px',
          width: '100%',
          border: '1px solid #ddd',
          borderRadius: '10px',
          fontFamily: 'Manrope, sans-serif',
          fontSize: '18px',
        }}
      />
    </div>
  );
};

export default InputTextField;
