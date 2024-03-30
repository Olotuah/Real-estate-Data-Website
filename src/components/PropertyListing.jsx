import React, { useState,  useEffect } from 'react';
import PropertyCard from './PropertyCard';
import PropertyControls from './PropertyControls';
import MapComponent from './MapComponent';
import { Link } from 'react-router-dom';
import ComparisonModal from './ComparisonModal'; // Import ComparisonModal

const PropertyListing = ({ fetchedProperties }) => {
  const [filteredProperties, setFilteredProperties] = useState(fetchedProperties || []);
  const [searchQuery, setSearchQuery] = useState('');
  const [isCompareClicked, setIsCompareClicked] = useState(false);
  const [showModal, setShowModal] = useState(false);
   
  const [selectedProperties, setSelectedProperties] = useState(null);

  useEffect(() => {
  if (fetchedProperties) {
    setFilteredProperties(fetchedProperties);
  } else {
    // Handle the case when fetchedProperties is falsy
    // For example, you could set filteredProperties to an empty array or display an error message
    setFilteredProperties([]);
    console.error('Error fetching properties: fetchedProperties is falsy');
  }
}, [fetchedProperties]);


  const handleApplyFilter = (filterOptions) => {
  // Filter properties based on the selected filter options
  let filteredProperties = fetchedProperties.filter((property) => {
    let matchesFilter = true;

    // Apply location filter
    if (filterOptions.location) {
  matchesFilter = matchesFilter && (
    property.address?.toLowerCase().includes(filterOptions.location.toLowerCase()) ||
    property.city?.toLowerCase().includes(filterOptions.location.toLowerCase()) ||
    property.state?.toLowerCase().includes(filterOptions.location.toLowerCase()) ||
    property.location?.toLowerCase().includes(filterOptions.location.toLowerCase())
  );
}

    // Apply listing type filter
    if (filterOptions.listingType) {
      matchesFilter = matchesFilter && property.listingType === filterOptions.listingType;
    }

    // Apply property type filter
    if (filterOptions.propertyType) {
      matchesFilter = matchesFilter && property.propertyType === filterOptions.propertyType;
    }

    // Apply other filters similarly

    return matchesFilter;
  });

  // Update the filteredProperties state with the filtered results
  setFilteredProperties(filteredProperties);
};

// Modify handleSelect function to add property to selectedProperties only if Compare button is clicked
  const handleSelect = (property) => {
    if (isCompareClicked) {
      setSelectedProperties([...selectedProperties, property]);
    }
  };


  const handleSearchChange = (event) => {
    const inputValue = event.target.value.toLowerCase();
    setSearchQuery(inputValue);

    const searchResults = fetchedProperties.filter(
      (property) =>
        property.address?.toLowerCase().includes(inputValue) ||
        property.city?.toLowerCase().includes(inputValue) ||
        property.state?.toLowerCase().includes(inputValue) ||
        property.location?.toLowerCase().includes(inputValue)
    );

    setFilteredProperties(searchResults);
  };


  // Define handlePriceClick function
  const handlePriceClick = () => {
    // Logic for handling price click
  };

  // Modify the handleCompare function
const handleCompare = () => {
  setIsCompareClicked(true);
};

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div style={{ margin: '20px' }}>
      <PropertyControls
        onFilter={handleApplyFilter}
        onSearchChange={handleSearchChange}
        onCompare={handleCompare}
        isCompareClicked={isCompareClicked}
      />

      {/* Display search result summary */}
      {searchQuery && (
        <div style={{ margin: '20px 0', fontSize: '1.2rem', fontFamily: 'manrope' }}>
          Showing {filteredProperties.length} active listings of "{searchQuery}"
        </div>
      )}

      <div className="property-listing">
        {filteredProperties.length > 0 ? (
          filteredProperties.map((property) => (
            <PropertyCard
              key={property.id}
              property={property}
  
              onPriceClick={handlePriceClick} // Add this line
               
            />
          ))
        ) : (
          <div>No matching properties found</div>
        )}
      </div>

       
    </div>
  );
};

export default PropertyListing;
