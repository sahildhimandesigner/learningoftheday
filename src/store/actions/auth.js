import * as actionTypes from '../actions/actionTypes';
import { getAuth } from '../../utilities/FirebaseAuth';

export const setUser = (userData) => {
    return {
        type: actionTypes.SET_USER,
        userData: userData
    }
}

export const loggedIn = (userData) => {
        storeDataInStorage(userData);
    return {
        type: actionTypes.LOGGED_IN,
        userData: userData
    }
}

const storeDataInStorage = (userData) => {
    localStorage.setItem('firstName', userData.firstName);
    localStorage.setItem('lastName', userData.lastName);
    localStorage.setItem('userId', userData.userId);
}