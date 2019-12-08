import * as constants from '../constants'

const JobReducer = (state = {
    jobs: [],
    locationText: '',
    searchText: '',
    job: '',
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

        default:
            return state;
    }
};

export default JobReducer;