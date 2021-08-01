import React, { Component } from "react";

export default class Search extends Component {
    render() {
        return (
            <div className="search Glass-plate textfield">
                <input id={this.props.id} type="text" name="search" placeholder={this.props.cont} />
                <img className="icon" alt="" src="https://img.icons8.com/ios-filled/50/ffffff/search.png" onClick={this.props.click} />
            </div>
        );
    }
}