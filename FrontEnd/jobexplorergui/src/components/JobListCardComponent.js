import React from 'react';
import { Link } from "react-router-dom";
import { Button } from 'antd';

export default class JobListCardComponent extends React.Component {

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
                            <Button className="card-link"
                                style={{ marginRight: '2px' }}>
                                Job Details
                            </Button>
                        </Link>

                        {
                            this.props.isAuthenticated &&
                            <Button type="danger"
                                style={{ marginRight: '10px' }}
                                onClick={() => this.props
                                    .remove(this.props.job.id,
                                        this.props.token)}>
                                Remove
                            </Button>
                        }
                    </div>
                </div>
            </div>
        );
    }
}