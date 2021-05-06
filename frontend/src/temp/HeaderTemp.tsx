// import React, { FC } from 'react';
// import { useHistory, Link } from 'react-router-dom';
// import { useSelector, useDispatch } from 'react-redux';

// import Button from './Button';
// import { RootState } from '../store';
// import { signout } from '../store/authActions';

// const HeaderTemp: FC = () => {
//   const history = useHistory();
//   const dispatch = useDispatch();
//   const { authenticated } = useSelector((state: RootState) => state.auth);

//   const logoutClickHandler = () => {
//     dispatch(signout());
//   }

//   return (
//     <nav className="navbar is-spaced has-shadow">
//       <div className="container">
//         <div className="navbar-brand">
//           <Link className="navbar-item" to={!authenticated ? "/" : "/dashboard"}>AppName</Link>
//         </div>

//         <div className="navbar-end">
//           <div className="navbar-items">
//             {!authenticated ? <div className="buttons">
//               <Button text = "Sign Up" onClick={() => history.push('/signup')} className="is-primary" />
//               <Button text = "Log In" onClick={() => history.push('/login')} />
//               </div>
//               :
//               <Button text = "Sign Out" onClick={logoutClickHandler} />
//             }
//           </div>
//         </div>
//       </div>
//     </nav>
//   );

// }

// export default HeaderTemp;
export {};
