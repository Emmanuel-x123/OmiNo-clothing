import { initializeApp } from 'firebase/app';
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';
import { getAnalytics, logEvent } from "firebase/analytics";



const firebaseConfig = {
  apiKey: "AIzaSyADMksA1qJoXo8OVaf0Jy9viTcu5mbg4vc",
  authDomain: "omino-clothing-db.firebaseapp.com",
  projectId: "omino-clothing-db",
  storageBucket: "omino-clothing-db.firebasestorage.app",
  messagingSenderId: "680351925053",
  appId: "1:680351925053:web:32ef5f3546349b44cffb54",
  measurementId: "G-EYYN1DNLYN"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: 'select_account'
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userDocRef = doc(db, 'users', userAuth.uid);

    const userSnapshot = await getDoc(userDocRef);

    if(!userSnapshot.exists()){
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try{
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
                ...additionalData
            });
        }catch(error){
            console.log('error creating the user', error.message);
    }
}
    return userDocRef;

}

export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if(!email || !password) return;

    return await createUserWithEmailAndPassword(auth, email, password);
}

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
    if(!email || !password) return;

    return await signInWithEmailAndPassword(auth, email, password);
}

const analytics = getAnalytics(firebaseApp);

logEvent(analytics, 'notification_received');

