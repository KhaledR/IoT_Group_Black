import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDXf3XsXYnStlu_Dizz65x4j7i0IIKCtE8",
  authDomain: "iot-aws-79e21.firebaseapp.com",
  databaseURL: "https://iot-aws-79e21-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "iot-aws-79e21",
  storageBucket: "iot-aws-79e21.appspot.com",
  messagingSenderId: "681895293764",
  appId: "1:681895293764:web:16c56967d9dba92db0dd11"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

export const db = getFirestore(app);
export const storage = getStorage(app);



