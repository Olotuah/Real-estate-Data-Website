import React from 'react';
import { FaBalanceScale } from 'react-icons/fa';

const CompareButton = ({ onClick }) => {
  return (
    <button onClick={onClick} className="compare-button">
      <FaBalanceScale style={{ marginRight: '5px' }} /> Compare
    </button>
  );
};

export default CompareButton;
