// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDWf3FkIe2LimDxvv4i_Zbf1WJyPxVrSAA",
    authDomain: "finalproject-7c420.firebaseapp.com",
    projectId: "finalproject-7c420",
    storageBucket: "finalproject-7c420.appspot.com",
    messagingSenderId: "274390444074",
    appId: "1:274390444074:web:ebe00fcc7a09ced3323b53"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export default getFirestore();