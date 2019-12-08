import React from 'react';
import JobListCardComponent from "./JobListCardComponent";

export default class JobLikeComponent extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getJobsDisliked();
    }

    render() {
        return (
            <div className="row">
                {
                    this.props.jobsDisliked.map(job =>
                        <JobListCardComponent
                            className="col-2"
                            getJobDetails={this.props.getJobDetails}
                            likeJob={this.props.likeJob}
                            job={job}
                            key={job.id} />)
                }
            </div>
        );
    }
}

