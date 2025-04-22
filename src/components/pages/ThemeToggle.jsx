import Button from "../Button";

// components/ThemeToggle.js
export const ThemeToggle = () => {
    const isDark = true;
    const toggle = () => (isDark ? false : true);
  
    return <Button onClick={toggle}>Toggle Theme</Button>;
  };
  