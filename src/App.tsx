import React from 'react';
import logo from './logo.svg';
import './App.css';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCB3JAejI4AgqUqF8B6bU_F9Wmexr4FMxc",
  authDomain: "adopt-a-tree-4a8bf.firebaseapp.com",
  projectId: "adopt-a-tree-4a8bf",
  storageBucket: "adopt-a-tree-4a8bf.appspot.com",
  messagingSenderId: "393379183425",
  appId: "1:393379183425:web:0a0e9479ba41a251043fc0",
  measurementId: "G-VLW4J6FF0P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React yay
        </a>
      </header>
    </div>
  );
}

export default App;
