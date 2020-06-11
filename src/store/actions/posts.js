import * as actionTypes from './actionTypes';

export const getPosts = () => {
    return {
        type: actionTypes.GET_POSTS
    }
}

export const setPosts = (postData) => {
    return {
        type: actionTypes.SET_POSTS,
        postData: postData
    }
}

export const postFetchFailed = () => {
    return {
        type: actionTypes.POST_FETCH_FAILED
    }
}

export const submitPost = () => {
    return {
        type: actionTypes.SUBMIT_POST
    }
}