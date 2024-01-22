// Import the functions you need from the SDKs you need
import { getApp, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBrv_A9uRP-WFY-UQB1mRIY1kQ76Jnfn9M",
  authDomain: "netflix-gpt-demo.firebaseapp.com",
  projectId: "netflix-gpt-demo",
  storageBucket: "netflix-gpt-demo.appspot.com",
  messagingSenderId: "994653492311",
  appId: "1:994653492311:web:ba4d9785a076f8f10f7f12",
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
// export const analytics = getAnalytics(getApp);
export const auth = getAuth();
export { firebase };
