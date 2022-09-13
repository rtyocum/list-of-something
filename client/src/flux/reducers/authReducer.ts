import {
    AUTH_ERROR,
    LOGIN_FAILED,
    LOGIN_SUCCESS,
    LOGOUT_SUCCESS,
    REGISTER_FAILED,
    REGISTER_SUCCESS,
    USER_LOADED,
    USER_LOADING,
} from '../types';

const initialState = {
    token: null,
    isAuthenticated: false,
    loading: false,
    user: {
        permissionLevel: 0,
    },
};

const authReducer = (state: any = initialState, action: any) => {
    switch (action.type) {
        case USER_LOADING:
            return {
                ...state,
                loading: true,
            };
        case USER_LOADED:
        case LOGIN_SUCCESS:
        case REGISTER_SUCCESS:
            console.log(action.payload);
            return {
                token: action.payload.access_token,
                isAuthenticated: true,
                loading: false,
                user: action.payload.user,
            };
        case LOGIN_FAILED:
        case REGISTER_FAILED:
        case LOGOUT_SUCCESS:
        case AUTH_ERROR:
            return {
                token: null,
                isAuthenticated: false,
                loading: false,
                user: {
                    permissionLevel: 0,
                },
            };
        default:
            return state;
    }
};

export default authReducer;
