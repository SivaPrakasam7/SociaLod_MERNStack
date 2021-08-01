import React, { Component } from "react";

export default class Licon extends Component {
    render() {
        return (
            <a target="_blank" rel="noopener noreferrer" href={this.props.link}><img className={"icon " + this.props.align} alt="" src={this.props.src} onClick={this.props.click} /></a>
        );
    }
}