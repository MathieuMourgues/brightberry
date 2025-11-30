import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDQaHwN2_5DwKdzdesLNb41SFfsdAYpQaU",
  authDomain: "expo-emery-bai.firebaseapp.com",
  projectId: "expo-emery-bai",
  storageBucket: "expo-emery-bai.firebasestorage.app",
  messagingSenderId: "240587930949",
  appId: "1:240587930949:web:531f91d11e6692b26c922c",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };