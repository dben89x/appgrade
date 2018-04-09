import * as firebase from 'firbase'

const config = {
    apiKey: "AIzaSyBUo9NAIBiYTp_Ftx0fyboJrjA1--tybbw",
    authDomain: "appgrade-165c5.firebaseapp.com",
    databaseURL: "https://appgrade-165c5.firebaseio.com",
    projectId: "appgrade-165c5",
    storageBucket: "appgrade-165c5.appspot.com",
    messagingSenderId: "934456361674"
  };
  firebase.initializeApp(config)

  export const database = firebase.database().ref('/projects')
