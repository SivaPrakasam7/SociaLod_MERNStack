import React, { Component } from "react";

export default class Paragraph extends Component {
    render() {
        return (
            <p className={"p " + this.props.align}>{this.props.cont}</p>
        );
    }
}