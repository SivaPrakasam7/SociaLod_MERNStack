import React, { Component } from 'react';

export default class Error extends Component {
    render() {
        return (
            <table onClick={this.props.click} className="Glass-plate margin unpadding error">
                <tbody>
                    <tr>
                        <td>
                            <img alt="Error" width="40" height="40" src="https://img.icons8.com/ios-glyphs/50/fa314a/error.png" />
                        </td>
                        <td>
                            <label className="h3">Error,</label>
                            <br />
                            {this.props.cont}
                        </td>
                    </tr>
                </tbody>
            </table>
        )
    }
}