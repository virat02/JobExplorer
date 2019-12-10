import * as constants from '../constants'

const defaultState = {
    jobs: [],
    locationText: '',
    searchText: '',
    job: '',
    jobsLiked: [],
    jobsDisliked: [],
    jobsBookmarked: []
}

const JobReducer = (state = defaultState, action) => {
    switch (action.type) {

        case constants.LOCATION_TEXT_CHANGED:
            return { ...state, locationText: action.locationText };

        case constants.SEARCH_JOB:
            return { ...state, jobs: action.jobs };

        case constants.JOB_DETAILS:
            return { ...state, job: action.job };

        case constants.SEARCH_TEXT_CHANGED:
            return { ...state, searchText: action.searchText };

        case constants.GET_JOBS_LIKED:
            return { ...state, jobsLiked: action.jobsLiked };

        case constants.GET_JOBS_DISLIKED:
            return { ...state, jobsDisliked: action.jobsDisliked };

        case constants.GET_JOBS_BOOKMARKED:
            return { ...state, jobsBookmarked: action.jobsBookmarked };

        default:
            return state;
    }
};

export default JobReducer;