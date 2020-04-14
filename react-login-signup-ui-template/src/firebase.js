import * as firebase from 'firebase';

//insert config from firebase
const firebaseConfig = {
  apiKey: "AIzaSyDscUHgzFuKX7c5DOaYKRN8SjiDpydMRQI",
  authDomain: "web-application-for-students.firebaseapp.com",
  databaseURL: "https://web-application-for-students.firebaseio.com/",
  projectId: "web-application-for-students",
  storageBucket: "web-application-for-students.appspot.com",
  messagingSenderId: "572309989654",
  appId: "1:572309989654:web:aeeba9c86ac3993b1ac837",
  measurementId: "G-3R1N1N5072"
};
firebase.initializeApp(config);

export default firebase;
