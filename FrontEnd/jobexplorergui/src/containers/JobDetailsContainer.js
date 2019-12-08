import { connect } from 'react-redux';
import * as actions from "../actions";
import JobDetailsComponent from "../components/JobDetailsComponent";

const stateToPropertyMapper = state => ({
    job: state.JobReducer.job,
    token: state.AuthReducer.token,
    isAuthenticated: state.AuthReducer.token !== null ? true : false,
    isLiked: state.JobReducer.isLiked,
    isBookmarked: state.JobReducer.isBookmarked
});

const dispatcherToPropsMapper = dispatch => ({
    getJobDetails: id => actions.getJobDetails(dispatch, id),
    likeJob: (jobId, username) => actions.likeJob(dispatch, jobId, username),
    dislikeJob: (jobId, username) => actions.likeJob(dispatch, jobId, username),
    bookmarkJob: (jobId, username) => actions.bookmarkJob(dispatch, jobId, username),
});

const JobDetailsContainer = connect(stateToPropertyMapper, dispatcherToPropsMapper)
    (JobDetailsComponent);

export default JobDetailsContainer
