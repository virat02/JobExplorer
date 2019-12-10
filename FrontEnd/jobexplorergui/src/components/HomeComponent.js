import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import "antd/dist/antd.css";
import '../styles/HomeComponent.css';

import LoginContainer from '../containers/LoginContainer';
import NavBarContainer from '../containers/NavBarContainer';
import FooterContainer from '../containers/FooterContainer';
import RegisterContainer from '../containers/RegisterContainer';
import JobSearchContainer from '../containers/JobSearchContainer';
import JobDetailsContainer from "../containers/JobDetailsContainer";
import UserProfileContainer from "../containers/UserProfileContainer";
import SearchBarContainer from "../containers/SearchBarContainer";
import App from "../components/App";

export default class HomeComponent extends Component {

  render() {
    return (
      <div className="parent">
        <NavBarContainer />
        <SearchBarContainer />
        <div className="wbdv-body">
          <Route exact path={"/home"} component={App} />
          <Route exact path={"/login"} component={LoginContainer} />
          <Route exact path={"/register"} component={RegisterContainer} />
          <Route exact path={"/jobs"} component={JobSearchContainer} />
          <Route exact path={"/job/:jobId"} component={JobDetailsContainer} />
          <Route path={"/profile"} component={UserProfileContainer} />
        </div>
        <FooterContainer />
      </div>
    )
  }
}