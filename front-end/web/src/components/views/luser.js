import React, { Component } from "react";
import Profile from "./profile";

export default class ListUser extends Component {
    render() {
        return (
            <table className="luser" onClick={this.props.click}>
                <tbody>
                    <tr>
                        <td><Profile src={this.props.img} /></td>
                        <td width="100%">
                            <table width="100%">
                                <tbody>
                                    <tr>
                                        <td width="50%" className="h2">{this.props.name}
                                        </td>
                                        <td>{this.props.time}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colSpan="2">{this.props.mail}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colSpan="2">{this.props.about}
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </td>
                    </tr>
                </tbody>
            </table>
        );
    }
}