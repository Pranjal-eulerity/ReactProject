import React from 'react';

const CatComponent = ({ user }) => {
  const capitalize = (str) => {
    if (!str || typeof str !== 'string') return '';
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  const formatDate = (date) => {
    if (!(date instanceof Date)) return '';
    const year = date.getFullYear();
    const month = `${date.getMonth() + 1}`.padStart(2, '0');
    const day = `${date.getDate()}`.padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  return (
    <div style={{ border: '2px dashed red', padding: '1rem', margin: '1rem' }}>
      <p>Name: {capitalize(user.name)}</p>
      <p>Registered On: {formatDate(new Date(user.registeredAt))}</p>
    </div>
  );
};

export default CatComponent;
