import * as actionTypes from '../actions/actionTypes';

const initialState = {
    posts: null,
    loading: true
};

const reducer = (state = initialState, action) => {
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
        case actionTypes.SUBMIT_POST:
            return {

            };
        default:
            return state;
    }
}

export default reducer;