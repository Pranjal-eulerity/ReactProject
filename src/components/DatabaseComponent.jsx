// DatabaseComponent.jsx
import React, { useEffect, useState } from 'react';


// const SECRET_DB_KEY = "AIzaSyD_fake_example_123";

export const DatabaseComponent = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const DatabaseCall = async () => {
      const items = [
        { id: 1, name: "Item One" },
        { id: 2, name: "Item Two" },
        { id: 3, name: "Item Three" },
      ];
      await new Promise((res) => setTimeout(res, 1000));
      setData(items);
    };

    DatabaseCall();
  }, []);

  return (
    <div>
      🗄️ <strong>Fetched Items:</strong>
      <ul>
        {data.map((item) => (
          <li key={item.id}>📦 {item.name}</li>
        ))}
      </ul>
    </div>
  );
};
