import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import "../styles/NavBar.css";
import Select from 'react-select';
import { Checkbox } from 'antd';

const languageOptions = [
    { label: 'Java', value: "java" },
    { label: 'Python', value: "python" },
    { label: 'JavaScript', value: "javascript" },
    { label: 'Scala', value: "scala" },
    { label: 'React', value: "react" },
    { label: 'Angular', value: "sngular" },
    { label: 'SQL', value: "sql" },
];


export default class NavBarComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            jobType: "",
            isSponsorshipAvailable: false,
            language: "",
            location: "",
        }
    }

    renderLogin() {
        return this.props.isAuthenticated ?
            <Link to={""} id={"logoutLink"}
                className={"wbdv-link nav-link"}
                onClick={this.props.logOut}>
                Logout
            </Link>
            :
            <Link to={`/login`} className={'wbdv-link nav-link'}>
                Login
                <span className={"sr-only"}>(current)</span>
            </Link>
    }

    renderRegisterProfile() {
        if (this.props.localUsername == null) {
            return <Link to={`/register`} className={'wbdv-link nav-link'}>
                Register
                <span className={"sr-only"}>(current)</span>
            </Link>
        }
    }

    setJobType = event => {
        return event.target.checked === true ?
            this.setState({
                jobType: "Full Time"
            })
            :
            this.setState({
                jobType: "Part Time"
            });
    }

    setSponsorshipAvailable = event =>
        this.setState({
            isSponsorshipAvailable: event.target.checked
        });

    setLanguage = language =>
        this.setState({
            language: language
        });

    render() {
        return (
            <header className={"container-fluid"}>
                <nav className={"navbar navbar-expand-md navbar-dark fixed-top row"}>
                    <div className={"col-md-2"}>
                        <a className={"navbar-brand"} href={"/"}>
                            <span>
                                Find a Job
                            </span>
                        </a>
                    </div>
                    <div className="col-md-2">
                        <Select options={languageOptions}
                            onChange={opt => this.setLanguage(opt.value)} />
                    </div>

                    <div className="col-md-2">
                        <Checkbox onChange={this.setJobType}>Full Time</Checkbox>
                    </div>

                    <div className="col-md-2">
                        <Checkbox onChange={this.setSponsorshipAvailable}>Sponsorsip available</Checkbox>
                    </div>

                    <div className="col-md-2">
                        <input className={"form-control wbdv-search-bar input-lg"}
                            type="text"
                            placeholder="Enter a location"
                            onChange={event => this.props.locationTextChanged(event.target.value)}
                            aria-label="Search" />
                        <Link to={`/jobs`}>
                            <button className="btn btn-success wbdv-search-btn"
                                type="button"
                                onClick={() =>
                                    this.props.searchJobs(this.state.language,
                                        this.state.jobType,
                                        this.state.isSponsorshipAvailable,
                                        this.props.locationText)}>
                                <span className={"text-center wbdv-search-btn-text"}>
                                    Search
                                </span>
                            </button>
                        </Link>
                    </div>

                    <div className="col-md-4">
                        <div className="navbar" id="navbarCollapse">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link to={`/`} className='wbdv-link nav-link'>
                                        Home
                                        <span className="sr-only">(current)</span>
                                    </Link>
                                </li>
                                <li className={"nav-item"}>
                                    {this.renderLogin()}
                                </li>
                                <li className={"nav-item"}>
                                    {this.renderRegisterProfile()}
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        )
    }
}