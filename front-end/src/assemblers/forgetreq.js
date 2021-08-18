import React, { Component } from "react";
import Textfield from '../components/inputs/textfield';
import Title from '../components/views/title';
import Icon from '../components/intract/icon';
import Resetreq from "../functions/usecases/auth/reqreset";

export default class ForgetReq extends Component {
    render() {
        return (
            <form className="center Glass-plate login" id="forgetreq">
                <Title title="Request forget password" />
                <div className="padding">
                    <Textfield name="email" type="text" icon="https://img.icons8.com/ios-filled/50/ffffff/mail.png" cont="email" />
                </div>
                <Icon src='https://img.icons8.com/ios-filled/50/ffffff/circled-chevron-right.png' click={()=>{Resetreq()}} />
            </form>
        );
    }
}