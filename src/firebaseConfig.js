import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBTYqOvMawXYgC_Iwj5d3mVHuFQSpQXB8Y",
  authDomain: "vishnu-paradise-8375e.firebaseapp.com",
  databaseURL: "https://vishnu-paradise-8375e-default-rtdb.firebaseio.com",
  projectId: "vishnu-paradise-8375e",
  storageBucket: "vishnu-paradise-8375e.appspot.com",
  messagingSenderId: "679455127787",
  appId: "1:679455127787:web:315e6bf260fe9855df66ae",
  measurementId: "G-XT2HPK8BQ3"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
