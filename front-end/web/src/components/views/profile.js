import React, { Component } from "react";

export default class Profile extends Component {
    render() {
        return (
            <img id={this.props.id} onClick={this.props.click} className={"profile " + this.props.align} src={this.props.src} alt={this.props.alt} />
        );
    }
}