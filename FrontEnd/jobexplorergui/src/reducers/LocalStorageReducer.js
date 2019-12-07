import * as constants from '../constants'

const LocalStorageReducer = (
    state = {
        localUsername: localStorage.getItem("username"),
        token: localStorage.getItem("token")
    },
    action) => {

    switch (action.type) {
        case constants.SET:
            return {
                localUsername: action.localUsername,
                token: action.token
            };
        case constants.RESET:
            return {
                localUsername: null,
                token: null
            };
        default:
            return state;
    }
};

export default LocalStorageReducer;