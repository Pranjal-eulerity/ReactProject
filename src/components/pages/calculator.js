import React, { useState, useContext, createContext } from 'react';

// Create a Context for the theme
const ThemeContext = createContext();

export const Calculator = () => {
  const [display, setDisplay] = useState('');
  const [result, setResult] = useState(null);
  const { isDarkMode, toggleTheme } = useContext(ThemeContext); 

  const handleClick = (value) => {
    if (value === 'C') {
      setDisplay('');
      setResult(null);
    } else if (value === '=') {
      try {
        const evalResult = eval(display.replace('^', '**')); 
      } catch {
        setResult('Error');
      }
    } else if (value === '√') {
      setDisplay(Math.sqrt(parseFloat(display)).toString());
    } else if (value === 'π') {
      setDisplay((Math.PI).toString());
    } else if (value === 'x²') {
      setDisplay(Math.pow(parseFloat(display), 2).toString());
    } else if (value === 'log') {
      setDisplay(Math.log10(parseFloat(display)).toString());
    } else if (value === 'sin') {
      setDisplay(Math.sin(parseFloat(display) * Math.PI / 180).toString());
    } else if (value === 'cos') {
      setDisplay(Math.cos(parseFloat(display) * Math.PI / 180).toString());
    } else if (value === 'tan') {
      setDisplay(Math.tan(parseFloat(display) * Math.PI / 180).toString());
    } else if (value === 'factorial') {
      setDisplay(factorial(parseInt(display)).toString());
    } else {
      setDisplay(display + value);
    }
  };

  const factorial = (n) => {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
  };

  const buttons = [
    '7', '8', '9', '/',
    '4', '5', '6', '*',
    '1', '2', '3', '-',
    '0', '.', '=', '+',
    '√', 'x²', '^', 'log',
    'sin', 'cos', 'tan', 'π',
    'C', 'factorial'
  ];

  const theme = isDarkMode ? darkTheme : lightTheme;

  return (
    <div style={{ ...styles.container, backgroundColor: theme.background }}>
      <div style={{ ...styles.calculator, backgroundColor: theme.calculator }}>
        <div style={styles.display}>
          {result !== null ? result : display || '0'}
        </div>
        <div style={styles.buttons}>
          {buttons.map((btn, index) => (
            <button
              key={index}
              style={theme.button}
              onClick={() => handleClick(btn)}
            >
              {btn}
            </button>
          ))}
        </div>
        <button
          style={styles.themeToggle}
          onClick={toggleTheme} // Use the toggleTheme function from context
        >
          {isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
        </button>
      </div>
    </div>
  );
};

const darkTheme = {
  background: '#222',
  calculator: '#333',
  display: {
    backgroundColor: '#111',
    color: '#fff',
  },
  button: {
    backgroundColor: '#555',
    color: '#fff',
  },
};

const lightTheme = {
  background: '#f1f1f1',
  calculator: '#fff',
  display: {
    backgroundColor: '#eee',
    color: '#333',
  },
  button: {
    backgroundColor: '#ddd',
    color: '#333',
  },
};

const styles = {
  container: {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
  },
  calculator: {
    width: '350px',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0,0,0,0.5)',
  },
  display: {
    padding: '20px',
    textAlign: 'right',
    borderRadius: '5px',
    minHeight: '60px',
    fontSize: '2rem',
  },
  buttons: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '10px',
  },
  themeToggle: {
    width: '100%',
    padding: '10px',
    backgroundColor: '#008cba',
    color: '#fff',
    border: 'none',
    cursor: 'pointer',
    fontSize: '1rem',
    marginTop: '10px',
    borderRadius: '5px',
  },
};

// Theme Provider to wrap around the calculator and manage theme state
const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

const App = () => {
  return (
    <ThemeProvider>
      <Calculator />
    </ThemeProvider>
  );
};

export default App;
