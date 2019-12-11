import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import "../styles/jobCard.css";
import "../styles/HomeComponent.css";
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
                </div>
                <div className="row">{ReactHtmlParser(this.props.job.description)} </div>


                <div className="row">
                    <h3>How To Apply</h3>
                </div>
                <div className="row">{ReactHtmlParser(this.props.job.how_to_apply)} </div>


                <div>
                    {
                        this.props.isAuthenticated &&

                        <Button
                            onClick={() => this.props.bookmarkJob(this.props.job.id,
                                this.props.token)}>
                            Bookmark
                        </Button>
                    }
                    {
                        this.props.isAuthenticated &&

                        <Button
                            onClick={() => this.props.likeJob(this.props.job.id,
                                this.props.token)}>
                            Like
                        </Button>
                    }

                    {
                        this.props.isAuthenticated &&

                        <Button
                            onClick={() => this.props.dislikeJob(this.props.job.id,
                                this.props.token)}>
                            Dislike
                        </Button>
                    }
                </div>

            </div>

        );
    }
}