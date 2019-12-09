import * as constants from '../constants'

const JobReducer = (state = {
    jobs: [],
    locationText: '',
    searchText: '',
    job: '',
    isLiked: '',
    isDisliked: '',
    isBookmarked: '',
    jobsLiked: [],
    jobsDisliked: [],
    jobsBookmarked: []
}, action) => {
    switch (action.type) {

        case constants.LOCATION_TEXT_CHANGED:
            return { ...state, locationText: action.locationText };

        case constants.SEARCH_JOB:
            return { ...state, jobs: action.jobs };

        case constants.JOB_DETAILS:
            return { ...state, job: action.job };

        case constants.SEARCH_TEXT_CHANGED:
            return { ...state, searchText: action.searchText };

        case constants.JOB_LIKED:
            return { ...state, isLiked: action.isLiked };

        case constants.JOB_BOOKMARKED:
            return { ...state, isBookmarked: action.isBookmarked };

        case constants.JOB_DISLIKED:
            return { ...state, isLiked: action.isDisliked };

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