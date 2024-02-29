import React, { useState } from 'react';
import PropertyCard from './PropertyCard';
import PropertyControls from './PropertyControls';
import { Link } from 'react-router-dom';
import ComparisonModal from './ComparisonModal'; // Import ComparisonModal

const PropertyListing = ({ properties }) => {
  const [filteredProperties, setFilteredProperties] = useState(properties);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProperties, setSelectedProperties] = useState([]);
  const [showModal, setShowModal] = useState(false); // State for showing modal

  const handleFilter = (filterOptions) => {
    // Filter logic goes here
  };

  const handleSearchChange = (event) => {
    const inputValue = event.target.value.toLowerCase();
    setSearchQuery(inputValue);

    const searchResults = properties.filter(
      (property) =>
        property.address?.toLowerCase().includes(inputValue) ||
        property.city?.toLowerCase().includes(inputValue) ||
        property.state?.toLowerCase().includes(inputValue)
    );

    setFilteredProperties(searchResults.length > 0 ? searchResults : []);
  };

  const handlePropertySelect = (propertyId) => {
    const updatedSelectedProperties = selectedProperties.includes(propertyId)
      ? selectedProperties.filter((id) => id !== propertyId)
      : [...selectedProperties, propertyId];

    console.log('Updated selected properties:', updatedSelectedProperties);
    
    setSelectedProperties(updatedSelectedProperties);
  };

  const handleCompare = () => {
    // Logic for comparison
    console.log('Comparing properties:', selectedProperties);
    setShowModal(true); // Show the modal when Compare button is clicked
  };

  const handleCloseModal = () => {
    setShowModal(false); // Hide the modal
  };

  console.log('Filtered properties:', filteredProperties);
  console.log('Selected properties:', selectedProperties);

  return (
    <div style={{ margin: '20px' }}>
      {/* Property Controls */}
      <PropertyControls
        selectedProperties={selectedProperties} // Pass selectedProperties
        onFilter={handleFilter}
        onSearchChange={handleSearchChange}
        onCompare={handleCompare} // Pass onCompare here
      />

      {/* Render property listing based on the filteredProperties */}
      <div className="property-listing">
        {filteredProperties.map((property) => (
          <PropertyCard
            key={property.id}
            property={property}
            onSelect={() => handlePropertySelect(property.id)}
            isSelected={selectedProperties.includes(property.id)}
          />
        ))}
        {filteredProperties.length === 0 && (
          <div>No matching properties found</div>
        )}
      </div>

      {/* Comparison Modal */}
      {showModal && (
        <ComparisonModal
          selectedProperties={selectedProperties}
          onClose={handleCloseModal}
          properties={[]}
        />
      )}
    </div>
  );
};

export default PropertyListing;
