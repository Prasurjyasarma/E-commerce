//? Import Firebase modules
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
  query,
  getDocs,
} from "firebase/firestore";

//! Web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBCfYz21Kp3O6tF1vL4Xx9FfE8qB-qHLSQ",
  authDomain: "e-commerce-project-db35a.firebaseapp.com",
  projectId: "e-commerce-project-db35a",
  storageBucket: "e-commerce-project-db35a.appspot.com",
  messagingSenderId: "556639571221",
  appId: "1:556639571221:web:1632c3f20906bb912cad1c",
};

//! Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

//! Google Authentication setup
const Googleprovider = new GoogleAuthProvider();
Googleprovider.setCustomParameters({ prompt: "select_account" });

//! Authentication and Firestore database instances
export const auth = getAuth();
export const db = getFirestore();

//! Adding data to the database
export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = collection(db, collectionKey);
  const batch = writeBatch(db);

  objectsToAdd.forEach((object) => {
    const docRef = doc(collectionRef, object.title.toLowerCase());
    batch.set(docRef, object);
  });
  await batch.commit();
  console.log("Done");
};

export const getCategoriesAndDocuments = async () => {
  const colletionRef = collection(db, "categories");
  const q = query(colletionRef);

  const querySnapshot = await getDocs(q);
  const categoryMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
    const { title, items } = docSnapshot.data();
    acc[title.toLowerCase()] = items;
    return acc;
  }, {});
  return categoryMap;
};

//! Sign in with Google using a popup
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, Googleprovider);

//! Create a user document in Firestore based on authentication information
export const createUserDocFromAuth = async (
  userAuth,
  additionalInformation = {}
) => {
  if (!userAuth) return;

  //! Get a reference to the user document
  const userDocRef = doc(db, "User", userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);

  //! If the user document doesn't exist, create it
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      //! Set user document data
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      });
    } catch (error) {
      console.log("Error", error.message);
    }
  }
  return userDocRef;
};

//! Create a new user with email and password
export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};

//! Sign in a user with email and password
export const SignInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
};

//! Sign out the current user
export const signOutUser = async () => await signOut(auth);
