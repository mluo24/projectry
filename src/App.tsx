import React from 'react';
// import logo from './logo.svg';
import { MuiThemeProvider } from '@material-ui/core';
import { createMuiTheme } from '@material-ui/core';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import Main from './components/Main';
import Home from './components/Home';
import Login from './auth/login';
import Register from './auth/register';


function App() {

  /**
   * Theme to disable ripple effect in MaterialUI button
   */
  const theme = createMuiTheme({
    props: {
      // Name of the component
      MuiButtonBase: {
        // The properties to apply
        disableRipple: true, // No more ripple, on the whole application!
      },
    },
  });

  return (
    <MuiThemeProvider theme={theme}>
      <Router>
        {/* <div className="app"> */}
          <Switch>
            <Route path="/login">
              <Main>
                <Login />
              </Main>
            </Route>
            <Route path="/signup">
              <Main>
                <Register />
              </Main>
            </Route>
            <Route path="/">
              <Main>
                <Home />
              </Main>
            </Route>
          </Switch>
        {/* </div> */}
      </Router>
    </MuiThemeProvider>
  );
}

export default App;
