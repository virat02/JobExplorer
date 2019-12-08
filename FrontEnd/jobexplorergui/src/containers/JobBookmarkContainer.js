import { connect } from 'react-redux';
import JobBookmarkComponent from "../components/JobBookmarkComponent";
import * as actions from "../actions";

const stateToPropertyMapper = state => ({
    jobsBookmarked: state.JobsReducer.jobsBookmarked,
});

const dispatcherToPropsMapper = dispatch => ({
    getJobsBookmarked: () => actions.getJobsBookmarked(dispatch),
    unbookmarkJob: (jobId) => actions.unbookmarkJob(dispatch, jobId)
});

const JobBookmarkContainer = connect(stateToPropertyMapper, dispatcherToPropsMapper)
    (JobBookmarkComponent);

export default JobBookmarkContainer
