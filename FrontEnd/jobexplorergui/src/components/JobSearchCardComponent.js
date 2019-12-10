import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'antd';

export default class JobSearchCardComponent extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="col-sm-4">
                <div className="card job-card" >
                    <div className="card-body">
                        <h5 className="card-title">{this.props.job.title}</h5>
                        <Link to={`/job/${this.props.job.id}`}>
                            <Button className="card-link">
                                Job Details
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}