import React, { Component } from "react";
import Title from '../components/views/title';

export default class PageNotFound extends Component {
    render() {
        return (
            <div className="center Glass-plate main">
                <Title title={'404 Page Not Found\n\n\n\nTry navigation bar'} align="bold h1" />
            </div>
        );
    }
}