// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAKJ4WCdEnP0Dbm_Hxsj_lLxz-3iDI056I",
  authDomain: "bodybuilding-plan.firebaseapp.com",
  projectId: "bodybuilding-plan",
  storageBucket: "bodybuilding-plan.appspot.com",
  messagingSenderId: "196882176850",
  appId: "1:196882176850:web:f1289d0178beab35eb388b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
