import React from "react";
import { Button } from "@material-ui/core";
class CellSorted extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            order: "false"
        }
        this.changeOrder = this.changeOrder.bind(this);
    }
    changeOrder() {
        let temp;

        if (this.state.order == "asc") {
            temp = "desc";
        } else {
            temp = "asc";
        }
        this.setState({ order: temp });
        this.props.changeOrder(temp, this.props.text);
    }
    render() {
        return (
            <Button onClick={this.changeOrder}>{this.props.text}</Button>
        );
    }
}
export default CellSorted;