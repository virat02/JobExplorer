import * as constants from '../constants'

const defaultState = {
    jobsLikedPill: false,
    jobsDislikedPill: false,
    jobsBookmarkedPill: false
};

const PillReducer = (state = defaultState, action) => {

    switch (action.type) {

        case constants.ACTIVATE_JOBS_LIKED_PILL:
            return { ...defaultState, jobsLikedPill: action.jobsLikedPill };

        case constants.ACTIVATE_JOBS_DISLIKED_PILL:
            return { ...defaultState, jobsDislikedPill: action.jobsDislikedPill };

        case constants.ACTIVATE_JOBS_BOOKMARKED_PILL:
            return { ...defaultState, jobsBookmarkedPill: action.jobsBookmarkedPill };

        case constants.DEACTIVATE_ALL_PILLS:
            return {
                jobsLikedPill: action.jobsLikedPill,
                jobsDislikedPill: action.jobsDislikedPill,
                jobsBookmarkedPill: action.jobsBookmarkedPill
            }

        default:
            return state;
    }
};

export default PillReducer;