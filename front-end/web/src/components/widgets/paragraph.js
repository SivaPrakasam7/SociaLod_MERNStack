import { Component } from "react";

export default class Paragraph extends Component {
    render() {
        return (
            <p class={"p "+this.props.align}>{this.props.cont}</p>
        );
    }
}