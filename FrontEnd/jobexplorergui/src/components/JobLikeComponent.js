import React from 'react';
import JobListCardComponent from "./JobListCardComponent";

export default class JobLikeComponent extends React.Component {

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
                        <JobListCardComponent
                            className="col-2"
                            getJobDetails={this.props.getJobDetails}
                            dislikeJob={this.props.dislikeJob}
                            job={job}
                            currentUsername={this.props.match.params.username}
                            key={job.id} />)
                }
            </div>
        );
    }
}

