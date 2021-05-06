import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { CssBaseline } from "@material-ui/core"
//import store from './store';
import 'bulma/css/bulma.min.css';
import './auth/firebaseConfig';


ReactDOM.render(
  <React.StrictMode>
    {/* <Provider store={store}> */}
      <CssBaseline />
      <App />
    {/* </Provider> */}
  </React.StrictMode>,
  document.getElementById('root')
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
