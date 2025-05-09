import React, { useState } from 'react';
import { Button } from './StyledComponents';

export const ToggleThemeButton = () => {
  const [isDark, setIsDark] = useState(false);

  return (
    <div>
      <Button onClick={() => setIsDark(!isDark)}>
        Switch to {isDark ? 'Light' : 'Dark'} Mode
      </Button>
      <p>Current Theme: {isDark ? '🌑 Dark' : '🌞 Light'}</p>
    </div>
  );
};
