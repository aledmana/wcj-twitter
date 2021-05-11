import firebase from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyD7UrJKelxaDRvgYF-OhNavGXDFTtGkPew",
    authDomain: "wcj-twitter.firebaseapp.com",
    databaseURL: "https://wcj-twitter.firebaseio.com",
    projectId: "wcj-twitter",
    storageBucket: "wcj-twitter.appspot.com",
    messagingSenderId: "386586579637",
    appId: "1:386586579637:web:8cf0d02683ba8e9b7e64fc",
    measurementId: "G-RHLF2S4DKW"
};

export default firebase.initializeApp(firebaseConfig);