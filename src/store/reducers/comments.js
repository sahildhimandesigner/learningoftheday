import * as actionTypes from '../actions/actionTypes';

const initialState = {
    userComment: null,
    getComment: null
}

const userCommentReducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.GET_USER_COMMENTS:
            const getCommentData = [];
            const data = action.getUserId;           
            console.log(data, 'data')
            for(const key in data) {
                 getCommentData.push({
                     id: key,
                     userName: data[key].userName,
                     addComment: data[key].addComment,
                     date: (new Date(data[key].date)).toString()
                 })
             };
             return {
                getComment:getCommentData,
             }

            case actionTypes.POST_COMMENTS:
            return {
                ...state,
                userComment: action.userComment,
            }
            default:
                return state;
    }
}

export default userCommentReducer;