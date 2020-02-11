import React, { Component } from "react";
import { Route, Router, Switch, Redirect } from "react-router-dom";
import Movies from "./components/movies";
import Customers from "./components/Customers";
import Rentals from "./components/Rentals";
import NavBar from "./components/NavBar";
import NotFound from "./components/NotFound";
import "./App.css";
import MovieForm from "./components/MovieForm";
import LoginPage from "./components/LoginPage";

class App extends Component {
    render() {
        return (
            <React.Fragment>
                <NavBar />

                <div className="container">
                    <Switch>
                        <Route path="/customers" component={Customers} />
                        <Route path="/rentals" component={Rentals} />
                        <Route path="/movies/:id" component={MovieForm} />
                        <Route path="/movies" component={Movies} />
                        <Route path="/not-found" component={NotFound} />
                        <Route path="/login" component={LoginPage} />
                        <Redirect exact from="/" to="/movies" />
                        <Redirect to="/not-found" />
                    </Switch>
                </div>
            </React.Fragment>
        );
    }
}

export default App;
