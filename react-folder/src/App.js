import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { NavLink } from "react-router-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import DisplayingUsers from "./Components/DisplayingUsers";
import Regestraiton from "./Components/Regestraiton";
import RedirectorHome from "./Components/RedirectorHome";
import logo from './logo.svg';
import Switcher from "./Switcher";
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

  }


  render() {
    return (
      <BrowserRouter>
        <Switcher />
      </BrowserRouter>
    );
  }
}

export default App;
