import { Component } from "react";

export default class Link extends Component {
    render() {
        return (
            <a class={"linktext " + this.props.align} href={this.props.link}>{this.props.title}</a>
        );
    }
}