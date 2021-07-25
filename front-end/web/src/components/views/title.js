import { Component } from "react";

export default class Title extends Component {
    render() {
        return (
            <label class={"title "+this.props.align}>{this.props.title}</label>
        );
    }
}