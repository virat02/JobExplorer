import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import "../styles/jobCard.css";
import "../styles/jobDetails.css";
import { Button } from 'antd';

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
                    <h3>How To Apply</h3>
                    <div> {ReactHtmlParser(this.props.job.how_to_apply)} </div>

                    {
                        this.props.isAuthenticated &&

                        // TODO: Grayscale button if bookmarked already
                        <Button>
                            Bookmark
                        </Button>
                    }
                    {
                        this.props.isAuthenticated &&
                        // TODO: Grayscale button if liked already
                        <Button>
                            Like
                        </Button>
                    }

                    {
                        this.props.isAuthenticated &&
                        // TODO: Grayscale button if disliked already
                        <Button>
                            Dislike
                        </Button>
                    }

                </div>
            </div>
        );
    }
}