import { call, fork, put, takeLatest} from 'redux-saga/effects';
import {browserHistory} from 'react-router';

import * as actions from './actions';

export const doSetUserName = (username) => {
    return new Promise((resolve) => {
        console.log(username);
        setTimeout(resolve(username),1000);
    }).then(resp => resp)
        .catch(error => {
            console.log('User:' + error);
            return error;
        })

}
export function* setUserName(action) {
 try {
     const res = yield call(doSetUserName, action.username);
     yield put({type: actions.SET_USERNAME_SUCCESS, payload: res});
 }catch(error){
     yield put({type: actions.SET_USERNAME_ERROR, payload: error});
 }

}

export default function* sagas() {
    yield fork(takeLatest, actions.SET_USERNAME, setUserName);

}