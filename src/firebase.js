// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage} from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAj8zBK3KOVQalFcJcqVWf7SMElGocbm3g",
  authDomain: "uploadimg-2f5ee.firebaseapp.com",
  projectId: "uploadimg-2f5ee",
  storageBucket: "uploadimg-2f5ee.appspot.com",
  messagingSenderId: "224699502537",
  appId: "1:224699502537:web:48b40734ae8b429e89e218"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)