import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAXe9nNbHj0jyfHGval0NQdflCbpEQ0D5Y",
    authDomain: "retrogameshub-e45a0.firebaseapp.com",
    projectId: "retrogameshub-e45a0",
    storageBucket: "retrogameshub-e45a0.firebasestorage.app",
    messagingSenderId: "955563962677",
    appId: "1:955563962677:web:8e64562fc6e83814665c7c"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };