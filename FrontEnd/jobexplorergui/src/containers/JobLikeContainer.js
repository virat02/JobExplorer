import { connect } from 'react-redux';
import JobLikeComponent from "../components/JobLikeComponent";
import * as actions from "../actions";

const stateToPropertyMapper = state => ({
    token: state.AuthReducer.token,
    isAuthenticated: state.AuthReducer.token !== null ? true : false,
    jobsLiked: state.JobReducer.jobsLiked,
});

const dispatcherToPropsMapper = dispatch => ({
    getJobsLiked: token => actions.getJobsLiked(dispatch, token),
    remove: (jobId, token) => actions.removeLikedJob(dispatch, jobId, token)
});

const JobLikeContainer = connect(stateToPropertyMapper, dispatcherToPropsMapper)
    (JobLikeComponent);

export default JobLikeContainer
