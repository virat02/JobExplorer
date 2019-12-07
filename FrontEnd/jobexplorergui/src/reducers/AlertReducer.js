import * as constants from '../constants'

const AlertReducer = (state = {}, action) => {

    switch (action.type) {

        case constants.SET_LIKED_ALERT:
        case constants.SET_ALREADY_LIKED_ALERT:
            alert(action.message);
            return state;
        default:
            return state;
    }
};

export default AlertReducer;