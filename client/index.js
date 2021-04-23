import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App.jsx';
import { AuthProvider } from './context/authContext';
import { ThemeProvider } from './context/themeContext';

// here we render the top level App component to the DOM
ReactDOM.render(
  <AuthProvider>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </AuthProvider>, 
  document.getElementById('root')
);