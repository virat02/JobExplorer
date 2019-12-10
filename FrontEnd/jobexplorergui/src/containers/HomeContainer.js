import { connect } from "react-redux";
import HomeComponent from "../components/HomeComponent";

const stateToPropertyMapper = state => ({
    token: state.AuthReducer.token,
    isAuthenticated: state.AuthReducer.token !== null
});

export const dispatcherToPropsMapper = dispatch => ({});

const HomeContainer = connect(stateToPropertyMapper, dispatcherToPropsMapper)(HomeComponent);

export default HomeContainer;