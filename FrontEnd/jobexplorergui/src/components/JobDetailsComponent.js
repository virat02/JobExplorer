import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import "../styles/jobCard.css";
import "../styles/jobDetails.css";

export default class JobDetailsComponent extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount = () =>
        this.props.getJobDetails(this.props.match.params.jobId)

    render() {
        return (
            <div className="container">
                <h1 className="my-4">{this.props.job.title}</h1>

                <div className="row">
                    <h3>Job Description</h3>
                    <div> {ReactHtmlParser(this.props.job.description)} </div>
                    <h3>Job Details</h3>
                </div>
            </div>
        );
    }
}