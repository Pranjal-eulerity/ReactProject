import React, { useMemo } from 'react';

const AnotherComponent = ({user}) => {
    const items = ['Apple', 'Banana', 'Orange', 'Mango'];
    const greeting = useMemo(() => {
      console.log("Computing greeting...");
      return `Hello, ${user.firstName} ${user.lastName}!`;
    }, [user]);
  return (
    <div>
      <h2>This is AnotherComponent</h2>
      <p>Welcome to this reusable component!</p>
      <ul>
      {items.map((item) => (
      <li>{item}</li>
    ))}
    </ul>
    <div>{greeting}</div>
    </div>
  );
};

export default AnotherComponent;
