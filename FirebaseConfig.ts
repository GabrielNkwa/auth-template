import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyA2t5dfD2ACpWc84RtSK-N30sQhMpMtCXQ',
  authDomain: 'authenticationtemplate-53575.firebaseapp.com',
  projectId: 'authenticationtemplate-53575',
  storageBucket: 'authenticationtemplate-53575.appspot.com',
  messagingSenderId: '470724607093',
  appId: '1:470724607093:web:7dc647a6f457ec38f1cc3c',
  measurementId: 'G-E9TZP24K6X',
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIRESTORE_DB = getFirestore(FIREBASE_APP);