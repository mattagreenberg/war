import * as React from 'react';
import themes from '../styling/themes';

const ThemeContext = React.createContext({});

function ThemeProvider(props) {

  const [theme, setTheme] = React.useState(themes.dark);

  const updateTheme = (theme) => {
    if (theme.theme === 'dark') {
      console.log(themes.light);
      setTheme(themes.light);
    } else {
      console.log(themes.dark);
      setTheme(themes.dark);
    };
  };

  const themeContextValue = {
    updateTheme,
    theme
  };

  return <ThemeContext.Provider value={themeContextValue} {...props} />

};

function useTheme() {
  return React.useContext(ThemeContext);
};

export { ThemeProvider, useTheme };