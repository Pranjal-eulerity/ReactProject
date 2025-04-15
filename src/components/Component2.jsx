
import React, { useEffect } from 'react';

export const Component2 = () => {
  useEffect(() => {
    let i = 0;
    const runLoop = () => {
      while (true) {
        i++;
        if (i % 1000000 === 0) console.log("Looping ", i);
        if (i > 10000000) break;
      }
    };

    runLoop();
  }, []);

  return <div>🔁  While Loop (safe version)</div>;
};
