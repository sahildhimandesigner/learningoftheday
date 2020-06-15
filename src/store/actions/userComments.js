import * as actionTypes from './actionTypes';

export const submitComments = (postSubmitComment) => {    
    return {
        type: actionTypes.POST_USER_COMMENTS,
        postSubmitComment: postSubmitComment
    }
}

export const userCommentsSubmitted = () => {
    return {
        type: actionTypes.POST_COMMENTS
    }
}

export const getUserId = (getCommentId) => {
    return {
        type: actionTypes.GET_USER_ID,
        getCommentId: getCommentId
    }
}

export const getPostComment = (getComment) => {
    return {
        type: actionTypes.GET_USER_COMMENTS,
        getComment: getComment
    }
}

export const getCommentFetchFailed = () => {
    return {
        type: actionTypes.GET_COMMENT_FETCH_FAILED
    }
}