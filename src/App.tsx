import React from 'react';
// import logo from './logo.svg';
import { MuiThemeProvider } from '@material-ui/core';
import './App.css';

import { createMuiTheme } from '@material-ui/core';
import Main from './components/Main';

function App() {

  /**
   * Theme to disable ripple effect in MaterialUI button
   */
  const theme = createMuiTheme({
    props: {
      // Name of the component ⚛️
      MuiButtonBase: {
        // The properties to apply
        disableRipple: true, // No more ripple, on the whole application 💣!
      },
    },
  });

  return (
    <MuiThemeProvider theme={theme}>
      <Main />
      {/* <div>
        <Button variant="contained" color="primary">
          Primary
        </Button>
      </div> */}
    </MuiThemeProvider>
    ); 
}

export default App;
