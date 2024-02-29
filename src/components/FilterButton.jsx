import React from 'react';
import { FaFilter } from 'react-icons/fa';

const FilterButton = ({ onClick }) => {
  return (
    <button onClick={onClick} className="filter-button">
      <FaFilter style={{ marginRight: '5px' }} /> Filter
    </button>
  );
};

export default FilterButton;
