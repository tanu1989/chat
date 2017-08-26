import * as actions from './actions'


const initialState = {

    rooms :{
        loading:false,
        roomDetails: null,
        error: false,
        errorDetail: null
    },
    room: {
      loading: false,
        detail: null,
        error: false,
        errorDetail:null
    }
};

const messageInitialState = {
    roomMessages: {
        loading: false,
        messages: null,
        error: false,
        errorDetail: null
    }
}


const reduceFetchRooms = (state, action) => {
    return {
        ...state,
        rooms:{
            ...state.rooms,
            loading:true
        }
    }
};

const reduceFetchRoomsSuccess = (state, action) => {
    return{
        ...state,
        rooms: {
            ...state.rooms,
            loading: false,
            roomDetails: action.payload,
        }
    }
};

const reduceFetchRoomsError =(state, action) => {
    return {
        ...state,
        rooms: {
            ...state.rooms,
            loading: false,
            error: true,
            errorDetail: action.payload
        }
    }
};

const reduceFetchUsers = (state, action) => {
    return {
        ...state,
        room:{
            ...state.room,
            loading:true
        }
    }
};

const reduceFetchUsersSuccess = (state, action) => {
    return{
        ...state,
        room: {
            ...state.room,
            loading: false,
            detail: action.payload,
        }
    }
};

const reduceFetchUsersError =(state, action) => {
    return {
        ...state,
        room: {
            ...state.room,
            loading: false,
            error: true,
            errorDetail: action.payload
        }
    }
};

const reduceFetchMessages = (state, action) => {
    return {
        ...state,
        roomMessages:{
            ...state.roomMessages,
            loading:true
        }
    }
};

const reduceFetchMessagesSuccess = (state, action) => {
    return{
        ...state,
        roomMessages: {
            ...state.roomMessages,
            loading: false,
            messages: action.payload,
        }
    }
};

const reduceFetchMessagesError =(state, action) => {
    return {
        ...state,
        roomMessages: {
            ...state.roomMessages,
            loading: false,
            error: true,
            errorDetail: action.payload
        }
    }
};

const chatRoom = (state = initialState, action) => {
    switch(action.type){
        case actions.GET_ROOMS:
            return reduceFetchRooms(state, action);
        case actions.GET_ROOMS_SUCCESS:
            return reduceFetchRoomsSuccess(state, action);
        case actions.GET_ROOMS_ERROR:
            return reduceFetchRoomsError(state, action);
        case actions.GET_USERS:
            return reduceFetchUsers(state, action);
        case actions.GET_USERS_SUCCESS:
            return reduceFetchUsersSuccess(state, action);
        case actions.GET_USERS_ERROR:
            return reduceFetchUsersError(state, action);
        default:
            return state;
    }
};
const messages = (state = messageInitialState, action) => {
    switch(action.type) {
        case actions.GET_MESSAGES:
            return reduceFetchMessages(state, action);
        case actions.GET_MESSAGES_SUCCESS:
            return reduceFetchMessagesSuccess(state, action);
        case actions.GET_MESSAGES_ERROR:
            return reduceFetchMessagesError(state, action);
        case actions.POST_MESSAGES:
        case actions.POST_MESSAGES_SUCCESS:
        case actions.POST_MESSAGES_ERROR:
            return {
                ...state
            };
        default:
            return {
            ...state
        };
    }
}
export {chatRoom, messages};