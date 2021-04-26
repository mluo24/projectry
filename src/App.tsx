import React from 'react';
// import logo from './logo.svg';
import { MuiThemeProvider } from '@material-ui/core';
import './App.css';
import { createMuiTheme } from '@material-ui/core';
import Main from './components/Main';
import Home from './components/Home';

function App() {

  /**
   * Theme to disable ripple effect in MaterialUI button
   */
  const theme = createMuiTheme({
    props: {
      // Name of the component ⚛️
      MuiButtonBase: {
        // The properties to apply
        disableRipple: true, // No more ripple, on the whole application!
      },
    },
  });

  return (
    <MuiThemeProvider theme={theme}>
      <Main>
        <Home />
      </Main>
    </MuiThemeProvider>
  );
}

export default App;
