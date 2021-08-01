import React, { Component } from "react";
import Title from '../components/views/title';
import Para from '../components/views/paragraph';
import Profile from '../components/views/profile';
import Search from "../components/intract/search";
import Scrap from "../functions/usecases/services/scrap";
import CKIE from "../functions/usecases/auth/ckcheck";

export default class Main extends Component {
    render() {
        return (
            <div className="center Glass-plate main">
                <div className="fix-width">
                    {!CKIE() && <Search id="scrap" cont="Social Link for scrap" click={Scrap} />}
                </div>
                <Title title="SociaLod" align="bold h1" />
                <Para cont="&emsp;&emsp;It's based on human information from diffrent social medias. Search by user name with different social media publicly available information. That make a Human information resources with recursive search." />
                <Profile src={process.env.PUBLIC_URL + "/img/networking-teachers.jpg"} align="left-bottom" />
            </div>
        );
    }
}