import React from 'react';
import JobCardComponent from "./JobCardComponent";
import "../styles/jobCard.css";

export default class JobListComponent extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getJobsLiked(this.props.match.params.username);
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
                            currentUsername={this.props.match.params.username}
                            key={job.jobId} />)
                }
            </div>
        );
    }
}