import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import { initializeApp } from "firebase/app";
// import 'firebase/firestore';
import 'firebase/firestore';
import firebase from 'firebase/compat/app';


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDyfmF7spuBszOWhG-sGx5GVDb3-85G_-w",
  authDomain: "cartt-9ff90.firebaseapp.com",
  projectId: "cartt-9ff90",
  storageBucket: "cartt-9ff90.appspot.com",
  messagingSenderId: "727531638290",
  appId: "1:727531638290:web:4ee63343921cb180afd2cb"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// // const db = getFirestore(app);
// const db = firebase.firestore();
firebase.initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);