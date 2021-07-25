import { Component } from "react";

export default class Profile extends Component {
    render() {
        return (
            <img class={"profile "+this.props.align} src={this.props.src} alt={this.props.alt} />
        );
    }
}