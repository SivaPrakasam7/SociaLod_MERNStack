import React, { Component } from "react";
import Textfield from '../components/inputs/textfield';
import Title from '../components/views/title';
import Icon from '../components/intract/icon';
import Profile from "../components/views/profile";
import Browse from "../functions/usecases/actions/browse";
import Selectprofile from "../functions/usecases/actions/profile";
import Registersubmit from "../functions/usecases/auth/register";

export default class Register extends Component {
    render() {
        return (
            <form className="center Glass-plate login" id="register">
                <Title title="Sign Up" align="margin" />
                <div className="padding">
                    <input type="file" id="browse" hidden={true} onChange={Selectprofile} />
                    <Profile id="profile" click={Browse} />
                    <Textfield name="name" type="text" icon="https://img.icons8.com/ios-filled/50/ffffff/gender-neutral-user.png" cont="name" />
                    <Textfield name="mobile" type="text" icon="https://img.icons8.com/ios-filled/50/ffffff/number-pad.png" cont="mobile no" />
                    <Textfield name="about" type="text" icon="https://img.icons8.com/ios-filled/50/ffffff/about.png" cont="about" />
                    <Textfield name="password" type="password" icon="https://img.icons8.com/ios-filled/50/ffffff/key-security.png" cont="password" />
                    <Textfield name="cpassword" type="password" icon="https://img.icons8.com/ios-filled/50/ffffff/good-pincode.png" cont="confrim password" />
                </div>
                <Icon src='https://img.icons8.com/ios-filled/50/ffffff/circled-chevron-right.png' click={() => { Registersubmit(this.props.match.params.id) }} />
            </form>
        );
    }
}