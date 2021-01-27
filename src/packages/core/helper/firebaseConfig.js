import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDN_cW-PuuiGsnmOxYcPa5W2NpdA77dwXY',
  authDomain: 'vulongquyen.firebaseapp.com',
  databaseURL: 'https://vulongquyen-default-rtdb.firebaseio.com',
  projectId: 'vulongquyen',
  storageBucket: 'vulongquyen.appspot.com',
  messagingSenderId: '522982284826',
  appId: '1:522982284826:web:174b52c2731c13f50c3ba3',
  measurementId: 'G-LD19E60NPM',
};

firebase.initializeApp(firebaseConfig);

const firebaseDefault = {
  database: firebase.database(),
  auth: firebase.auth(),
  authThird: firebase.auth,
};

export default firebaseDefault;
