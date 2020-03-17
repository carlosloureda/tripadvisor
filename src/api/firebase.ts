import * as firebase from "firebase";
import { FIREBASE_API_KEY, FIREBASE_APP_ID } from "react-native-dotenv";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: FIREBASE_API_KEY,
  authDomain: "tripadvisor-3571b.firebaseapp.com",
  databaseURL: "https://tripadvisor-3571b.firebaseio.com",
  projectId: "tripadvisor-3571b",
  storageBucket: "tripadvisor-3571b.appspot.com",
  messagingSenderId: "589241416952",
  appId: FIREBASE_APP_ID,
  measurementId: "G-3SFGY8MN1V"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();

export default firebase;
