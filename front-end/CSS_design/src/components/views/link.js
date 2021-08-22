import React, { Component } from "react";

export default class Link extends Component {
    render() {
        return (
            <a className={"linktext " + this.props.align} href={this.props.link} onClick={this.props.click}>{this.props.title}</a>
        );
    }
}