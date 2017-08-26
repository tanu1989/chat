import * as actions from './actions'
import moment from 'moment';

export const initialState = {

    loading:false,
    user: null,
    logTime: null,
    error: false,
    errorDetail: null,

};

const reduceSetUserName = (state, action) => {
    return {
        ...state,
        loading:true
    }

};

const reduceSetUserNameSuccess = (state, action) => {
    return{
        ...state,
        loading: false,
        logTime: moment().format(),
        user: action.payload
    }

};

const reduceSetUserNameError =(state, action) => {
    return {
        ...state,
        loading:false,
        error: true,
        errorDetail: action.payload
    }

};

const login = (state = initialState, action) => {
    switch(action.type){
        case actions.SET_USERNAME:
            return reduceSetUserName(state, action);
        case actions.SET_USERNAME_SUCCESS:
            return reduceSetUserNameSuccess(state, action);
        case actions.SET_USERNAME_ERROR:
            return reduceSetUserNameError(state, action);
        default:
           return state;
        }
};
export default login;