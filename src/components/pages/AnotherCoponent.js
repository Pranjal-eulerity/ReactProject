import React, { useState, useEffect } from 'react';

export const AnotherComponent = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {

    console.log(`The count is now: ${count}`);
  }, [count]);
  useEffect(() => {
    setCount(count + 1); 
  }, [count]);

  const increment = () => {
    setCount(count + 1);
  };
  const items = ['Apple', 'Banana', 'Orange', 'Mango'];

  return (
    <div>
      <p>Count: {count}</p>
      <button  class="container" onClick={increment}>Increment</button>
      <div>"Hello World"</div>
      <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
    </div>
  );
}