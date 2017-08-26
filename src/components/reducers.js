import { combineReducers } from 'redux';

import login from '../components/Login/reducer';
import {chatRoom, messages} from '../components/Chatbox/reducer';

export const initialLocationState = {
    location: null,
    cameFromChildRoute: false,
    prevLocation: null
};

export const location = function location(
    state = initialLocationState,
    action
) {
    if (action.type === 'FETCH_LOCATION') {
        return {
            ...state,
            location: action.payload,
            prevLocation: state.location,
            cameFromChildRoute:
            state.location &&
            state.location.pathname.indexOf(action.payload.pathname) === 0
        };
    }
    return state;
};
export default combineReducers({
    location,
    login,
    chatRoom,
    messages
});