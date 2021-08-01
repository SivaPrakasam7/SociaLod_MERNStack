import React, { Component } from "react";
import CKIE from "../../functions/usecases/auth/ckcheck";

export default class Navigation extends Component {
    render() {
        if (CKIE()) {
            return (<nav>
                <a className={window.location.pathname === "/" ? "a active" : "a"} href="/">Home</a>
                <a className={(window.location.pathname === "/signup") || (window.location.pathname === "/signin") ? "a active" : "a"} href="/signup">Sign Up/In</a>
            </nav>)
        } else {
            return (<nav>
                <a className={window.location.pathname === "/" ? "a active" : "a"} href="/">Home</a>
                <a className={window.location.pathname === "/search" ? "a active" : "a"} href="/search">Search</a>
                <a className={window.location.pathname === "/account" ? "a active" : "a"} href="/account">Account</a>
            </nav>)
        }
    }
}