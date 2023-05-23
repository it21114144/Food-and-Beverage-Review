// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDDoyPOBIrsUuivlPTHgS51aBC0tyIl6-s",
  authDomain: "foodies-2ceb2.firebaseapp.com",
  projectId: "foodies-2ceb2",
  storageBucket: "foodies-2ceb2.appspot.com",
  messagingSenderId: "650009186614",
  appId: "1:650009186614:web:a8ce430d11870a35126397",
  measurementId: "G-B690L627WQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const storage = getStorage(app);

export {storage};