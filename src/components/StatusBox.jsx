import React, { useState, useEffect } from 'react';

export const StatusBox = () => {
  const [status, setStatus] = useState('🟢 All Systems Operational');

  useEffect(() => {
    const statuses = ['🟢 All Systems Operational', '🟡 Degraded Performance', '🔴 Outage Detected'];
    const interval = setInterval(() => {
      setStatus(statuses[Math.floor(Math.random() * statuses.length)]);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return <div><strong>Status:</strong> {status}</div>;
};
