import { Component } from "react";
import Profile from "./profile";

export default class ListUser extends Component {
    render() {
        return (
            <table class="luser">
                <tr>
                    <td><Profile src={this.props.img} /></td>
                    <td width="100%">
                        <table width="100%">
                            <tr>
                                <td width="50%" class="h2">{this.props.name}
                                </td>
                                <td>{this.props.time}
                                </td>
                            </tr>
                            <tr>
                                <td colspan="2">{this.props.mail}
                                </td>
                            </tr>
                            <tr>
                                <td colspan="2">{this.props.about}
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
            </table>
        );
    }
}