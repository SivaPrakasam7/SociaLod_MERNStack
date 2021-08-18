import React, { Component } from "react";
import Textfield from '../components/inputs/textfield';
import Title from '../components/views/title';
import Icon from '../components/intract/icon';
import Link from '../components/views/link';
import RegisterReqSubmit from "../functions/usecases/auth/registerreq";

export default class RegisterReq extends Component {
    render() {
        return (
            <form className="center Glass-plate login" id="registerreq">
                <Link align="right-top fsize" link="/#/signin" title="Sign In" />
                <Title title="Get Sign Up Link" align="margin" />
                <Textfield name="email" type="text" icon="https://img.icons8.com/ios-filled/50/ffffff/mail.png" cont="email" />
                <Icon src='https://img.icons8.com/ios-filled/50/ffffff/circled-chevron-right.png' click={RegisterReqSubmit} />
            </form>
        );
    }
}