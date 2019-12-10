import * as actions from "../actions";
import { connect } from "react-redux";
import RegisterComponent from "../components/RegisterComponent";

const stateToPropertyMapper = state => ({
    loading: state.AuthReducer.loading,
    error: state.AuthReducer.error
});

export const dispatcherToPropsMapper = dispatch => ({
    doRegister: (username, email, password, password2) =>
        actions.register(dispatch, username, email, password, password2)
});

const RegisterContainer = connect(stateToPropertyMapper, dispatcherToPropsMapper)(RegisterComponent);

export default RegisterContainer;