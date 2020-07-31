import * as actionTypes from './actionTypes';

export const postUserTaskList = (postTask) => {
    return {
        type: actionTypes.POST_TASK_LIST,
        postTask: postTask
    }
}