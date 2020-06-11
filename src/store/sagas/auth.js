import firebase from '../../firebase';

function* setGetUser() {
    // const authData = {
    //     email: values.email,
    //     password: values.password,
    //     returnSecureToken: true
    // }

    // const method = signInTrue
    //     ? firebase.auth().signInWithEmailAndPassword(authData.email, authData.password)
    //     : firebase.auth().createUserWithEmailAndPassword(authData.email, authData.password);
    
    // method.then(response => {
    //     let userData = ''
    //     const userId = response.user.uid;					
    //     if (!signInTrue) {
    //         const userData = {
    //             firstName: values.firstName,
    //             lastName: values.lastName
    //         };

    //         firebase.database().ref('users/' + userId).set(userData)
    //         .then(() => {
    //             storeDataInStorage(userData.firstName, userData.lastName, response);
    //         })
    //         .catch(error => {
    //             console.log('error', error);
    //         });
    //     } else {
    //         firebase.database().ref('/users/' + userId).once('value')
    //         .then((snapshot) => {
    //             storeDataInStorage(snapshot.val().firstName, snapshot.val().lastName, response);
    //         })
    //         .catch(error => {
    //             console.log('error', error);
    //         });
    //     }
    // })
    // .catch(function(error) {
    //     setLoadingTrue(false);
    //     setServerError(error.message);
    //     setTimeout(() => {
    //         setServerError(null);
    //     }, 3000)
    // });	
    
    // const storeDataInStorage = (firstName, lastName, response) => {
    //     localStorage.setItem('firstName', firstName);
    //     localStorage.setItem('lastName', lastName);
    //     localStorage.setItem('userId', response.user.uid);
    //     props.authState();
    //     props.history.push(pathname);
    // }
}