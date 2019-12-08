import * as constants from '../constants'

const JobReducer = (state = {
    jobs: [],
    locationText: '',
    job: '',
}, action) => {
    switch (action.type) {

        case constants.LOCATION_TEXT_CHANGED:
            return {
                jobs: state.jobs,
                locationText: action.locationText,
                job: state.job,
            };

        case constants.SEARCH_JOB:
            return {
                jobs: action.jobs,
                locationText: state.locationText,
                job: state.job,
            };

        case constants.JOB_DETAILS:
            return {
                jobs: state.jobs,
                locationText: state.locationText,
                job: action.job,
            };

        default:
            return state;
    }
};

export default JobReducer;