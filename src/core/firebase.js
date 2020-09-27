import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDlYf3fuVk7ZEvcXTb_R1eA3pC3BAq5TvA",
  authDomain: "fir-6fa1d.firebaseapp.com",
  databaseURL: "https://fir-6fa1d.firebaseio.com",
  projectId: "fir-6fa1d",
  storageBucket: "fir-6fa1d.appspot.com",
  messagingSenderId: "238707845805",
  appId: "1:238707845805:web:aa998119f9dc6109c03424",
  measurementId: "G-NQWS285E11"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth};