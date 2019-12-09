import { connect } from 'react-redux';
import JobListComponent from "../components/JobListComponent";
import * as actions from "../actions";

const stateToPropertyMapper = state => ({
    token: state.AuthReducer.token,
    jobsLiked: state.JobReducer.jobsLiked
});

export const dispatcherToPropsMapper = dispatch => ({
    getJobsLiked: token => actions.getJobsLiked(dispatch, token),
    dislikeJob: (jobId, token) => actions.dislikeJob(dispatch, jobId, token)
});

const JobListContainer = connect(stateToPropertyMapper, dispatcherToPropsMapper)(JobListComponent);

export default JobListContainer;