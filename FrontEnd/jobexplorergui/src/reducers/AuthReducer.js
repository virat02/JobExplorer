import * as constants from '../constants';
import { updateObject } from '../utility';

const initialState = {
    token: null,
    error: null,
    RegistrationError: null,
    loading: false
}

const authStart = (state, action) => {
    return updateObject(state, {
        error: null,
        loading: true
    });
}

const authSuccess = (state, action) => {
    return updateObject(state, {
        token: action.token,
        error: null,
        loading: false
    });
}

const authFail = (state, action) => {
    return updateObject(state, {
        error: action.error,
        loading: false
    });
}

const authRegFail = (state, action) => {
    return updateObject(state, {
        RegistrationError: action.RegistrationError,
        loading: false
    });
}

const authLogout = (state, action) => {
    return updateObject(state, {
        token: null
    });
}

const AuthReducer = (state = initialState, action) => {
    switch (action.type) {
        case constants.AUTH_START: return authStart(state, action);
        case constants.AUTH_SUCCESS: return authSuccess(state, action);
        case constants.AUTH_FAIL: return authFail(state, action);
        case constants.AUTH_LOGOUT: return authLogout(state, action)
        case constants.REGISTRATION_AUTH_FAIL: return authRegFail(state, action)
        default:
            return state;
    }
}

export default AuthReducer;