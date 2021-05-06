import React, {FC, useEffect} from 'react';
// import logo from './logo.svg';
import { MuiThemeProvider } from '@material-ui/core';
import { createMuiTheme } from '@material-ui/core';
import { BrowserRouter as Router, Switch, Route, BrowserRouter } from "react-router-dom";
import './App.css';
import Main from './components/Main';
import Home from './components/Home';
import Login from './auth/login';
import Register from './auth/register';
import Post, { project } from './components/Post';
import User from './components/User';
import Projects from './components/Projects';
import Authenticated from './auth/firebaseConfig';

// import {useDispatch, useSelector} from 'react-redux';
// import HeaderTemp from './temp/HeaderTemp';
// import SignUpTemp from './temp/SignUpTemp';
// import LogInTemp from './temp/LogInTemp';
// import ForgotPassword from './temp/ForgotPassword';
// import HomeTemp from './temp/HomeTemp';
// import Dashboard from './temp/Dashboard';
// import PrivateRoute from './auth/PrivateRoute';
// import PublicRoute from './auth/PublicRoute';
// import Loader from './temp/Loader';
// import firebase from './auth/firebaseConfig';
// import { getUserById, setLoading, setNeedVerification } from './store/authActions';
// import { RootState } from './store';




function App() {

  // const dispatch = useDispatch();
  // const { loading } = useSelector((state: RootState) => state.auth);
  
  // // check if user exists
  // useEffect(() => {
  //   dispatch(setLoading(true));
  //   const unsubscribe = firebase.auth().onAuthStateChanged(async (user) => {
  //     if(user) {
  //       dispatch(setLoading(true));
  //       await dispatch(getUserById(user.uid));
  //       if(!user.emailVerified) {
  //         dispatch(setNeedVerification());
  //       }
  //     }
  //     dispatch(setLoading(false));
  //   });

  //   return () => {
  //     unsubscribe();
  //   }
  // }, [dispatch]);

  // if (loading) {
  //   return <Loader />;
  // }

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
    description: "This is an example project to be displayed.",
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
    description: "Looking for technical team members to build a social media app.",
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
    },
    {
      id: 3,
      title: "Music Production",
    user: {
      id: 3,
      firstName: "Bob",
      lastName: "Tan",
      password: "",
      interest: "Music",
      skills: "none",
      linkedInURL: "https://linkedin.com",
      dateAccountMade: (new Date()).toString()
    },
    description: "Looking for producers, singers, and instrumentalists",
    category: {
      id: 1,
      name: "Music",
      description: "laskdjflas",
      slug: "/music"
    },
    timeCommitment: "2 months",
    teamSize: 5,
    toolsUsed: "React, Node.js",
    paid: false,
    fulfilled: false,
    dateCreated: (new Date()).toString()
    },
    {
      id: 4,
      title: "Cooking & Baking",
    user: {
      id: 2,
      firstName: "Mary",
      lastName: "Ahn",
      password: "",
      interest: "Cooking and Baking",
      skills: "none",
      linkedInURL: "https://linkedin.com",
      dateAccountMade: (new Date()).toString()
    },
    description: "Looking for people interested in collaborative cooking & baking",
    category: {
      id: 1,
      name: "Other",
      description: "laskdjflas",
      slug: "/other"
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
  //   <BrowserRouter>
  //   <HeaderTemp/>
  //     <Switch>
  //       <PublicRoute path="/" component={HomeTemp} exact />
  //       <PublicRoute path="/signup" component={SignUpTemp} exact />
  //       <PublicRoute path="/login" component={LogInTemp} exact />
  //       <PublicRoute path="/forgot-password" component={ForgotPassword} exact />
  //       <PrivateRoute path="/dashboard" component={Dashboard} exact />
  //     </Switch>
  // </BrowserRouter>
    <MuiThemeProvider theme={theme}>
      <Authenticated>
      <Router>
        {/* <div className="app"> */}
        <Switch>
          <Route path="/login" component={Login} exact>
            {/* <Main>
              <Login />
            </Main> */}
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
    </Authenticated>
    </MuiThemeProvider>
  );
}

export default App;
