import { connect } from 'react-redux';
import * as actions from "../actions";
import JobSearchComponent from "../components/JobSearchComponent";

const stateToPropertyMapper = state => ({
    jobs: state.JobReducer.jobs,
    isLoading: state.SearchReducer.isLoading
});

const dispatcherToPropsMapper = dispatch => ({
    getJobDetails: id => actions.getJobDetails(dispatch, id)
});

const JobSearchContainer = connect(stateToPropertyMapper, dispatcherToPropsMapper)
    (JobSearchComponent);

export default JobSearchContainer
