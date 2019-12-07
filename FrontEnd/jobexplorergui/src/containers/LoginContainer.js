import { connect } from 'react-redux';
import * as actions from "../actions";
import LoginComponent from "../components/LoginComponent";

const stateToPropertyMapper = state => ({
    loading: state.AuthReducer.loading,
    error: state.AuthReducer.error
});

const dispatcherToPropsMapper = dispatch => ({
    doLogin: (username, password) => actions.login(dispatch, username, password)
});

const LoginContainer = connect(stateToPropertyMapper, dispatcherToPropsMapper)(LoginComponent);

export default LoginContainer
