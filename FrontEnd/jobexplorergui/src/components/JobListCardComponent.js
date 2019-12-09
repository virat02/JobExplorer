import React from 'react';
import { Link } from "react-router-dom";

export default class JobListCardComponent extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="col-md-4">
                <div className="job-card">
                    {/* <img className="job-card-image"
                         src={this.props.job.posterUrl}
                         alt="Company Poster."/> */}
                    <div className="button">
                        <Link to={`/job/${this.props.job.id}`}>
                            Job details
                        </Link>
                    </div>
                    {
                        // (this.props.currentUsername === localStorage.getItem("username")
                        //     || localStorage.getItem("userRole") === "Admin") &&
                        <div className="remove-button">
                            <button className="btn btn-danger"
                                onClick={() => this.props
                                    .remove(this.props.job.id,
                                        this.props.token)}>
                                Remove
                            </button>
                        </div>
                    }
                </div>
            </div>
        );
    }
}