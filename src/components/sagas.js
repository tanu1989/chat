import { fork } from 'redux-saga/effects';
import login from '../components/Login/sagas';
import chatroom from '../components/Chatbox/sagas'

if (module.hot) {
    module.hot.accept();
}

export default function* root() {
    yield fork(login);
    yield fork(chatroom);

}