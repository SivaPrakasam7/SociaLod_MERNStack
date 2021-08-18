import React, { Component } from 'react';

export default class Process extends Component {
    render() {
        return (
            <table className="Glass-plate margin unpadding process">
                <tbody>
                    <tr>
                        <td>
                            <div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
                        </td>
                        <td>
                            <label className="h3">Processing</label>
                        </td>
                    </tr>
                </tbody>
            </table>
        )
    }
}