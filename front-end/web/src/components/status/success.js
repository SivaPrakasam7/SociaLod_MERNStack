import React, { Component } from 'react';

export default class Success extends Component {
    render() {
        return (
            <table onClick={this.props.click} className="Glass-plate margin unpadding success">
                <tbody>
                    <tr>
                        <td>
                            <img alt="Success" width="40" height="40" src="https://img.icons8.com/ios-glyphs/50/26e07f/ok.png" />
                        </td>
                        <td>
                            <label className="h3">Success,</label>
                            <br />
                            {this.props.cont}
                        </td>
                    </tr>
                </tbody>
            </table>
        )
    }
}