import React from 'react';
import { Icon, Spin } from 'antd';
import JobSearchCardComponent from "./JobSearchCardComponent";
import "../styles/jobCard.css";

const antIcon = <Icon type="loading" style={{ fontSize: 24 }} spin />;

export default class JobSearchComponent extends React.Component {

    constructor(props) {
        super(props);
    }

    renderCards() {
        return (
            <div className="row">
                {
                    this.props.jobs.length !== 0 ?

                        this.props.jobs.map(job =>
                            <JobSearchCardComponent
                                className="col-2"
                                getJobDetails={this.props.getJobDetails}
                                job={job}
                                key={job.id} />)
                        :
                        <div className="container-fluid row">
                            <h3>No Jobs found matching your criteria, search again!</h3>
                        </div>
                }
            </div>
        );
    }

    render() {
        return (
            <div className="container-fluid">
                {
                    this.props.isLoading ?
                        <Spin indicator={antIcon} />
                        :
                        this.renderCards()
                }
            </div>
        );
    }
}


