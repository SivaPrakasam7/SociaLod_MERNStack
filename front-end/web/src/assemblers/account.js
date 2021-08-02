import React, { Component } from "react";
import CKIE from "../functions/usecases/auth/ckcheck";

export default class Account extends Component {
    render() {
        if (CKIE()) {
            window.location = "/signup";
        } else {
            return (
                <div id="myaccount" className="mcenter searchmain">
                </div>
            )
        }
    }
}