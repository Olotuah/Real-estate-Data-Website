import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './PropertyDetailsPage.css';

const PropertyDetailsPage = () => {
  const { id } = useParams(); // Capture the property ID from the URL
  console.log('Property ID:', id);
  const navigate = useNavigate();
  const [propertyDetails, setPropertyDetails] = useState(null);

  useEffect(() => {
    const fetchPropertyDetails = async () => {
      try {
        // Check if the id is defined before making the request
        if (!id) {
          throw new Error('Property ID is undefined');
        }

        // Fetch property details using the property ID
        const response = await fetch(`https://search-feature-eight.vercel.app/get_property/3281`);
        if (!response.ok) {
          throw new Error('Failed to fetch property details');
        }
        const data = await response.json();
        setPropertyDetails(data); // Set the fetched data to state
      } catch (error) {
        console.error('Error fetching property details:', error);
      }
    };

    fetchPropertyDetails();
  }, [id]); // Depend on `id` so it refetches when the ID changes

  if (!propertyDetails) {
    return <div>Loading property details...</div>; // Loading state
  }

  // Assuming the data has these properties; adjust based on your actual data structure
  const { name, location, image } = propertyDetails;

  return (
    <div className="property-details-container">
      <div className="search-input-container">
        <input type="text" placeholder="🔍 Search..." className="search-input" />
      </div>
      <button className="back-button" onClick={() => navigate.goBack()}>
        &lt; Back to Result Page
      </button>
      {name && <h1>{name}</h1>}
      {location && <h2>Location: {location}</h2>}
      {image && <img src={image} alt="Property" style={{ maxWidth: '100%', height: 'auto' }} />}
    </div>
  );
};

export default PropertyDetailsPage;
