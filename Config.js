import firebase from 'firebase/app';
import 'firebase/firestore'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDGZMN5a4S1x9QT-zrM6Rx8LWu1bAlW_H0",
  authDomain: "efarm-application.firebaseapp.com",
  projectId: "efarm-application",
  storageBucket: "efarm-application.appspot.com",
  messagingSenderId: "529235290089",
  appId: "1:529235290089:web:34d1c2b8104a863b350d78",
  measurementId: "G-QYHVS5PXX2"
};

  
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }else {
    firebase.app(); // if already initialized, use that one
  }
  const dbh = firebase.firestore();
  
  export default dbh;