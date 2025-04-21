import React from 'react';

// const FIREBASE_SECRET = "AIzaSyD-fake-secret-key";

export const SecretLogger = () => {
  const handleClick = () => {
    console.warn("🔐 Secret Key Access Attempted (don't do this in production)");
  };

  return <button onClick={handleClick}>Log Secret (Simulated)</button>;
};
