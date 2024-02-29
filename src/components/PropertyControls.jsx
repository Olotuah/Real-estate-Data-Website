import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import { FaSearch, FaFilter, FaMapMarkedAlt, FaBalanceScale, FaAngleDown, FaAngleUp, FaTimesCircle } from 'react-icons/fa';
import ComparisonModal from './ComparisonModal'; // Import ComparisonModal

const PropertyControls = ({ onFilter, onShowMap, onSearchChange, selectedProperties }) => {
  const [filterOptions, setFilterOptions] = useState({
    propertyType: '',
    location: '',
    listingType: '',
    bedrooms: '',
    bathrooms: '',
    priceRange: '',
    propertySize: '',
    amenities: '',
    propertyCondition: '',
    propertyAge: '',
  });

  const [showFilter, setShowFilter] = useState(false);
  const [showModal, setShowModal] = useState(false); // State for showing modal

  const handleFilterChange = (event) => {
    const { name, value } = event.target;
    setFilterOptions({ ...filterOptions, [name]: value });
  };

  const handleFilterClick = () => {
    setShowFilter(!showFilter);
  };

  const handleCompareClick = () => {
    if (selectedProperties.length < 2) {
      console.log('Select at least 2 properties to compare');
    } else {
      console.log('Comparing properties:', selectedProperties);
      setShowModal(true); // Show the modal when Compare button is clicked
    }
  };

  const handleCloseModal = () => {
    setShowModal(false); // Hide the modal
  };

  const handleDecreaseMinAge = () => {
  // Decrease the min age value
};

const handleIncreaseMinAge = () => {
  // Increase the min age value
};

const handleDecreaseMaxAge = () => {
  // Decrease the max age value
};

const handleIncreaseMaxAge = () => {
  // Increase the max age value
};


  return (
    <div style={{ position: 'relative', width: '60%', fontFamily: 'Manrope' }}>
      {/* Search bar */}
      <div className="search-bar-container" style={{ margin: '9px ', position: 'relative', width: '100%' }}>
        {/* Search icon */}
        <div style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)' }}>
          <FaSearch style={{ fontWeight: 'lighter' }} />
        </div>

        <input
          type="text"
          name="location"
          placeholder="Show me 2 Bedroom flats in Surulere"
          value={filterOptions.location}
          onChange={handleFilterChange}
          onInput={onSearchChange}
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

      {/* Filter and Compare Buttons */}
      <div style={{ position: 'absolute', top: '65px', right: '-10px', display: 'flex', gap: '10px' }}>
        {/* Filter Button */}
        <button onClick={handleFilterClick} className="filter-button">
          <FaFilter style={{ marginRight: '5px' }} /> Filter
        </button>

        {/* Compare Button */}
        <button onClick={handleCompareClick} className="compare-button">
          <FaBalanceScale style={{ marginRight: '5px' }} /> Compare
        </button>
      </div>

      {/* Show Map Button */}
      <Link to="/MapView" style={{ textDecoration: 'none' }}>
        <button className="show-map-button">
          <FaMapMarkedAlt style={{ marginRight: '5px' }} /> Show Map
        </button>
      </Link>

{/* Filter Dropdown */}
{showFilter && (
  <div
    className="filter-dropdown"
    style={{
      position: 'fixed', // Change to fixed positioning
      top: '100px', // Adjust as needed
      left: '50%', // Center horizontally
      transform: 'translateX(-50%)',
      width: '50%',
      maxHeight: '400px', // Add a max-height to enable scrolling
      overflowY: 'auto', // Enable vertical scrolling if needed
      background: '#fff',
      border: '1px solid #ddd',
      borderRadius: '15px',
      padding: '10px',
      zIndex: '100', // Ensure higher z-index
    }}
  >
    {/* Filter Text */}
<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '18px', marginBottom: '30px', position: 'relative' }}>
  {/* Cancel Icon */}
<span style={{ position: 'absolute', left: 0, cursor: 'pointer' }} onClick={() => setShowFilter(false)}>
  <FaTimesCircle />
</span>

  {/* Filter Text */}
  <span style={{ textAlign: 'center' }}>Filter</span>
</div>
<hr />
{/* Location Section */}
<div style={{ marginBottom: '20px', marginTop: '20px' }}>
  <div style={{ fontWeight: 'bold' }}>Location</div>
  <input
    type="text"
    name="location"
    placeholder="Enter location..."
    value={filterOptions.location}
    onChange={handleFilterChange}
    style={{ width: '100%', padding: '5px', marginTop: '5px', borderRadius: '5px' }}
  />
</div>
<hr />


    {/* Listing Type Section */}
<div style={{ marginBottom: '20px', marginTop: '20px' }}>
  <div style={{ fontWeight: 'bold', marginBottom: '10px' }}>Listing Type</div>
  <div>
    <label htmlFor="lease" style={{ display: 'block', marginBottom: '10px' }}>
      <input
        type="radio"
        id="lease"
        name="propertyType"
        value="Lease"
        checked={filterOptions.propertyType === 'Lease'}
        onChange={handleFilterChange}
      />
      <span style={{ marginLeft: '5px' }}>Lease</span>

    </label>

    <label htmlFor="rent" style={{ display: 'block', marginBottom: '10px' }}>
      <input
        type="radio"
        id="rent"
        name="propertyType"
        value="Rent"
        checked={filterOptions.propertyType === 'Rent'}
        onChange={handleFilterChange}
      />
      <span style={{ marginLeft: '5px' }}>Rent</span>

    </label>

    <label htmlFor="sale" style={{ display: 'block' }}>
      <input
        type="radio"
        id="sale"
        name="propertyType"
        value="Sale"
        checked={filterOptions.propertyType === 'Sale'}
        onChange={handleFilterChange}
      />
       <span style={{ marginLeft: '5px' }}>Sale</span>

    </label>
  </div>
</div>

    <hr />

    {/* Property Type Section */}
<div style={{ marginBottom: '20px', marginTop: '20px' }}>
  <div style={{ fontWeight: 'bold', marginBottom: '10px' }}>Property Type</div>
  <div style={{ display: 'flex', flexDirection: 'row' }}>
    {/* First Row */}
    <div style={{ flex: 1 }}>
      {["Apartment", "Commercial", "Condo", "Houses"].map((option, index) => (
        <label key={index} htmlFor={`option${index}`} style={{ display: 'block', marginBottom: '10px' }}>
          <input
            type="checkbox"
            id={`option${index}`}
            name="listingType"
            value={option}
            checked={filterOptions.listingType === option}
            onChange={handleFilterChange}
          />
          <span style={{ marginLeft: '5px' }}>{option}</span>
        </label>
      ))}
    </div>

    {/* Second Row */}
    <div style={{ flex: 1 }}>
      {["Land", "Mini-flat", "Self-contain", "Shared Apartment"].map((option, index) => (
        <label key={index} htmlFor={`option${index + 4}`} style={{ display: 'block', marginBottom: '10px' }}>
          <input
            type="checkbox"
            id={`option${index + 4}`}
            name="listingType"
            value={option}
            checked={filterOptions.listingType === option}
            onChange={handleFilterChange}
          />
          <span style={{ marginLeft: '5px' }}>{option}</span>
        </label>
      ))}
    </div>
  </div>
</div>


    <hr />

    {/* Bedrooms Section */}
<div style={{ marginBottom: '20px', marginTop: '20px' }}>
  <div style={{ fontWeight: 'bold', marginBottom: '10px' }}>Bedrooms</div>
  <div style={{ display: 'flex', alignItems: 'center' }}>
    {/* Text */}
    <div style={{ marginRight: '10px', borderRadius: '20px', padding: '3px 20px', border: '1px solid #ddd', background: '#12AF9B', color: 'white' }}>Any</div>

    {/* Numbers */}
    {[1, 2, 3, 4, 5, "6+"].map((number, index) => (
      <div
        key={index}
        style={{
          marginRight: '10px',
          padding: '3px 20px',
          borderRadius: '20px',
          border: '1px solid #ddd',
        }}
      >
        {number}
      </div>
    ))}
  </div>
</div>
<hr />

{/* Bathrooms Section */}
<div style={{ marginBottom: '20px', marginTop: '20px' }}>
  <div style={{ fontWeight: 'bold', marginBottom: '10px' }}>Bathrooms</div>
  <div style={{ display: 'flex', alignItems: 'center' }}>
    {/* Text */}
    <div style={{ marginRight: '10px', borderRadius: '20px', padding: '3px 20px', border: '1px solid #ddd', background: '#12AF9B', color: 'white' }}>Any</div>

    {/* Numbers */}
    {[1, 2, 3, 4, 5, "6+"].map((number, index) => (
      <div
        key={index}
        style={{
          marginRight: '10px',
          padding: '3px 20px',
          borderRadius: '20px',
          border: '1px solid #ddd',
        }}
      >
        {number}
      </div>
    ))}
  </div>
</div>
<hr />


    {/* Price Range Section */}
<div style={{ marginBottom: '20px', marginTop: '20px', width: '60%' }}>
  <div style={{ fontWeight: 'bold', marginBottom: '10px' }}>Price Range</div>
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
      <div style={{ border: '1px solid #ccc', borderRadius: '5px', padding: '5px' }}>Min Price (&#x20A6;)</div>
      <span>-</span>
      <div style={{ border: '1px solid #ccc', borderRadius: '5px', padding: '5px' }}>Max Price (&#x20A6;)</div>
    </div>
  </div>
</div>
<hr />

{/* Property Size */}
<div style={{ marginBottom: '20px', marginTop: '20px', width: '60%' }}>
  <div style={{ fontWeight: 'bold', marginBottom: '10px' }}>Property Size</div>
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
      <div style={{ border: '1px solid #ccc', borderRadius: '5px', padding: '5px' }}>Min size (sqft)</div>
      <span>-</span>
      <div style={{ border: '1px solid #ccc', borderRadius: '5px', padding: '5px' }}>Max size (sqft)</div>
    </div>
  </div>
</div>
<hr />

{/* Amenities */}
<div style={{ marginBottom: '20px', marginTop: '20px' }}>
  <div style={{ fontWeight: 'bold', marginBottom: '10px' }}>Amenities</div>
  <div style={{ display: 'flex', flexDirection: 'row' }}>
    {/* First Row */}
    <div style={{ flex: 1 }}>
      {["Air Conditioning", "Balcony", "Dishwasher", "Elevator", "Garage"].map((option, index) => (
        <label key={index} htmlFor={`option${index}`} style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
          <input
            type="checkbox"
            id={`option${index}`}
            name="amenities"
            value={option}
            checked={filterOptions.amenities === option}
            onChange={handleFilterChange}
          />
          <span style={{ marginLeft: '5px' }}>{option}</span>
        </label>
      ))}
    </div>

    {/* Second Row */}
    <div style={{ flex: 1 }}>
      {["Garden", "Laundry", "Parking", "Pool", "Security System"].map((option, index) => (
        <label key={index} htmlFor={`option${index + 5}`} style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
          <input
            type="checkbox"
            id={`option${index + 5}`}
            name="amenities"
            value={option}
            checked={filterOptions.amenities === option}
            onChange={handleFilterChange}
          />
          <span style={{ marginLeft: '5px' }}>{option}</span>
        </label>
      ))}
    </div>
  </div>
</div>
<hr/>

{/* Property Condition Section */}
<div style={{ marginBottom: '20px', marginTop: '20px' }}>
  <div style={{ fontWeight: 'bold', marginBottom: '10px' }}>Property Condition</div>
  <div>
    <label htmlFor="furnished" style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
      <input
        type="checkbox"
        id="furnished"
        name="propertyCondition"
        value="Furnished"
        checked={filterOptions.propertyCondition === 'Furnished'}
        onChange={handleFilterChange}
      />
      <span style={{ marginLeft: '5px' }}>Furnished</span>
    </label>

    <label htmlFor="unfurnished" style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
      <input
        type="checkbox"
        id="unfurnished"
        name="propertyCondition"
        value="Rent"
        checked={filterOptions.propertyCondition === 'Unfurnished'}
        onChange={handleFilterChange}
      />
      <span style={{ marginLeft: '5px' }}>Unfurnished</span>
    </label>

    <label htmlFor="renovated" style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
      <input
        type="checkbox"
        id="renovated"
        name="propertyCondition"
        value="Sale"
        checked={filterOptions.propertyCondition === 'Renovated'}
        onChange={handleFilterChange}
      />
      <span style={{ marginLeft: '5px' }}>Renovated</span>
    </label>

    <label htmlFor="needs renovation" style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
      <input
        type="checkbox"
        id="needs renovation"
        name="propertyCondition"
        value="Sale"
        checked={filterOptions.propertyCondition === 'Needs renovation'}
        onChange={handleFilterChange}
      />
      <span style={{ marginLeft: '5px' }}>Needs renovation</span>
    </label>
  </div>
</div>
<hr/>


    {/* Property Age Section */}
<div style={{ marginBottom: '20px', marginTop: '20px' }}>
  <div style={{ fontWeight: 'bold', marginBottom: '10px' }}>Property Age</div>
  <div style={{ display: 'flex', alignItems: 'center', marginTop: '10px' }}>
    <div style={{ border: '1px solid #12AF9B', borderRadius: '5px', padding: '5px', display: 'flex', alignItems: 'center', marginRight: '10px' }}>
      Min Age 
      <div style={{ display: 'flex', flexDirection: 'column', marginLeft: '10px' }}>
        <span style={{ cursor: 'pointer', width: '10px', height: '10px', display: 'flex', justifyContent: 'center', alignItems: 'center', border: '1px solid #12AF9B', borderRadius: '3px', background: '#12AF9B' }} onClick={handleIncreaseMinAge}>
          <FaAngleUp style={{ color: 'white', fontSize: '12px', width: '100%', height: '100%' }} />
        </span>
        <span style={{ cursor: 'pointer', width: '10px', height: '10px', display: 'flex', justifyContent: 'center', alignItems: 'center', border: '1px solid #12AF9B', borderRadius: '3px', background: '#12AF9B', marginTop: '5px' }} onClick={handleDecreaseMinAge}>
          <FaAngleDown style={{ color: 'white', fontSize: '12px', width: '100%', height: '100%' }} />
        </span>
      </div>
    </div>
    <span>-</span>
    <div style={{ border: '1px solid #12AF9B', borderRadius: '5px', padding: '5px', display: 'flex', alignItems: 'center', marginLeft: '10px' }}>
      Max Age 
      <div style={{ display: 'flex', flexDirection: 'column', marginLeft: '10px' }}>
        <span style={{ cursor: 'pointer', width: '10px', height: '10px', display: 'flex', justifyContent: 'center', alignItems: 'center', border: '1px solid #12AF9B', borderRadius: '3px', background: '#12AF9B' }} onClick={handleIncreaseMaxAge}>
          <FaAngleUp style={{ color: 'white', fontSize: '12px', width: '100%', height: '100%' }} />
        </span>
        <span style={{ cursor: 'pointer', width: '10px', height: '10px', display: 'flex', justifyContent: 'center', alignItems: 'center', border: '1px solid #12AF9B', borderRadius: '3px', background: '#12AF9B', marginTop: '5px' }} onClick={handleDecreaseMaxAge}>
          <FaAngleDown style={{ color: 'white', fontSize: '12px', width: '100%', height: '100%' }} />
        </span>
      </div>
    </div>
  </div>
</div>

<div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>
  {/* Clear All Button */}
  <div
    onClick={() =>
      setFilterOptions({
        ...filterOptions,
        location: '',
        listingType: '',
        propertyType: '',
        // ... (clear other options)
      })
    }
    className="clear-all-button"
    style={{ cursor: 'pointer', color: '#3498db', textDecoration: 'underline' }}
  >
    Clear All
  </div>

  {/* Apply Filter Button */}
  <button onClick={handleFilterClick} className="apply-filter-button">
    Show Results
  </button>
</div>

  </div>
)}


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

export default PropertyControls;
