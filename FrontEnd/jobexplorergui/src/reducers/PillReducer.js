import * as constants from '../constants'

const defaultState = {
    jobsLikedPill: false,
    jobsDislikedPill: false,
    jobsBookmarkedPill: false
};

const PillReducer = (state = defaultState, action) => {

    switch (action.type) {

        case constants.ACTIVATE_JOBS_LIKED_PILL:
            return { ...defaultState, jobsLikedPill: true };

        case constants.ACTIVATE_JOBS_DISLIKED_PILL:
            return { ...defaultState, jobsDislikedPill: true };

        case constants.ACTIVATE_JOBS_BOOKMARKED_PILL:
            return { ...defaultState, jobsBookmarkedPill: true };

        default:
            return state;
    }
};

export default PillReducer;