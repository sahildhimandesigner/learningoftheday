import { takeEvery, fork } from 'redux-saga/effects';
import * as actionTypes from '../actions/actionTypes';
import { getPostsSaga, submitPostSaga } from './posts';

export function* watchPosts() {
    yield fork(getPostsSaga);
    yield takeEvery(actionTypes.SUBMIT_POST, submitPostSaga);
}