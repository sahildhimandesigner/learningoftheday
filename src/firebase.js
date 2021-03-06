import firebase from 'firebase'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL: "https://learningoftheday-589d4.firebaseio.com",
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGE_SENDING_ID,
    appId: process.env.REACT_APP_APP_ID,
    measurementId: process.env.REACT_APP_MEASURMENT_ID

    
  };

  firebase.initializeApp(firebaseConfig)

  export const storage = firebase.storage();

  export default firebase;

