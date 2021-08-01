import React, { Component } from "react";
import Profile from "../components/views/profile";
import Title from "../components/views/title";
import Paragraph from "../components/views/paragraph";
import close from "../functions/usecases/actions/close";
import CKIE from "../functions/usecases/auth/ckcheck";

export default class View extends Component {
    render() {
        if (CKIE()) {
            window.location = "/signup";
        } else {
            let rows = [];
            for (let i = 0; i < 5; i++) {
                rows.push(<tr key={i}><td>{i}</td><td>ok</td></tr>);
            }
            return (
                <div className="view">
                    <img alt="" src="https://img.icons8.com/ios-glyphs/30/ffffff/macos-close.png" className="right-top" onClick={close} />
                    <Profile />
                    <Title align="h2" title="Name" />
                    <Paragraph align="unmargin" cont="Nothing to show" />
                    <div className="scrollview">
                        <div className="Glass-plate searchplate">
                            <Title title="Facebook" align="bold h1" />
                            <Profile />
                            <Title align="h2" title="Name" />
                            <Paragraph cont="Nothing to show" />
                            <table className="table">
                                <tbody>
                                    <tr><th colSpan="2">Info</th></tr>
                                    {rows}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            );
        }
    }
}