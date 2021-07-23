import { Component } from "react";
import Textfield from '../components/widgets/textfield';
import Title from '../components/widgets/title';
import Icon from '../components/widgets/icon';
import Link from '../components/widgets/link';

export default class Login extends Component {
    render() {
        return (
            <form class="center Glass-plate login">
                <Link align="right-top fsize" link="/signup" title="Sign Up" />
                <Title title="Sign In" />
                <Textfield name="email" type="text" icon="https://img.icons8.com/ios-filled/50/ffffff/mail.png" cont="email" />
                <Textfield name="password" type="password" icon="https://img.icons8.com/ios-filled/50/ffffff/key-security.png" cont="password" />
                <Icon src='https://img.icons8.com/ios-filled/50/ffffff/circled-chevron-right.png' />
            </form>
        );
    }
}