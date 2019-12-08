import React from 'react';
import { Route, Link } from "react-router-dom";
import JobLikeContainer from "../containers/JobLikeContainer";
import JobDislikeContainer from "../containers/JobDislikeContainer";
import JobBookmarkContainer from "../containers/JobBookmarkContainer";

export default class UserProfileComponent extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            jobsLikedPill: this.props.jobsLikedPill,
            jobsDislikedPill: this.props.jobsDislikedPill,
            jobsBookmarkedPill: this.props.jobsBookmarkedPill
        }
    }

    componentWillReceiveProps(nextProps, nextContext) {

        if (this.props !== nextProps) {
            this.setState({
                jobsLikedPill: nextProps.jobsLikedPill,
                jobsDislikedPill: nextProps.jobsDislikedPill,
                jobsBookmarkedPill: nextProps.jobsBookmarkedPill,
            });
        }
    };

    render() {

        return (
            <div className="container">
                <div>
                    <ul className="nav nav-pills">

                        <li className="nav-item"
                            onClick={this.props.activateJobsBookmarkedPill}>
                            <Link to={`/profile/jobsBookmarked`}
                                className={this.state.jobsBookmarkedPill ? "nav-link active" : "nav-link"}>
                                Jobs Bookmarked
                            </Link>
                        </li>

                        <li className="nav-item"
                            onClick={this.props.activateJobsLikedPill}>
                            <Link to={`/profile/jobsLiked`}
                                className={this.state.jobsLikedPill ? "nav-link active" : "nav-link"}>
                                Jobs Liked
                            </Link>
                        </li>

                        <li className="nav-item"
                            onClick={this.props.activateJobsDislikedPill}>
                            <Link to={`/profile/jobsDisliked`}
                                className={this.state.jobsDislikedPill ? "nav-link active" : "nav-link"}>
                                Jobs Disliked
                            </Link>
                        </li>

                    </ul>
                    <Route path={"/profile/jobsLiked"} component={JobLikeContainer} />
                    <Route path={"/profile/jobsDisliked"} component={JobDislikeContainer} />
                    <Route path={"/profile/jobsBookmarked"} component={JobBookmarkContainer} />
                </div>
            </div>
        );
    }
}

