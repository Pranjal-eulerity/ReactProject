import React, { useState, useEffect } from 'react';

function MyComponent() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  const apiKey = process.env.REACT_APP_API_KEY;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://api.example.com/data?apiKey=${apiKey}`);
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [apiKey]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Fetched Data</h1>
      {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : <p>No data available</p>}
    </div>
  );
}

export default MyComponent;
