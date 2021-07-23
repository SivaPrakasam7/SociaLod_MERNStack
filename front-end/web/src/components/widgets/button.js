import { Component } from "react";

export default class Button extends Component {
    render() {
        return (
            <input type="button" class="button" name={this.props.name} placeholder={this.props.cont} value={this.props.txt} />
        );
    }
}