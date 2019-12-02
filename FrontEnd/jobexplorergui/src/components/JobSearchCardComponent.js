import React from 'react';
import { Link } from "react-router-dom";

export default class JobSearchCardComponent extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="col-md-4">
                <div className="job-card">
                    <img className="job-card-image"
                        src={this.props.job.company_url}
                        alt="Company Poster." />
                    <div className="button">
                        <Link to={`/movie/${this.props.job.id}`}>
                            Job details
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}