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

export const showPostModal = (show) => {
    return {
        type: actionTypes.SHOW_POST_MODAL,
        show: show
    }
}

export const submitPost = (submitData) => {
    return {
        type: actionTypes.SUBMIT_POST,
        submitData: submitData
    }
}

export const postSubmitted = () => {
    return {
        type: actionTypes.POST_SUBMITTED
    }
}