import React, { Component } from "react";

export default class Button extends Component {
    render() {
        return (
            <input type="button" className="button" name={this.props.name} placeholder={this.props.cont} value={this.props.txt} onClick={this.props.click}/>
        );
    }
}