import React from 'react';
import { Link } from "react-router-dom";
import "../styles/jobCard.css";

const JobCardComponent = ({ job }) =>

    <div className="tile">
        <a className="details-btn" href={`/job/${job.id}`}>
            <div className="tile__media">
                <img className="tile__img"
                    src={job.company_logo} alt="Company logo." />
            </div>
            <div className="tile__details">
                <div className="tile__title">
                    <Link className="details-btn" to={`/job/${job.id}`}>
                        {job.title}
                    </Link>
                </div>
            </div>
        </a>
    </div>;

export default JobCardComponent;