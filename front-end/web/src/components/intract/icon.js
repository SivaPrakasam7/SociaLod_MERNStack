import { Component } from "react";

export default class Icon extends Component {
    render() {
        return (
            <img class={"icon " + this.props.align} src={this.props.src} alt="" onClick={this.props.click} />
        );
    }
}