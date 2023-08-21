import React, { useState } from 'react';

function PropertyForm() {
  const [properties, setProperties] = useState([]);
  const [propertyDetails, setPropertyDetails] = useState({
    propertyName: '',
    propertyType: '',
    propertyLocation: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setPropertyDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const addProperty = () => {
    if (
      propertyDetails.propertyName &&
      propertyDetails.propertyType &&
      propertyDetails.propertyLocation
    ) {
      setProperties((prevProperties) => [...prevProperties, propertyDetails]);
      setPropertyDetails({
        propertyName: '',
        propertyType: '',
        propertyLocation: '',
      });
    }
  };

  return (
    <div>
      <h2>Add Property Details</h2>
      <div>
        <label>Property Name:</label>
        <input
          type="text"
          name="propertyName"
          value={propertyDetails.propertyName}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>Property Type:</label>
        <input
          type="text"
          name="propertyType"
          value={propertyDetails.propertyType}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>Property Location:</label>
        <input
          type="text"
          name="propertyLocation"
          value={propertyDetails.propertyLocation}
          onChange={handleInputChange}
        />
      </div>
      <button onClick={addProperty}>Add Property</button>
      <h3>Property List:</h3>
      <ul>
        {properties.map((property, index) => (
          <li key={index}>
            <strong>Name:</strong> {property.propertyName},{' '}
            <strong>Type:</strong> {property.propertyType},{' '}
            <strong>Location:</strong> {property.propertyLocation}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PropertyForm;
