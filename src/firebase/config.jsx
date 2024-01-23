import {initializeApp} from 'firebase/app';
import 'firebase/auth'
import {getStorage} from 'firebase/storage'
import {getFirestore} from 'firebase/firestore'
// import dotenv from 'dotenv'
// dotenv.config()

const firebaseConfig = {
    
    apiKey: import.meta.env.VITE_REACT_APP_apiKey,
    authDomain: import.meta.env.VITE_REACT_APP_authDomain,
    projectId: import.meta.env.VITE_REACT_APP_projectId,
    storageBucket: import.meta.env.VITE_REACT_APP_storageBucket,
    messagingSenderId: import.meta.env.VITE_REACT_APP_messagingSenderId,
    appId: import.meta.env.VITE_REACT_APP_appId,
    measurementId: import.meta.env.VITE_REACT_APP_measurementId



  };



  const firebase=initializeApp(firebaseConfig)
  const db=getFirestore(firebase)
  const storage=getStorage(firebase)
  export {firebase,db,storage}