import React from 'react';
import JobCardComponent from "./JobCardComponent";
import "../styles/jobCard.css";

export default class JobListComponent extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div className="row">
                {
                    this.props.jobsLiked.map(job =>
                        <JobCardComponent
                            className="col-2"
                            getJobDetails={this.props.getJobDetails}
                            job={job}
                            dislikeJob={this.props.dislikeJob}
                            token={this.props.token}
                            isAuthenticated={this.props.isAuthenticated}
                            key={job.jobId} />)
                }
            </div>
        );
    }
}