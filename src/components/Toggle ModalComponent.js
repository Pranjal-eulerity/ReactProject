import React, { useState,useEffect } from 'react';

// Modal component
const Modal = ({ isVisible }) => {
    const [apiResponse, setApiResponse] = useState(null);
    useEffect(() => {

          console.log('Modal is visible. Fetching data from API...');
          // Example API call
          fetch('https://jsonplaceholder.typicode.com/posts/1')
            .then(res => res.json())
            .then(data => {
              setApiResponse(data);
            })
            .catch(err => {
              console.error('Error fetching API:', err);
            });
      }, []);

  if (!isVisible) return null;

  return (
    <div style={modalStyles}>
      <h2>Modal is now visible!</h2>
      <p>This content only shows when the toggle is TRUE.</p>
      {apiResponse ? (
        <div style={{ marginTop: '10px' }}>
          <strong>API Title:</strong> {apiResponse.title}
          <br />
          <strong>Body:</strong> {apiResponse.body}
        </div>
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
};

// Main component
const ToggleModalComponent = () => {
  const [showModal, setShowModal] = useState(false);

  const handleToggle = () => {
    setShowModal((prev) => !prev);
  };

  return (
    <div style={{ padding: '20px' }}>
      <button onClick={handleToggle}>
        {showModal ? 'Hide' : 'Show'} Modal
      </button>
      <Modal isVisible={showModal} />
    </div>
  );
};

// Basic inline styles for modal
const modalStyles = {
  marginTop: '20px',
  padding: '15px',
  background: '#f0f0f0',
  border: '1px solid #ccc',
  borderRadius: '8px'
};

export default ToggleModalComponent;
