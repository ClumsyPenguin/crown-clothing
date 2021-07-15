import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBudeZu4Qr3fGL4g8S5K3C7wzvCmc4FsrM",
    authDomain: "crownclothing-33b9c.firebaseapp.com",
    projectId: "crownclothing-33b9c",
    storageBucket: "crownclothing-33b9c.appspot.com",
    messagingSenderId: "224072828530",
    appId: "1:224072828530:web:b7181aecc7a823a86864eb",
    measurementId: "G-3WNSYK6RLS"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

var provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoogle = () => firebase.auth().signInWithPopup(provider);

export default firebase;