import * as actionTypes from '../actions/actionTypes';

const initialState = {
    firstName: null,
    lastName: null,
    userId: null,
    loginButtonValue: 'Login',
    loggedIn: false,
    loading: false
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_USER:
            return {
                ...state,
                loading: true
            }            
        case actionTypes.LOGGED_IN:
            return {
                ...state,
                firstName: action.userData.firstName,
                lastName: action.userData.lastName,
                userId: action.userData.userId,
                loginButtonValue: 'Logout',
                loggedIn: true,
                loading: false
            }
        case actionTypes.SET_AUTH_RELOAD:
            return {
                ...state,
                firstName: action.authData.firstName,
                lastName: action.authData.lastName,
                userId: action.authData.userId,
                loginButtonValue: 'Logout',
                loggedIn: true,
                loading: false
            }
        case actionTypes.LOG_OUT_USER:
            return initialState;
        default:
            return state;
    }
}

export default authReducer;