import * as constants from '../constants'

const JobReducer = (state = {
    jobs: [],
    searchText: '',
    job: '',
}, action) => {
    switch (action.type) {

        case constants.SEARCH_TEXT_CHANGED:
            return {
                jobs: state.jobs,
                searchText: action.searchText,
                job: state.job,
            };

        case constants.SEARCH_JOB:
            return {
                jobs: action.jobs,
                searchText: state.searchText,
                job: state.job,
            };

        case constants.JOB_DETAILS:
            return {
                jobs: state.jobs,
                searchText: state.searchText,
                job: action.job,
            };

        default:
            return state;
    }
};

export default JobReducer;