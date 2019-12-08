import { connect } from 'react-redux';
import UserProfileComponent from "../components/UserProfileComponent";
import * as actions from "../actions";

const stateToPropertyMapper = state => ({
    jobsLikedPill: state.PillReducer.jobsLikedPill,
    jobsDisLikedPill: state.PillReducer.jobsDisLikedPill,
    jobsBookmarkedPill: state.PillReducer.jobsBookmarkedPill
});

export const dispatcherToPropsMapper = dispatch => ({
    activateJobsLikedPill: () => actions.activateJobsLikedPill(dispatch),
    activateJobsDislikedPill: () => actions.activateJobsDislikedPill(dispatch),
    activateJobsBookmarkedPill: () => actions.activateJobsBookmarkedPill(dispatch)
});

const UserProfileContainer = connect(stateToPropertyMapper, dispatcherToPropsMapper)
    (UserProfileComponent);

export default UserProfileContainer;