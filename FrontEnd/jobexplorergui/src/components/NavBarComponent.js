import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import "../styles/NavBar.css";
import Select from 'react-select';
import { Checkbox, Button } from 'antd';

const languageOptions = [
    { label: 'None', value: "" },
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
            isSponsorshipAvailable: true,
            language: "",
            location: "",
            token: this.props.token,
            isAuthenticated: this.props.isAuthenticated
        }
    }

    renderLogin() {
        return this.state.isAuthenticated ?

            <Button type="button" onClick={() => this.props.logOut()}>Logout</Button>
            :
            <Link to={`/login`} className={'wbdv-link nav-link'}>
                Login
                <span className={"sr-only"}>(current)</span>
            </Link>
    }

    renderRegisterProfile() {
        return !this.state.isAuthenticated ?
            <Link to={`/register`} className={'wbdv-link nav-link'}>
                Register
                <span className={"sr-only"}>(current)</span>
            </Link>
            :
            <Link to={"/profile/" + this.props.localUsername}
                className={'wbdv-link nav-link'}>
                Profile
                    <span className={"sr-only"}>(current)</span>
            </Link>
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

    componentWillReceiveProps(nextProps, nextContext) {

        if (this.props !== nextProps) {
            this.setState({
                token: nextProps.token,
                isAuthenticated: nextProps.token !== null ? true : false
            });
        }
    };

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
                    {
                        this.state.isAuthenticated &&
                        <input className={"form-control wbdv-search-bar input-lg"}
                            type="text"
                            placeholder="Search for jobs"
                            onChange={event => this.props.searchTextChanged(event.target.value)}
                            aria-label="Search" />
                    }

                    {
                        this.state.isAuthenticated &&
                        <div className="col-md-2">
                            <Select options={languageOptions}
                                onChange={opt => this.setLanguage(opt.value)} />
                        </div>
                    }

                    {
                        this.state.isAuthenticated &&
                        <div className="col-md-2">
                            <Checkbox onChange={this.setJobType}>Full Time</Checkbox>
                        </div>
                    }

                    {
                        this.state.isAuthenticated &&
                        <div className="col-md-2">
                            <Checkbox onChange={this.setSponsorshipAvailable}>Sponsorsip available</Checkbox>
                        </div>
                    }

                    <div className="col-md-2">
                        {
                            this.state.isAuthenticated &&
                            <input className={"form-control wbdv-search-bar input-lg"}
                                type="text"
                                placeholder="Enter a location"
                                onChange={event => this.props.locationTextChanged(event.target.value)}
                                aria-label="Search" />
                        }
                        <Link to={`/jobs`}>
                            <button className="btn btn-success wbdv-search-btn"
                                type="button"
                                onClick={() =>
                                    this.props.searchJobs(this.props.searchText,
                                        this.state.language,
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