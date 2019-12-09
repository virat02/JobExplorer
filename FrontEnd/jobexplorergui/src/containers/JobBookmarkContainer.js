import { connect } from 'react-redux';
import JobBookmarkComponent from "../components/JobBookmarkComponent";
import * as actions from "../actions";

const stateToPropertyMapper = state => ({
    token: state.AuthReducer.token,
    jobsBookmarked: state.JobReducer.jobsBookmarked,
});

const dispatcherToPropsMapper = dispatch => ({
    getJobsBookmarked: token => actions.getJobsBookmarked(dispatch, token),
    remove: (jobId, token) => actions.unbookmarkJob(dispatch, jobId, token)
});

const JobBookmarkContainer = connect(stateToPropertyMapper, dispatcherToPropsMapper)
    (JobBookmarkComponent);

export default JobBookmarkContainer
