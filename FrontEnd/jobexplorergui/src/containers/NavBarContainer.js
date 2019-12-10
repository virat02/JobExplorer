import NavBarComponent from "../components/NavBarComponent";
import * as actions from "../actions";
import { connect } from "react-redux";

const stateToPropertyMapper = state => ({
    token: state.AuthReducer.token,
    isAuthenticated: state.AuthReducer.token !== null
});

export const dispatcherToPropsMapper = dispatch => ({
    logOut: () => actions.logout(dispatch),
});

const NavBarContainer = connect(stateToPropertyMapper, dispatcherToPropsMapper)(NavBarComponent);

export default NavBarContainer;