import React, { Component } from "react";

export default class Title extends Component {
    render() {
        return (
            <label className={"title " + this.props.align}>{this.props.title}</label>
        );
    }
}