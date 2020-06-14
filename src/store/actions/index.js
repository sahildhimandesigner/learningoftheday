export {
    getPosts,
    submitPost,
    setPosts,
    postFetchFailed,
    postSubmitted,
    showPostModal,
} from './posts';
export {
    setUser,
    loggedIn,
    setAuthOnReload,
    logOutUser
} from './auth';
export {
    submitComments,
    userCommentsSubmitted,
    getUserId,
    // getPostComment,
    getCommentFetchFailed
} from './userComments'