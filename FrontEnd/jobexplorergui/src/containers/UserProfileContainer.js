import { connect } from 'react-redux';
import UserProfileComponent from "../components/UserProfileComponent";
import * as actions from "../actions";

const stateToPropertyMapper = state => ({
    localUsername: state.LocalStorageReducer.localUsername,
    token: state.LocalStorageReducer.token,
    setJobsLikePill: state.ActivatePillReducer.setJobsLikePill
});

export const dispatcherToPropsMapper = dispatch => ({
    activeJobsLikePill: () => actions.activeJobLikePill(dispatch)
});

const UserProfileContainer = connect(stateToPropertyMapper, dispatcherToPropsMapper)(UserProfileComponent);

export default UserProfileContainer;