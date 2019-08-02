import firebase from 'firebase/app';
import 'firebase/firestore';


const firebaseApp = firebase.initializeApp({  
    // copy and paste your firebase credential here
    apiKey: `${process.env.REACT_APP_API_KEY}`,
    authDomain: `${process.env.REACT_APP_AUTH_DOMAIN}`,
    databaseURL: `${process.env.REACT_APP_DB_URL}`,
    projectId: `${process.env.REACT_APP_P_ID}`,
    storageBucket: `${process.env.REACT_APP_SB}`,
    messagingSenderId: `${process.env.REACT_APP_MS_ID}`,
    appId: `${process.env.REACT_APP_APP_ID}`
  });
  
  const db = firebaseApp.firestore();
  
  export { db };