import React, { Component } from "react";

export default class Licon extends Component {
    render() {
        return (
            <a title={this.props.title} target="_blank" rel="noopener noreferrer" href={this.props.link}><img className={"icon " + this.props.align} alt="" src={this.props.src} onClick={this.props.click} /></a>
        );
    }
}