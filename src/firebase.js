import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyASBSaBRBC4qBMcyT7MhESlEx4keb5AhjE",
    authDomain: "learningoftheday-3af1d.firebaseapp.com",
    databaseURL: "https://learningoftheday-3af1d.firebaseio.com",
    projectId: "learningoftheday-3af1d",
    storageBucket: "learningoftheday-3af1d.appspot.com",
    messagingSenderId: "413023871914",
    appId: "1:413023871914:web:7b139ad68f0faeddcf01d3",
    measurementId: "G-8EWRNEQZTR"
  };

  firebase.initializeApp(firebaseConfig)

  export default firebase;