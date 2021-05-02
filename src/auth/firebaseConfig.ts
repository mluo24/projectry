import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBZoPjQlq8dYwOK3CnUIiPoAg-gMP0nvHA",
  authDomain: "projectry-e2713.firebaseapp.com",
  projectId: "projectry-e2713",
  storageBucket: "projectry-e2713.appspot.com",
  messagingSenderId: "703249329759",
  appId: "1:703249329759:web:a3b9d2da9c6268b18b35ea",
  measurementId: "G-T1G3LTQQBP"
};

const Firebase = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider()


export default Firebase;
export { auth, provider };