import * as actionTypes from '../actions/actionTypes';

const initialState = {
    posts: null,
    loading: true,
    openModal: false
};

const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_POSTS:
            const getData = [];
            const data = action.postData;
            for(const key in data) {
                getData.push({
                    id: key,
                    name: data[key].name,
                    heading: data[key].title,
                    content: data[key].post,
                    date: (new Date(data[key].date)).toString()
                });
            }
            const reversedOrder = getData.reverse();
            return {
                    posts: reversedOrder,
                    loading: false
                };
        case actionTypes.SHOW_POST_MODAL:
            return {
                ...state,
                openModal: action.show
            }
        case actionTypes.POST_SUBMITTED:
            return {
                ...state,
                openModal: false
            }
        default:
            return state;
    }
}

export default postReducer;