import React from "react";

export default function Input({ name, label, error, ...rest }) {
    // username = React.createRef();

    // componentDidMount() {
    //     this.username.current.focus();
    // }

    return (
        <div className="form-group">
            <label htmlFor={name}>{label}</label>
            <input
                {...rest}
                // ref={this.username}
                className="form-control"
                name={name}
                id={name}
                aria-describedby={name}
            ></input>
            {error && <div className="alert alert-danger">{error}</div>}
        </div>
    );
}
