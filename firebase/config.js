// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import {getAuth} from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyASEwufJDT37YE1Ud_F_o3jzlHPsaAwhGo",
  authDomain: "sisapp-743bb.firebaseapp.com",
  projectId: "sisapp-743bb",
  storageBucket: "sisapp-743bb.appspot.com",
  messagingSenderId: "1002781941086",
  appId: "1:1002781941086:web:c179b22d5485af8f08c3cf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const db = getFirestore()

  const auth = getAuth()

  export {db,auth}
