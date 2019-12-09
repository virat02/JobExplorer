import React from 'react';
import JobListCardComponent from "./JobListCardComponent";

export default class JobLikeComponent extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getJobsBookmarked(this.props.token);
    }

    render() {
        return (
            <div className="row">
                {
                    this.props.jobsBookmarked.map(job =>
                        <JobListCardComponent
                            className="col-2"
                            getJobDetails={this.props.getJobDetails}
                            remove={this.props.remove}
                            token={this.props.token}
                            job={job}
                            key={job.id} />)
                }
            </div>
        );
    }
}

