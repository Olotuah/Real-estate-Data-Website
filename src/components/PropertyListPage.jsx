import React from 'react';
import { useLocation } from 'react-router-dom';
import PropertyListing from './PropertyListing';

const PropertyListPage = () => {
  const location = useLocation();
  const fetchedProperties = location.state ? location.state.fetchedProperties : [];

  return (
    <div className="property-list-page">
      {/*<h1>Property Listings</h1>*/}
      <PropertyListing fetchedProperties={fetchedProperties} />
    </div>
  );
};

export default PropertyListPage;
