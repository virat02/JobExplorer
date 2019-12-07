import { connect } from 'react-redux';
import * as actions from "../actions";
import JobDetailsComponent from "../components/JobDetailsComponent";

const stateToPropertyMapper = state => ({
    job: state.JobReducer.job,
    localUsername: state.LocalStorageReducer.localUsername,
    token: state.LocalStorageReducer.token
});

const dispatcherToPropsMapper = dispatch => ({
    getJobDetails: id => actions.getJobDetails(dispatch, id),
    likeJob: (jobId, username) => actions.likeJob(dispatch, jobId, username)
});

const JobDetailsContainer = connect(stateToPropertyMapper, dispatcherToPropsMapper)(JobDetailsComponent);

export default JobDetailsContainer
