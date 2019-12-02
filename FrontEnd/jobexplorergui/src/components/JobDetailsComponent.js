import React from 'react';
import "../styles/jobCard.css";
import "../styles/jobDetails.css";

export default class JobDetailsComponent extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount = () =>
        this.props.getJobDetails(this.props.match.params.jobId);

    render() {
        return (
            <div className="container">
                <h1 className="my-4">{this.props.job.title}</h1>

                <div className="row">

                    <div className="col-md-6">
                        <img className="img-fluid"
                            src={this.props.job.company_url}
                            alt="Company Poster." />
                    </div>

                    <div className="col-md-6">
                        <h3 className="my-3">Job Description</h3>
                        <p>{this.props.job.description}</p>
                        <h3 className="my-3">Job Details</h3>
                    </div>

                </div>
            </div>
        );
    }
}