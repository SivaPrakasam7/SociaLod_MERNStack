import React, { Component } from "react";
import Textfield from '../components/inputs/textfield';
import Title from '../components/views/title';
import Icon from '../components/intract/icon';
import Link from '../components/views/link';
import Loginsubmit from '../functions/usecases/auth/login';
import Resetreq from "../functions/usecases/auth/reqreset";

export default class Login extends Component {
    render() {
        return (
            <form className="center Glass-plate login" id="login">
                <Link align="right-top fsize" link="/signup" title="Sign Up" />
                <Title title="Sign In" />
                <div className="padding">
                    <Textfield name="email" type="text" icon="https://img.icons8.com/ios-filled/50/ffffff/mail.png" cont="email" />
                    <Textfield name="password" type="password" icon="https://img.icons8.com/ios-filled/50/ffffff/key-security.png" cont="password" />
                </div>
                <Icon src='https://img.icons8.com/ios-filled/50/ffffff/circled-chevron-right.png' click={Loginsubmit} />
                <Link align="right-bottom fsize" click={Resetreq} title="Forget password" />
            </form>
        );
    }
}