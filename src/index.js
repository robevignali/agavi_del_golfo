import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Routing from './Routing';
import firebase from 'firebase';
import * as serviceWorker from './serviceWorker';

var firebaseConfig = {
  apiKey: "AIzaSyBm3j-BnHgpWAqKzGVq-zxRLeiZU6kevys",
  authDomain: "agavi-del-golfo-image-storage.firebaseapp.com",
  projectId: "agavi-del-golfo-image-storage",
  storageBucket: "agavi-del-golfo-image-storage.appspot.com",
  messagingSenderId: "176260637885",
  appId: "1:176260637885:web:0418cf4751e2b565ffc3d4",
  measurementId: "G-Q8QFMBLQ0Z"
};

firebase.initializeApp(firebaseConfig);


ReactDOM.render(
  // <React.StrictMode>
    <Routing />
  // </React.StrictMode>
  ,document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
