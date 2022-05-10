import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Provider } from 'react-redux';
import store from './Redux/store';

const theme = createTheme({
  palette: {
    primary: {
      main: '#27ae60',
    },
    secondary: {
      main: '#2980b9',
    },
    warning: {
      main: '#e67e22',
    },
    error: {
      main: '#c0392b',
    },
  },
});
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Router>
          <App />
        </Router>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
