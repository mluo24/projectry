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
import Post, { project } from './components/Post';
import User from './components/User';
import Projects from './components/Projects';


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

  const postExample: project = {
    id: 1,
    title: "Example Project ",
    user: {
      id: 1,
      firstName: "John",
      lastName: "Doe",
      password: "",
      interest: "Tech",
      skills: "none",
      linkedInURL: "https://linkedin.com",
      dateAccountMade: (new Date()).toString()
    },
    description: "This is an example project.",
    category: {
      id: 1,
      name: "Design",
      description: "laskdjflas",
      slug: "/design"
    },
    timeCommitment: "2 months",
    teamSize: 5,
    toolsUsed: "React, Node.js",
    paid: false,
    fulfilled: false,
    dateCreated: (new Date()).toString()
  }

  const projectsList : project[] = [
    postExample,
    {
      id: 2,
      title: "iOS App Dev",
    user: {
      id: 1,
      firstName: "John",
      lastName: "Doe",
      password: "",
      interest: "Tech",
      skills: "none",
      linkedInURL: "https://linkedin.com",
      dateAccountMade: (new Date()).toString()
    },
    description: "Social media app for college students. Looking for technical and marketing team members.",
    category: {
      id: 1,
      name: "Design",
      description: "laskdjflas",
      slug: "/design"
    },
    timeCommitment: "2 months",
    teamSize: 5,
    toolsUsed: "React, Node.js",
    paid: false,
    fulfilled: false,
    dateCreated: (new Date()).toString()
    }
  ]

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
          <Route path="/example-post">
            <Main>
              <Post p={postExample} />
            </Main>
          </Route>
          <Route path="/profile">
            <Main>
              <User />
            </Main>
          </Route>
          <Route path="/projects">
            <Main>
              <Projects projects={projectsList}/>
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
