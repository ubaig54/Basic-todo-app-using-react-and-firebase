import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import * as firebase from 'firebase'

export const config = {
    apiKey: "AIzaSyAIRz4zL2_mesO45kKryXEkgVvpuqHxh7E",
    authDomain: "react-todoapp-cae12.firebaseapp.com",
    databaseURL: "https://react-todoapp-cae12.firebaseio.com",
    projectId: "react-todoapp-cae12",
    storageBucket: "react-todoapp-cae12.appspot.com",
    messagingSenderId: "907128565822"
};
export const initializeFb = firebase.initializeApp(config);

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
