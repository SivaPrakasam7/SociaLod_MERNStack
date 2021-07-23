import { Component } from "react";

export default class Navigation extends Component {
    render() {
        return (
            <nav>
                <a class="a" href="/">Home</a>
                <a class="a" href="/signin">Sign In/Up</a>
            </nav>
        );
    }
}