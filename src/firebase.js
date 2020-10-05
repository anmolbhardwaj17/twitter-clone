import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBlTpsR9OEM-h5lRJIZrsF-8lNMhYSTaKk",
  authDomain: "twitter-93e37.firebaseapp.com",
  databaseURL: "https://twitter-93e37.firebaseio.com",
  projectId: "twitter-93e37",
  storageBucket: "twitter-93e37.appspot.com",
  messagingSenderId: "788478214247",
  appId: "1:788478214247:web:5038a0cc3303e4a3b0d4c2",
  measurementId: "G-G862NHHXLW"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
