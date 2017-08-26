export const GET_ROOMS = 'GET_ROOMS';
export const GET_ROOMS_SUCCESS = 'GET_ROOMS_SUCCESS';
export const GET_ROOMS_ERROR = 'GET_ROOMS_ERROR';

export const GET_USERS = 'GET_USERS';
export const GET_USERS_SUCCESS = 'GET_USERS_SUCCESS';
export const GET_USERS_ERROR = 'GET_USERS_ERROR';

export const GET_MESSAGES = 'GET_MESSAGES';
export const GET_MESSAGES_SUCCESS = 'GET_MESSAGES_SUCCESS';
export const GET_MESSAGES_ERROR = 'GET_MESSAGES_ERROR';


export const POST_MESSAGES = 'POST_MESSAGES';
export const POST_MESSAGES_SUCCESS = 'POST_MESSAGES_SUCCESS';
export const POST_MESSAGES_ERROR = 'POST_MESSAGES_ERROR';

export const getRooms = () => {
    return {
        type: GET_ROOMS
    }
}

export const fetchUsers = (id) => {
    return {
        type: GET_USERS,
        id
    }
}

export const getMessages = (id) => {
    return {
        type: GET_MESSAGES,
        id
    }
}

export const postMessage = (id, name, message) => {
    return {
        type: POST_MESSAGES,
        id,
        payload: {
            name,
            message
        }
    }
}