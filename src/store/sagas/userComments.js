import { put } from 'redux-saga/effects';
import firebase from '../../firebase';
import * as actions from '../actions';

// export function* getUserCommentList() {
//     try {
//         const channel = new eventChannel(emiter => {
//             const listener = firebase.database().ref(`userComment`).on("value", snapshot => {
//               emiter({ data: snapshot.val() || {} });
//             });
//             return () => {
//               listener.off();
//             };
//           });
//           while (true) {
//             const { data } = yield take(channel);
//             yield put(actions.getComment(data));
//           }
//     } catch {
//         yield put(actions.getCommentFetchFailed())
//     }
// }

export function* submitCommentSaga(action) {
    console.log(action.postSubmitComment,'saga')
        const postid = action.postSubmitComment.postId;
        const userData = {
            userName: action.postSubmitComment.userName,
            addComment: action.postSubmitComment.addComment,
            date: action.postSubmitComment.date,
            userId: action.postSubmitComment.userId,            
        }

    const postComment = firebase.database().ref(`userComment/${postid}`);
    yield postComment.push(userData).then(response => {
        console.log(response, 'dsfdsfsf')
    })
    .catch(error => console.log(error));
    yield put(actions.userCommentsSubmitted())
}