import React from 'react';
import PropertyListing from './PropertyListing'; 
import { mockPropertyListings } from '../mockData/mockData';

const PropertyListPage = () => {
  return (
    <div className="property-list-page">
      <h1></h1>
      <PropertyListing properties={mockPropertyListings} />
    </div>
  );
};

export default PropertyListPage;




