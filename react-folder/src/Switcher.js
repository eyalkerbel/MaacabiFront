import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { NavLink } from "react-router-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import DisplayingUsers from "./Components/DisplayingUsers";
import Regestraiton from "./Components/Regestraiton";
import RedirectorHome from "./Components/RedirectorHome";


export default class Switcher extends React.Component {
    render() {
        return (
            <div className="full-page">
                <div className="transfer-buttons">

                    <NavLink
                        to="/"
                    >
                        <Button onClick={() => this.setState({ vla: "da" })}
                        >
                            <h2>Regestraiton</h2>

                        </Button></NavLink>
                    <NavLink
                        to="/users"
                    >
                        <Button onClick={() => this.setState({ vla: "slal" })}
                        >
                            <h2>Displaying Users</h2>

                        </Button></NavLink>
                </div>
                <Switch>
                    <Route path="/users" > <DisplayingUsers /></Route>
                    <Route path="/registration" > <Regestraiton /></Route>
                    <Route exact render={() => <RedirectorHome />} />
                </Switch>
            </div>);
    }
}