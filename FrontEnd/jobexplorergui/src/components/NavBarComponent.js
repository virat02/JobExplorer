import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import "../styles/NavBar.css";
import { Button } from 'antd';


export default class NavBarComponent extends Component {
    constructor(props) {
        super(props);
    }

    renderLogin() {
        return this.props.isAuthenticated ?

            <Button type="button" onClick={() => this.props.logOut()}>Logout</Button>
            :
            <Link to={`/login`} className={'wbdv-link nav-link'}>
                Login
                <span className={"sr-only"}>(current)</span>
            </Link>
    }

    renderRegisterProfile() {
        return !this.props.isAuthenticated ?
            <Link to={`/register`} className={'wbdv-link nav-link'}>
                Register
                <span className={"sr-only"}>(current)</span>
            </Link>
            :
            <Link to={"/profile"}
                className={'wbdv-link nav-link'}>
                Profile
                    <span className={"sr-only"}>(current)</span>
            </Link>
    }

    render() {
        return (
            <header className={"container-fluid"}>
                <nav className={"navbar navbar-expand-md navbar-bgcolor row"}>
                    <div className={"col-md-2"}>
                        <a className={"navbar-brand wbdv-link"} href={"/"}>
                            <span>
                                Find a Job
                            </span>
                        </a>
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