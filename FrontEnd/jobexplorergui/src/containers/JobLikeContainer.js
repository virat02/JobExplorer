import { connect } from 'react-redux';
import JobLikeComponent from "../components/JobLikeComponent";
import * as actions from "../actions";

const stateToPropertyMapper = state => ({
    token: state.AuthReducer.token,
    jobsLiked: state.JobReducer.jobsLiked,
});

const dispatcherToPropsMapper = dispatch => ({
    getJobsLiked: token => actions.getJobsLiked(dispatch, token),
    dislikeJob: (jobId, token) => actions.dislikeJob(dispatch, jobId, token)
});

const JobLikeContainer = connect(stateToPropertyMapper, dispatcherToPropsMapper)
    (JobLikeComponent);

export default JobLikeContainer
