import React, { Component } from "react";

export default class Textfield extends Component {
    render() {
        return (
            <table className="textfield">
                <tbody>
                    <tr>
                        <td>
                            <img src={this.props.icon} alt='' />
                        </td>
                        <td>
                            <input type={this.props.type} id={this.props.id} name={this.props.name} placeholder={this.props.cont} />
                        </td>
                    </tr>
                </tbody>
            </table>
        );
    }
}