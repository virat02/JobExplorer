import SearchBarComponent from "../components/SearchBarComponent.js";
import * as actions from "../actions";
import { connect } from "react-redux";

const stateToPropertyMapper = state => ({
    locationText: state.JobReducer.locationText,
    searchText: state.JobReducer.searchText,
    token: state.AuthReducer.token,
    isAuthenticated: state.AuthReducer.token !== null ? true : false
});

export const dispatcherToPropsMapper = dispatch => ({
    locationTextChanged: newLocationText => actions.locationTextChanged(dispatch, newLocationText),
    searchTextChanged: newSearchText => actions.searchTextChanged(dispatch, newSearchText),
    searchJobs: (newSearchText, language, jobType, isSponsorshipAvailable, location) =>
        actions.searchJobs(dispatch, newSearchText, language, jobType, isSponsorshipAvailable, location)
});

const SearchContainer = connect(stateToPropertyMapper, dispatcherToPropsMapper)
    (SearchBarComponent);

export default SearchContainer;