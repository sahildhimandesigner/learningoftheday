import firebase from '../firebase';

export const getAuth = () => new Promise((res, rej) => {
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        res(user);
        return;
      }
      rej(false);
    })
});