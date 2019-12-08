import React, { Component } from 'react';
import './Routes.css';
import "antd/dist/antd.css";

import { Route } from 'react-router-dom';
import LoginContainer from './containers/LoginContainer';
import NavBarContainer from './containers/NavBarContainer';
import FooterContainer from './containers/FooterContainer';
import RegisterContainer from './containers/RegisterContainer';
import HomeContainer from './containers/HomeContainer';
import JobSearchContainer from './containers/JobSearchContainer';
import JobDetailsContainer from "./containers/JobDetailsContainer";
import UserProfileContainer from "./containers/UserProfileContainer";

export default class Routes extends Component {

    render() {
        return (
            <div>
                <NavBarContainer />
                <div className={"wbdv-body"}>
                    <Route exact path={"/"} component={HomeContainer} />
                    <Route exact path={"/home"} component={HomeContainer} />
                    <Route exact path={"/login"} component={LoginContainer} />
                    <Route exact path={"/register"} component={RegisterContainer} />
                    <Route exact path={"/jobs"} component={JobSearchContainer} />
                    <Route exact path={"/job/:jobId"} component={JobDetailsContainer} />
                    <Route exact path={"/profile"} component={UserProfileContainer} />
                </div>
                <FooterContainer />
            </div>
        )
    }
}