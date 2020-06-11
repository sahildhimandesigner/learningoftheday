import { fork } from 'redux-saga/effects';
import * as actionTypes from '../actions/actionTypes';
import { getPostsSaga } from './posts';

export function* watchPosts() {
    yield fork(getPostsSaga);
}