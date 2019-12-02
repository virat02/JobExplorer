import * as constants from '../constants'

const LocalStorageReducer = (state = { localUsername: localStorage.getItem("username") },
    action) => {

    switch (action.type) {
        case constants.SET:
            return {
                localUsername: action.localUsername
            };
        case constants.RESET:
            return {
                localUsername: null
            };
        default:
            return state;
    }
};

export default LocalStorageReducer;