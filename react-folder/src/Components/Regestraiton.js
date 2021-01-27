import React, { Fragment } from "react";
import Paper from "@material-ui/core/Paper";
import { Grid, TextField, RadioGroup, FormControlLabel, FormLabel, Radio, Button } from '@material-ui/core';
import { connect } from "react-redux";
import { Select, MenuItem } from "@material-ui/core";
import axios from "axios";
import { addUser } from "../Actions/UserActions";
class Regestraiton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: "",
            email: "",
            age: null,
            arrayAges: null,
            age: 0,
            status: null
        }
        this.handleSelect = this.handleSelect.bind(this);
        this.handleUserName = this.handleUserName.bind(this);
        this.handleEmail = this.handleEmail.bind(this);
        this.sendDataToServer = this.sendDataToServer.bind(this);

    }
    sendDataToServer() {
        var user = {
            userName: this.state.userName,
            email: this.state.email,
            age: this.state.age
        }
        this.props.addUser(user)
        // return axios.request({
        //     method: 'POST',
        //     url: "/add_user",
        //     data: {
        //         userName: this.state.userName,
        //         email: this.state.email,
        //         age: this.state.age
        //     }
        // }).then(res => {
        //     if (res.data.status == "notvalidate") {
        //         this.setState({ status: "not validate" })
        //     } else if (res.data.status == "succ") {
        //         this.setState({ status: "successfully", userName: "", email: "", age: 0 });
        //     } else {
        //         this.setState({ status: "userName exsit" });
        //     }
        // });
    }

    handleSelect(event) {
        this.setState({ age: event.target.value })
    }
    componentWillMount() {
        var arrayAges = [];
        arrayAges[0] = "pick age";
        for (var i = 1; i < 100; i++) {
            arrayAges[i] = i;
        }
        this.setState({ arrayAges: arrayAges })
    }

    handleUserName(event) {
        this.setState({ userName: event.target.value });

    }
    handleEmail(event) {
        this.setState({ email: event.target.value });

    }

    render() {
        return (
            <div>
                <React.Fragment>
                    <Grid container spacing={3} style={{ width: '50%', marginLeft: 'auto', marginRight: 'auto', marginTop: 16 }}>
                        <Grid item xs={12} md={12}>
                            <TextField required label="userName" fullWidth onChange={this.handleUserName} value={this.state.userName} />
                        </Grid>
                        <Grid item xs={12} md={12}>
                            <TextField label="email" id="standard-full-width" required id="email" fullWidth onChange={this.handleEmail} value={this.state.email} />
                        </Grid>
                        <Grid item xs={12} md={12} className="lefttext">
                            {<Select value={this.state.age} onChange={this.handleSelect} style={{ width: "100%" }} >
                                {this.state.arrayAges.map((element, index) => <MenuItem value={index}>{this.state.arrayAges[index]}</MenuItem>)}
                            </Select>}

                        </Grid>


                        <Grid item xs={12} md={12} >
                            <h1 style={{ color: this.props.statusAdding === "successfully" ? "green" : "red" }}>{this.props.statusAdding}</h1>
                            <Button onClick={() => this.sendDataToServer()} variant="contained" style={{ width: "100%", height: "50px" }}>Create User</Button>
                        </Grid>
                    </Grid>
                </React.Fragment >
            </div>);
    }
}
function mapStateToProps(state) {
    return {
        statusAdding: state.user.statusAdding
    }
}
function mapDispatchToProps(dispatch) {
    return {
        addUser: (user) => dispatch(addUser(user))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Regestraiton);