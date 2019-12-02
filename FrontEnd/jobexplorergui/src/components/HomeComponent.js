import React, { Component } from 'react';
import "../styles/Home.css";

export default class HomeComponent extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container-fluid">
                <h1> Welcome to Job Explorer !</h1>
            </div>
        )
    }
}