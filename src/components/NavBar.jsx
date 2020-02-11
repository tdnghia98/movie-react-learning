import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";

export default class NavBar extends Component {
    render() {
        return (
            <React.Fragment>
                <nav className="navbar navbar-expand-sm navbar-light bg-light">
                    <Link to="/" className="navbar-brand">
                        Navbar
                    </Link>

                    <div
                        className="collapse navbar-collapse"
                        id="collapsibleNavId"
                    >
                        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                            <li className="nav-item">
                                <NavLink to="/movies" className="nav-link">
                                    Movies
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/customers" className="nav-link">
                                    Customers
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/rentals" className="nav-link">
                                    Rentals
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/login" className="nav-link">
                                    Login
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </nav>
            </React.Fragment>
        );
    }
}
