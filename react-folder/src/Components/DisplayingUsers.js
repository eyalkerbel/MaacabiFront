import React, { Fragment } from "react";
import Paper from "@material-ui/core/Paper";
import axios from "axios";
import LoadingPage from "./LoadingPage";
import { connect } from "react-redux";
import { getAllUsers } from "../Actions/UserActions";
import { TableCell, Table, TableHead, TableSortLabel, TableBody, TableRow, Button } from "@material-ui/core";
import CellSorted from "./CellSorted";
class DisplayingUsers extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            loading: true,
            sortableMode: -1
        }
        this.changeOrder = this.changeOrder.bind(this);
        this.sorting = this.sorting.bind(this);
    }
    componentDidMount() {
        // return axios.request({
        //     method: 'POST',
        //     url: "/get_users",
        // }).then(res => {
        //     this.props.setAllUsers(res.data.users);
        //     this.setState({ loading: false, users: res.data.users });
        // });
        this.props.setAllUsers();
    }
    UNSAFE_componentWillReceiveProps(nextProps) {
        this.setState({ users: nextProps.users });
    }

    changeOrder(orderStatus, columnName) {
        if (orderStatus == "asc") {
            this.sorting(-1, columnName);
        } else if (orderStatus == "desc") {
            this.sorting(1, columnName);
        }
    }
    sorting(num, columnName) {
        var temp = [];
        temp = this.state.users.sort(function (a, b) {
            if (a[columnName] < b[columnName]) { return -num; }
            if (a[columnName] > b[columnName]) { return num; }
            return 0;
        });
        this.setState({ users: temp });
    }

    render() {
        return (
            this.props.userFetcing == false ? <LoadingPage /> :
                <div className="full-page">
                    <Table>
                        <TableHead>
                            <TableCell ><CellSorted changeOrder={this.changeOrder} text="userName" /></TableCell>
                            <TableCell ><CellSorted changeOrder={this.changeOrder} text="email" /></TableCell>
                            <TableCell><CellSorted changeOrder={this.changeOrder} text="age" /></TableCell>
                        </TableHead>
                        <TableBody>
                            {this.state.users.map(el => <TableRow>
                                <TableCell>{el.userName}</TableCell>
                                <TableCell>{el.email}</TableCell>
                                <TableCell>{el.age}</TableCell>
                            </TableRow>
                            )}
                        </TableBody>
                    </Table> </div >
        );
    }
}
function mapDispatchToProps(dispatch) {
    return {
        setAllUsers: (users) => dispatch(getAllUsers(users))
    }
}
function mapStateToProps(state) {
    return {
        users: state.user.users,
        userFetcing: state.user.userFetcing
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(DisplayingUsers);