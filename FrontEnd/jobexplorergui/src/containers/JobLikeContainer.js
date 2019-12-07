import { connect } from 'react-redux';
import JobLikeComponent from "../components/JobLikeComponent";
import * as actions from "../actions";

const stateToPropertyMapper = state => ({
    jobsLiked: state.JobsReducer.jobsLiked,
});

const dispatcherToPropsMapper = dispatch => ({
    getJobsLiked: username => actions.getJobsLiked(dispatch, username),
    dislikeJob: (jobId, username) => actions.dislikeJob(dispatch, jobId, username)
});

const JobLikeContainer = connect(stateToPropertyMapper, dispatcherToPropsMapper)(JobLikeComponent);

export default JobLikeContainer
