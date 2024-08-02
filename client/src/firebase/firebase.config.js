// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD49ZTvHkXxDWMmSa9uNvnZyd2f4-jiqmE",
  authDomain: "mern---book---store.firebaseapp.com",
  projectId: "mern---book---store",
  storageBucket: "mern---book---store.appspot.com",
  messagingSenderId: "1059097193965",
  appId: "1:1059097193965:web:fef6477afb59266d4b4be4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;