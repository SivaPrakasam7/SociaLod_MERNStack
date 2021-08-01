import React, { Component } from "react";
import Textfield from '../components/inputs/textfield';
import Title from '../components/views/title';
import Icon from '../components/intract/icon';
import Forgetsubmit from "../functions/usecases/auth/forget";

export default class Forget extends Component {
    render() {
        return (
            <form className="center Glass-plate login" id="forget">
                <Title title="Reset password" />
                <div className="padding">
                    <Textfield name="fpassword" type="password" icon="https://img.icons8.com/ios-filled/50/ffffff/key-security.png" cont="password" />
                    <Textfield name="fcpassword" type="password" icon="https://img.icons8.com/ios-filled/50/ffffff/good-pincode.png" cont="confrim password" />
                </div>
                <Icon src='https://img.icons8.com/ios-filled/50/ffffff/circled-chevron-right.png' click={()=>{Forgetsubmit(this.props.match.params.id)}} />
            </form>
        );
    }
}