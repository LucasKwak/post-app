import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBppZXoctVyx7fv0ey3toSlMMgGQ1-z-pA",
    authDomain: "post-app-96f29.firebaseapp.com",
    projectId: "post-app-96f29",
    storageBucket: "post-app-96f29.appspot.com",
    messagingSenderId: "22762910754",
    appId: "1:22762910754:web:e6d8bdb35d2c5f800bc67b",
    measurementId: "G-MCS5E0MQX0"
};

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);

export { auth, db };