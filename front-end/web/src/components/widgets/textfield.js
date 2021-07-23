import { Component } from "react";

export default class Textfield extends Component {
    render() {
        return (
            <table class="textfield">
                <tr>
                    <td>
                        <img src={this.props.icon} alt='' />
                    </td>
                    <td>
                        <input type={this.props.type} name={this.props.name} placeholder={this.props.cont} />
                    </td>
                </tr>
            </table>
        );
    }
}