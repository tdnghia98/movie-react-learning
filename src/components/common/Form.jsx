import React, { Component } from "react";
import Joi from "joi-browser";
import Input from "./Input";

export default class Form extends Component {
    state = {
        data: {},
        errors: {}
    };

    validate = () => {
        const options = { abortEarly: false };
        const { error } = Joi.validate(this.state.data, this.schema, options);
        if (!error) return null;

        const errors = {};
        for (let item of error.details) errors[item.path[0]] = item.message;
        return errors;
    };

    validateInput = ({ name, value }) => {
        const validateObject = { [name]: value };
        const schema = { [name]: this.schema[name] };
        const { error } = Joi.validate(validateObject, schema);
        return error ? error.details[0].message : null;
    };

    handleChange = ({ currentTarget: input }) => {
        const errors = { ...this.state.errors };
        const errorMessage = this.validateInput(input);
        if (errorMessage) errors[input.name] = errorMessage;
        else delete errors[input.name];

        const data = { ...this.state.data };
        data[input.name] = input.value;
        this.setState({ data, errors });
    };

    handleSubmit = e => {
        e.preventDefault();

        const errors = this.validate();
        this.setState({ errors: errors || {} });
        if (errors) return;

        this.doSubmit();
    };

    doSubmit = () => {
        // HTTP Call
    };

    renderLabel(label) {
        return (
            <button disabled={this.validate()} className="btn btn-primary">
                Sign in
            </button>
        );
    }

    renderInput(name, label, type = "text") {
        const { data, errors } = this.state;

        return (
            <Input
                name={name}
                label={label}
                placeholder={label}
                type={type}
                value={data[name]}
                autoFocus={true}
                onChange={this.handleChange}
                error={errors[name]}
            />
        );
    }
}
