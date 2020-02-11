import React, { Component } from "react";
import { Router } from "react-router-dom";

export default class MovieForm extends Component {
    handleClick = () => {
        this.props.history.push("/movies");
    };

    render() {
        return (
            <div>
                <h1>Movie Form {this.props.match.params.id}</h1>
                <button className="btn btn-primary" onClick={this.handleClick}>
                    Save
                </button>
            </div>
        );
    }
}
