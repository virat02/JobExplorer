import { connect } from 'react-redux';
import * as actions from "../actions";
import JobDetailsComponent from "../components/JobDetailsComponent";

const stateToPropertyMapper = state => ({
    token: state.AuthReducer.token,
    isAuthenticated: state.AuthReducer.token !== null ? true : false,
    job: state.JobReducer.job,
    isLiked: state.JobReducer.isLiked,
    isBookmarked: state.JobReducer.isBookmarked,
    isDisliked: state.JobReducer.isDisliked
});

const dispatcherToPropsMapper = dispatch => ({
    getJobDetails: id => actions.getJobDetails(dispatch, id),
    likeJob: (jobId, token) => actions.likeJob(dispatch, jobId, token),
    dislikeJob: (jobId, token) => actions.dislikeJob(dispatch, jobId, token),
    bookmarkJob: (jobId, token) => actions.bookmarkJob(dispatch, jobId, token),
});

const JobDetailsContainer = connect(stateToPropertyMapper, dispatcherToPropsMapper)
    (JobDetailsComponent);

export default JobDetailsContainer
