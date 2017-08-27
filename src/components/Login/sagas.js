import { call, fork, put, takeLatest} from 'redux-saga/effects';

import * as actions from './actions';

export const doSetUserName = (username, time) => {
    return new Promise((resolve) => {
        console.log(username);
        setTimeout(resolve({username, time}),1000);
    }).then(resp => resp)
        .catch(error => {
            console.log('User:' + error);
            return error;
        })

}
export function* setUserName(action) {
 try {
     const res = yield call(doSetUserName, action.username, action.time);
     yield put({type: actions.SET_USERNAME_SUCCESS, payload: res});
 }catch(error){
     yield put({type: actions.SET_USERNAME_ERROR, payload: error});
 }

}

export default function* sagas() {
    yield fork(takeLatest, actions.SET_USERNAME, setUserName);

}