import React from 'react';
import { Route, Link } from "react-router-dom";
import JobLikeContainer from "../containers/JobLikeContainer";
import UserService from "../services/userService";

const userService = new UserService();

export default class UserProfileComponent extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            userView: '',
            jobsLikedText: '',
        }
    }

    componentDidMount() {
        userService.getUsers(this.props.match.params.username)
            .then(user => {
                this.setState({
                    userView: user[0],
                    jobsLikedText: user[0].username === this.props.localUsername ?
                        "Jobs You Like" : "Jobs " + user[0].firstName + " Liked"
                })
            });
    }

    componentWillReceiveProps(nextProps, nextContext) {

        if (nextProps.match.params.username !== this.state.userView.username) {
            userService.getUsers(nextProps.match.params.username)
                .then(user => {
                    this.setState({
                        userView: user[0],
                        jobsLikedText: user[0].username === this.props.localUsername ?
                            "Jobs You Like" : "Jobs " + user[0].firstName + " Liked"
                    })
                });
        }
    }

    render() {

        return (
            <div className="container">
                <div>
                    <ul className="nav nav-pills">
                        {
                            // (this.state.userView.dtype === "Fan" ||
                            //     (this.props.localRole === "Admin" && this.state.userView.dtype === "Fan")) &&
                            <li className="nav-item"
                                onClick={this.props.activeJobsLikePill}>
                                <Link to={`/profile/${this.state.userView.username}/jobsLiked`}
                                    className={this.props.setMoviesLikePill ? "nav-link active" : "nav-link"}>
                                    {this.state.jobsLikedText}
                                </Link>
                            </li>
                        }
                    </ul>
                    <Route path={"/profile/:username/jobsLiked"} component={JobLikeContainer} />
                </div>
            </div>
        );
    }
}

