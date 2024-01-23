import {initializeApp} from 'firebase/app';
import 'firebase/auth'
import {getStorage} from 'firebase/storage'
import {getFirestore} from 'firebase/firestore'
// import dotenv from 'dotenv'
// dotenv.config()

const firebaseConfig = {
    // apiKey: "AIzaSyCM4LAt4CQaYb52rWPp_eysKpAC0fd_jvM",
    // authDomain: "olxdemo-ae7d9.firebaseapp.com",
    // projectId: "olxdemo-ae7d9",
    // storageBucket: "olxdemo-ae7d9.appspot.com",
    // messagingSenderId: "766460513100",
    // appId: "1:766460513100:web:9ef3117248b273d6f2dde9",
    // measurementId: "G-SFKQK8LVKS",
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