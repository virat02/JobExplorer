import * as constants from '../constants'

const defaultState = {
    setJobsLikePill: false
};

const ActivatePillReducer = (state = defaultState, action) => {

    switch (action.type) {

        case constants.ACTIVATE_JOB_LIKE_PILL:
            return { ...defaultState, setJobsLikePill: true };

        default:
            return state;
    }
};

export default ActivatePillReducer;