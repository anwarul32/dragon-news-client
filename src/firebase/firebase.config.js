// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCFoHWB5Mhe6z6JqN1ThJ06Qm5PzN0Oqng",
  authDomain: "dragon-news-protal.firebaseapp.com",
  projectId: "dragon-news-protal",
  storageBucket: "dragon-news-protal.appspot.com",
  messagingSenderId: "4652539660",
  appId: "1:4652539660:web:274eb143eaa646cea77329"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;