import { Component } from "react";

export default class Search extends Component {
    render() {
        return (
            <div>
                <img class={"icon " + this.props.align} src={this.props.src} onClick={this.props.click} />
            </div>
        );
    }
}