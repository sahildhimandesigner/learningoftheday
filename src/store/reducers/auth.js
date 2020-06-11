import * as actionTypes from '../actions/actionTypes';

const authReducer = (state, action) => {
    switch (action.type) {
        case actionTypes.SET_USER:
            return {

            }
        default:
            return state;
    }
}