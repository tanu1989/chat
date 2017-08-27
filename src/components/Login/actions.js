export const SET_USERNAME = 'SET_USERNAME';
export const SET_USERNAME_SUCCESS = 'SET_USERNAME_SUCCESS';
export const SET_USERNAME_ERROR = 'SET_USERNAME_ERROR';

export const setUser = (username, time) => {
    return{
        type: SET_USERNAME,
        username,
        time
    }
}