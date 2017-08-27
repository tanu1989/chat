import { call, fork, put, takeLatest, select} from 'redux-saga/effects';
import * as actions from './actions';
import {setUser} from '../Login/actions';
import axios from 'axios';

var base = 'http://localhost:8081/api';

export const getLogin = (state) => state.login;

export const doGetRooms = () => {
        return axios.get(`${base}/rooms`)
            .then(response =>{
                return response.data
            }).catch(error =>{
                console.log(error);
                return error;
            })
}

export const doGetUsers = (id) => {
    return axios.get(`${base}/rooms/${id}`)
        .then(response =>{
            return response.data
        }).catch(error =>{
            console.log(error);
            return error;
        })
}

export const doGetMessages = (id) => {
    return axios.get(`${base}/rooms/${id}/messages`)
        .then(response =>{
            return response.data
        }).catch(error =>{
            console.log(error);
            return error;
        })
}

export const doPostMessage = (id, payload) => {
    return axios.post(`${base}/rooms/${id}/messages`, payload)
        .then(response =>{
            response = payload.name;
            return response;
        }).catch(error =>{
            console.log(error);
            return error;
        })
}

export function* getRooms() {
    try {
        const response = yield call(doGetRooms);
        yield put({type: actions.GET_ROOMS_SUCCESS, payload: response})
    }catch(error){
        yield put({type: actions.GET_ROOMS_ERROR, payload: error});

    }
}

export function* getUsers(action) {
    try {
        const response = yield call(doGetUsers, action.id);
        yield put({type: actions.GET_USERS_SUCCESS, payload: response})
    }catch(error){
        yield put({type: actions.GET_USERS_ERROR, payload: error});

    }
}

export function* getMessages(action){
    try {
        const response = yield call(doGetMessages, action.id);
        yield put({type: actions.GET_MESSAGES_SUCCESS, payload: response})
    }catch(error){
        yield put({type: actions.GET_MESSAGES_ERROR, payload: error})
    }
}

export function* postMessage(action){
    try {
        yield call(doPostMessage, action.id, action.payload);
        // yield put({type: actions.POST_MESSAGES_SUCCESS});
        const response = yield call(doGetMessages, action.id);
        yield put({type: actions.GET_MESSAGES_SUCCESS, payload: response});
        const detail2 = yield select(getLogin);
        yield put(setUser(action.payload.name, detail2.logTime));
    }catch(error){
        yield put({type: actions.POST_MESSAGES_ERROR, payload: error})
    }
}


export default function* sagas() {
    yield fork(takeLatest, actions.GET_ROOMS, getRooms);
    yield fork(takeLatest, actions.GET_USERS, getUsers);
    yield fork(takeLatest, actions.GET_MESSAGES, getMessages);
    yield fork(takeLatest, actions.POST_MESSAGES, postMessage);

}

