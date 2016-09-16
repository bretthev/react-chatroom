import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyB2woiGAyGnT12c7xkioReyN9of_WCDedY",
  authDomain: "react-chatroom.firebaseapp.com",
  databaseURL: "https://react-chatroom.firebaseio.com",
  storageBucket: "",
  messagingSenderId: "801522524765"
};

firebase.initializeApp(config);

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export default firebase;
export const signIn = () => auth.signInWithPopup(provider);
export const reference = firebase.database().ref('messages');
