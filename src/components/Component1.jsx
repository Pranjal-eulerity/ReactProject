// StateInfiniteLoopComponent.jsx
import React, { useEffect, useState } from 'react';

export const Component1 = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((c) => c + 1);
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return <div>📈 State Loop Count: {count}</div>;
};
