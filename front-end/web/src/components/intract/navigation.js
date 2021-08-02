import React, { Component } from "react";
import CKIE from "../../functions/usecases/auth/ckcheck";
import Myaccount from "../../functions/usecases/user/account";

export default class Navigation extends Component {
    render() {
        if (CKIE()) {
            return (<nav>
                <a className="a" href="/#/">Home</a>
                <a className="a" href="/#/signup">Sign Up/In</a>
            </nav>)
        } else {
            return (<nav>
                <a className="a" href="/#/">Home</a>
                <a className="a" href="/#/search">Search</a>
                <a className="a" onClick={Myaccount} href="/#/account">Account</a>
            </nav>)
        }
    }
}