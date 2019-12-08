import { connect } from 'react-redux';
import JobDislikeComponent from "../components/JobDislikeComponent";
import * as actions from "../actions";

const stateToPropertyMapper = state => ({
    jobsDisliked: state.JobsReducer.jobsDisliked,
});

const dispatcherToPropsMapper = dispatch => ({
    getJobsDisliked: () => actions.getJobsDisliked(dispatch),
    likeJob: (jobId) => actions.likeJob(dispatch, jobId)
});

const JobDislikeContainer = connect(stateToPropertyMapper, dispatcherToPropsMapper)
    (JobDislikeComponent);

export default JobDislikeContainer
