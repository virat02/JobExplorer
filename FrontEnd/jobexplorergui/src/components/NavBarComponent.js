import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import history from "../History";
import "../styles/NavBar.css";

export default class NavBarComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            searchValue: "Jobs",
            placeholder: "Search for Jobs"
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

    render() {
        let newSearchText;

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
                    <div className="col-md-4">
                        <div className="row">
                            <input className={"form-control wbdv-search-bar input-lg"}
                                type="text"
                                placeholder={this.state.placeholder}
                                onChange={() => this.props.searchTextChanged(newSearchText.value)}
                                ref={node => newSearchText = node}
                                aria-label="Search" />
                            <button className="btn btn-success wbdv-search-btn"
                                type="button"
                                onClick={() => {
                                    history.push('/jobs');
                                    this.props.searchJobsByKeyword(this.props.searchText);
                                }}>
                                <span className={"text-center wbdv-search-btn-text"}>
                                    Search
                                    </span>
                            </button>
                        </div>
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