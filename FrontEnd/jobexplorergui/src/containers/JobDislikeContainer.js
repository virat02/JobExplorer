import { connect } from 'react-redux';
import JobDislikeComponent from "../components/JobDislikeComponent";
import * as actions from "../actions";

const stateToPropertyMapper = state => ({
    token: state.AuthReducer.token,
    isAuthenticated: state.AuthReducer.token !== null ? true : false,
    jobsDisliked: state.JobReducer.jobsDisliked,
});

const dispatcherToPropsMapper = dispatch => ({
    getJobsDisliked: token => actions.getJobsDisliked(dispatch, token),
    remove: (jobId, token) => actions.removeDislikedJob(dispatch, jobId, token)
});

const JobDislikeContainer = connect(stateToPropertyMapper, dispatcherToPropsMapper)
    (JobDislikeComponent);

export default JobDislikeContainer
