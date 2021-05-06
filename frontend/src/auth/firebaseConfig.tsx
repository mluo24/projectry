import { initializeApp } from 'firebase-admin';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import { useEffect, useState } from 'react';
import FirebaseAuth from 'react-firebaseui/FirebaseAuth';

const firebaseConfig = {
  apiKey: "AIzaSyBZoPjQlq8dYwOK3CnUIiPoAg-gMP0nvHA",
  authDomain: "projectry-e2713.firebaseapp.com",
  projectId: "projectry-e2713",
  storageBucket: "projectry-e2713.appspot.com",
  messagingSenderId: "703249329759",
  appId: "1:703249329759:web:a3b9d2da9c6268b18b35ea",
  measurementId: "G-T1G3LTQQBP"
};

firebase.initializeApp(firebaseConfig);

type Props = {
  readonly children: React.ReactNode;
};

const Authenticated = ({ children }: Props) => {
  const [user, setUser] = useState<firebase.User | null>(null);

  const uiConfig = {
    signInFlow: 'popup',
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID],

  };

  function onAuthStateChange() {
    return firebase.auth().onAuthStateChanged((user) => {
      setUser(user);
    });
  }

  useEffect(() => onAuthStateChange(), []);

  return (
    <div>
      {user && children}
      {!user && (
        <FirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
      )}
    </div>
  );
};

export default Authenticated;

