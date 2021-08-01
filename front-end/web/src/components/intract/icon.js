import React, { Component } from "react";

export default class Icon extends Component {
    render() {
        return (
            <img className={"icon " + this.props.align} src={this.props.src} alt="" onClick={this.props.click} />
        );
    }
}