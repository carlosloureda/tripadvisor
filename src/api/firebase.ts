import firebase from "firebase/app";
import { FIREBASE_CONFIG } from "react-native-dotenv";

// Your web app's Firebase configuration
const firebaseConfig = FIREBASE_CONFIG;
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase;
