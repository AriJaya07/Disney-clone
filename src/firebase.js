import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBAWqPk5kRhExQawlvzr3rVnHoSxGmRs3w",
    authDomain: "ari-disneyclone-a1706.firebaseapp.com",
    databaseURL: "https://ari-disneyclone-a1706-default-rtdb.firebaseio.com",
    projectId: "ari-disneyclone-a1706",
    storageBucket: "ari-disneyclone-a1706.appspot.com",
    messagingSenderId: "472211741552",
    appId: "1:472211741552:web:18ef3692a99d3cb1e40db5",
    measurementId: "G-LR5JD7W15C"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
