import { connect } from 'react-redux';
import JobListComponent from "../components/JobListComponent";
import * as actions from "../actions";

const stateToPropertyMapper = state => ({
    jobsLiked: state.JobReducer.jobsLiked
});

export const dispatcherToPropsMapper = dispatch => ({
    getJobsLiked: username => actions.getJobsLiked(dispatch, username),
    dislikeJob: (jobId, username) => actions.dislikeJob(dispatch, jobId, username)
});

const JobListContainer = connect(stateToPropertyMapper, dispatcherToPropsMapper)(JobListComponent);

export default JobListContainer;