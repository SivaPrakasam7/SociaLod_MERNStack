import { Component } from "react";

export default class View extends Component {
    render() {
        return (
            <div class="center view">
                <img src="https://img.icons8.com/ios-glyphs/30/ffffff/macos-close.png" class="right-top" onclick={this.props.click} />
            </div>
        );
    }
}