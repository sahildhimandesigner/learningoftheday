import { takeEvery, fork } from 'redux-saga/effects';
import * as actionTypes from '../actions/actionTypes';
import { getPostsSaga, submitPostSaga } from './posts';
import { setGetUser } from './auth';

export function* watchPosts() {
    yield fork(getPostsSaga);
    yield takeEvery(actionTypes.SUBMIT_POST, submitPostSaga);
}

export function* watchAuth() {
    yield takeEvery(actionTypes.SET_USER, setGetUser);
}