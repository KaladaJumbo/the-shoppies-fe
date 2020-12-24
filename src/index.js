import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import { createMuiTheme, ThemeProvider } from "@material-ui/core";

import './css/index.css';
import App from './App';

const theme = createMuiTheme({

  typography: {
      //for any general settings to be added accross the website
    
  },
  palette: {
    primary: {
      main: "#008060" 
    },
    secondary: {
      main: "#9fffe0" //Another orange-ish color
    }
  },
  // fontFamily: ""
});


ReactDOM.render(
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </BrowserRouter>,
  document.getElementById('root')
);
