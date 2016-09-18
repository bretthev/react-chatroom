import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyB2woiGAyGnT12c7xkioReyN9of_WCDedY",
  authDomain: "react-chatroom.firebaseapp.com",
  databaseURL: "https://react-chatroom.firebaseio.com",
  storageBucket: "",
  messagingSenderId: "801522524765"
};

firebase.initializeApp(config);

const provider = new firebase.auth.GoogleAuthProvider();
const auth = firebase.auth();
export const signIn = () => auth.signInWithPopup(provider);
export const database = firebase.database().ref('messages');

export default firebase;
