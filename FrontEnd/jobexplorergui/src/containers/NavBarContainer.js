import NavBarComponent from "../components/NavBarComponent";
import * as actions from "../actions";
import { connect } from "react-redux";

const stateToPropertyMapper = state => ({
    searchText: state.JobReducer.searchText,
    localUsername: state.LocalStorageReducer.localUsername
});

export const dispatcherToPropsMapper = dispatch => ({
    searchTextChanged: newText => actions.searchTextChanged(dispatch, newText),
    searchJobsByKeyword: jobTitle => actions.searchJobsByKeyword(dispatch, jobTitle),
    logOut: () => actions.logOut(dispatch),
});

const NavBarContainer = connect(stateToPropertyMapper, dispatcherToPropsMapper)(NavBarComponent);

export default NavBarContainer;