import * as actionTypes from '../actions/actionTypes';

export const setUser = (userData) => {
    return {
        type: actionTypes.SET_USER,
        userData: userData
    }
}