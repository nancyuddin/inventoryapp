// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCLqLDeL8P7ntMDqvPUqPmpSL4zzffW_Ws",
  authDomain: "inventoryapp-16252.firebaseapp.com",
  projectId: "inventoryapp-16252",
  storageBucket: "inventoryapp-16252.appspot.com",
  messagingSenderId: "638953564683",
  appId: "1:638953564683:web:c96eab7eda3f233239750e",
  measurementId: "G-G2B0V7Q3PW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export { firestore };