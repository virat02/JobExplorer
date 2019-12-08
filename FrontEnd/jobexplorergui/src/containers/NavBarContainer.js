import NavBarComponent from "../components/NavBarComponent";
import * as actions from "../actions";
import { connect } from "react-redux";

const stateToPropertyMapper = state => ({
    locationText: state.JobReducer.locationText,
    localUsername: state.LocalStorageReducer.localUsername,
    token: state.AuthReducer.token,
    isAuthenticated: state.AuthReducer.token !== null
});

export const dispatcherToPropsMapper = dispatch => ({
    locationTextChanged: newLocationText => actions.locationTextChanged(dispatch, newLocationText),
    searchJobs: (language, jobType, isSponsorshipAvailable, location) =>
        actions.searchJobs(dispatch, language, jobType, isSponsorshipAvailable, location),
    logOut: () => actions.logout(dispatch),
});

const NavBarContainer = connect(stateToPropertyMapper, dispatcherToPropsMapper)(NavBarComponent);

export default NavBarContainer;