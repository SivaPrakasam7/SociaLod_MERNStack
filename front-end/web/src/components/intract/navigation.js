import { Component } from "react";

export default class Navigation extends Component {
    render() {
        return (
            <nav>
                <a class="a" href="/">Home</a>
                <a class="a" href="/search">Search</a>
                <a class="a" href="/signup">Sign Up/In</a>
            </nav>
        );
    }
}