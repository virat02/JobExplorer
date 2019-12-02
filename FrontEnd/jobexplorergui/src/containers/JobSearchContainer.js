import { connect } from 'react-redux';
import JobSearchComponent from "../components/JobSearchComponent";

const stateToPropertyMapper = state => ({
    jobs: state.JobReducer.jobs,
});

const dispatcherToPropsMapper = dispatch => ({});

const JobSearchContainer = connect(stateToPropertyMapper, dispatcherToPropsMapper)
    (JobSearchComponent);

export default JobSearchContainer
