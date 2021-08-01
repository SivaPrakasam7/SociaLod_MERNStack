import React, { Component } from "react";
import Search from '../components/intract/search';
import Userlist from "../functions/usecases/services/userlist";
import CKIE from "../functions/usecases/auth/ckcheck";

export default class Main extends Component {
    render() {
        if (CKIE()) {
            window.location = "/signup";
        } else {
            return (
                <div className="mcenter searchmain">
                    <div className="Glass-plate searchplate">
                        <Search id="search" cont="Add social links" click={Userlist} />
                        <div id="listview" className="searchlist"></div>
                    </div>
                    <div id="viewplate"></div>
                </div>
            );
        }
    }
}