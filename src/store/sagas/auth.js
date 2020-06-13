import { put, take } from 'redux-saga/effects';
import firebase from '../../firebase';
import * as actions from '../actions';

export function* setGetUser(action) {
    const authData = action.userData
    const signIn = authData.signIn;

    const method = signIn
        ? firebase.auth().signInWithEmailAndPassword(authData.email, authData.password)
        : firebase.auth().createUserWithEmailAndPassword(authData.email, authData.password);
    let userId = null;
    yield method.then(response => {
        console.log('login response initily', response);
        let userData = ''
        userId = response.user.uid;	
        authData.userId = userId;
        if (!signIn) {
            const userData = {
                firstName: authData.firstName,
                lastName: authData.lastName
            };
            firebase.database().ref('users/' + userId).set(userData)
            .catch(error => {
                console.log('error', error);
            });
        }
    })
    .catch(function(error) {
        // setLoadingTrue(false);
        // setServerError(error.message);
        // setTimeout(() => {
        //     setServerError(null);
        // }, 3000)
    });

    if (!authData.firstName) {
        yield firebase.database().ref('/users/' + userId).once('value')
        .then((snapshot) => {
            authData.firstName = snapshot.val().firstName;
            authData.lastName = snapshot.val().lastName;
        })
        .catch(error => {
            console.log('error', error);
        });
    }
    yield put(actions.loggedIn(authData));
}