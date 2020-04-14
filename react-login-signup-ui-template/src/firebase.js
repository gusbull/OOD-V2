import * as firebase from 'firebase';

//insert config from firebase
const config = {
    apiKey: "AIzaSyALLdhasdfs6Yh4FHxMQTkKCq1R-EgPA",
    authDomain: "auth-103ssed.firebaseapp.com",
    databaseURL: "https://audth-1f03ed.firebaseio.com",
    projectId: "auth-10df3ed",
    storageBucket: "autdfh-103ed.appspot.com",
    messagingSenderId: "563454061114013"
};
firebase.initializeApp(config);

export default firebase;
