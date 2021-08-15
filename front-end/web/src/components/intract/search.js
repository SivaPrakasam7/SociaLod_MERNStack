import React, { Component } from "react";
import Secure from "../../functions/security/secure";

export default class Search extends Component {
    render() {
        return (
            <div className="search Glass-plate textfield">
                <input id={this.props.id} type="text" name={this.props.name} placeholder={this.props.cont} onKeyDown={Secure} onPaste={Secure} />
                <img className="icon" alt="" src="https://img.icons8.com/ios-filled/50/ffffff/search.png" onClick={this.props.click} />
            </div>
        );
    }
}