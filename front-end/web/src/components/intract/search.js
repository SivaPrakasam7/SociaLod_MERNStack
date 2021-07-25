import { Component } from "react";

export default class Search extends Component {
    render() {
        return (
            <div class="search Glass-plate textfield">
                <input type="text" name="search" placeholder="Username" />
                <img class="icon" src="https://img.icons8.com/ios-filled/50/ffffff/search.png" onClick={this.props.click} />
            </div>
        );
    }
}