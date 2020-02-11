import React, { Component } from "react";
import Joi from "joi-browser";
import Form from "./common/Form";

export default class LoginPage extends Form {
    state = {
        data: {
            username: "",
            password: ""
        },
        errors: {
            username: "",
            password: ""
        }
    };

    schema = {
        username: Joi.string()
            .required()
            .label("Username"),
        password: Joi.string()
            .required()
            .label("Password")
    };

    render() {
        return (
            <div>
                <h1>Login</h1>
                <form onSubmit={this.handleSubmit}>
                    {this.renderInput("username", "Username", "text")}
                    {this.renderInput("password", "Password", "password")}
                    {this.renderLabel("Log in")}
                </form>
            </div>
        );
    }
}
