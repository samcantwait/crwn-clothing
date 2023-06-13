import { initializeApp } from 'firebase/app';
import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider
} from 'firebase/auth';
import {
    getFirestore,
    doc,
    getDoc,
    setDoc
} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBL3JRaLnOVEw5ABmILQEMEGTiv0Ahly8g",
    authDomain: "crwn-clothing-db-d7a52.firebaseapp.com",
    projectId: "crwn-clothing-db-d7a52",
    storageBucket: "crwn-clothing-db-d7a52.appspot.com",
    messagingSenderId: "47294549797",
    appId: "1:47294549797:web:a489642b882218812294cc"
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: 'select_account'
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore()

export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid);

    console.log(userDocRef);

    const userSnapShot = await getDoc(userDocRef);
    console.log(userSnapShot);
    console.log(userSnapShot.exists());
}