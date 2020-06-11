import { put, take } from 'redux-saga/effects';
import { eventChannel } from 'redux-saga';
import firebase from '../../firebase';
import * as actions from '../actions';

export function* getPostsSaga() {
    try {
        const channel = new eventChannel(emiter => {
            const listener = firebase.database().ref(`allPost`).on("value", snapshot => {
              emiter({ data: snapshot.val() || {} });
            });
            return () => {
              listener.off();
            };
          });
          while (true) {
            const { data } = yield take(channel);
            yield put(actions.setPosts(data));
          }
    } catch {
        yield put(actions.postFetchFailed())
    }
}

export function* submitPostSaga(action) {
    const allPost = yield firebase.database().ref(`allPost`);
    yield allPost.push(action.submitData).then(response => {
        firebase.database().ref(`users`)
        .child(`${action.submitData.userId}`)
        .child(`coins`)
        .transaction(function(currentCoins) {
            return (currentCoins || 0) + 1
        });
    })
    .catch(error => console.log(error));
    yield put(actions.postSubmitted())
}