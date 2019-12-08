import { connect } from 'react-redux';
import JobLikeComponent from "../components/JobLikeComponent";
import * as actions from "../actions";

const stateToPropertyMapper = state => ({
    jobsLiked: state.JobsReducer.jobsLiked,
});

const dispatcherToPropsMapper = dispatch => ({
    getJobsLiked: () => actions.getJobsLiked(dispatch),
    dislikeJob: (jobId) => actions.dislikeJob(dispatch, jobId)
});

const JobLikeContainer = connect(stateToPropertyMapper, dispatcherToPropsMapper)
    (JobLikeComponent);

export default JobLikeContainer
