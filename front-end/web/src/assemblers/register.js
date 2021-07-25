import { Component } from "react";
import Textfield from '../components/inputs/textfield';
import Title from '../components/views/title';
import Icon from '../components/intract/icon';
import Link from '../components/views/link';

export default class Register extends Component {
    render() {
        return (
            <form class="center Glass-plate login">
                <Link align="right-top fsize" link="/signin" title="Sign In" />
                <Title title="Sign Up" />
                <Textfield name="name" type="text" icon="https://img.icons8.com/ios-filled/50/ffffff/gender-neutral-user.png" cont="name" />
                <Textfield name="email" type="text" icon="https://img.icons8.com/ios-filled/50/ffffff/mail.png" cont="email" />
                <Textfield name="mobile" type="text" icon="https://img.icons8.com/ios-filled/50/ffffff/number-pad.png" cont="mobile no" />
                <Textfield name="about" type="text" icon="https://img.icons8.com/ios-filled/50/ffffff/about.png" cont="about" />
                <Textfield name="password" type="password" icon="https://img.icons8.com/ios-filled/50/ffffff/key-security.png" cont="password" />
                <Textfield name="cpassword" type="password" icon="https://img.icons8.com/ios-filled/50/ffffff/good-pincode.png" cont="confrim password" />
                <Icon src='https://img.icons8.com/ios-filled/50/ffffff/circled-chevron-right.png' />
            </form>
        );
    }
}