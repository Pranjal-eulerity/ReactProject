import React, { useEffect, useState } from 'react';

export const AnalyticsPulse = () => {
  const [pulse, setPulse] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPulse((p) => p + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>📈 Analytics Events: {pulse}</div>
  );
};
