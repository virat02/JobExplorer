import { connect } from "react-redux";
import * as actions from "../actions";
import HomeComponent from "../components/HomeComponent";

const stateToPropertyMapper = state => ({});
export const dispatcherToPropsMapper = dispatch => ({});

const HomeContainer = connect(stateToPropertyMapper, dispatcherToPropsMapper)(HomeComponent);

export default HomeContainer;