import { connect } from 'react-redux';
import JobDislikeComponent from "../components/JobDislikeComponent";
import * as actions from "../actions";

const stateToPropertyMapper = state => ({
    token: state.AuthReducer.token,
    jobsDisliked: state.JobReducer.jobsDisliked,
});

const dispatcherToPropsMapper = dispatch => ({
    getJobsDisliked: token => actions.getJobsDisliked(dispatch, token),
    likeJob: (jobId, token) => actions.likeJob(dispatch, jobId, token)
});

const JobDislikeContainer = connect(stateToPropertyMapper, dispatcherToPropsMapper)
    (JobDislikeComponent);

export default JobDislikeContainer
