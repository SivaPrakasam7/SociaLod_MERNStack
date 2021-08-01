import React, { Component } from "react";
import Profile from "../components/views/profile";
import Title from "../components/views/title";
import Paragraph from "../components/views/paragraph";
import close from "../functions/usecases/actions/close";
import CKIE from "../functions/usecases/auth/ckcheck";

export default class View extends Component {
    aligninfo(dt) {
        delete dt.Profile;
        delete dt.Username;
        delete dt._id;
        var row = [];
        for (var [k, v] of Object.entries(dt)) {
            v && row.push(<tr><td>{k}</td><td>{JSON.stringify(v)}</td></tr>);
        }
        return (<table className="table"><tbody><tr><th colSpan="2">Info</th></tr>{row}</tbody></table>);
    }
    build() {
        var data = this.props.data;
        delete data._id;
        delete data.Name;
        delete data.Email;
        delete data.Profile;
        delete data.MobileNo;
        delete data.About;
        var template = [];
        for (var [k, v] of Object.entries(data)) {
            console.log(v);
            v && template.push(<div className="Glass-plate flex-center">
                <Title title={k} align="bold h1" />
                <Profile src={v.Profile} />
                <Title align="h2" title={v.Username} />
                {this.aligninfo(v)}
            </div>);
        }
        return template;

    }
    scraped() {
        var data=this.props.data;
        delete data._id
        var row = [];
        for (var [k, v] of Object.entries(data)) {
            v && row.push(<tr><td>{k}</td><td>{JSON.stringify(v)}</td></tr>);
        }
        return (<div className="Glass-plate flex-center">
            <Title title={data.Title} align="bold h1" />
            <Profile src={data.Profile} />
            <Title align="h2" title={data.Username} />
            <table className="table"><tbody><tr><th colSpan="2">Info</th></tr>{row}</tbody></table>
        </div>);
    }
    render() {
        if (CKIE()) {
            window.location = "/signup";
        } else {
            return (
                <div className="view scrollview">
                    <img alt="" src="https://img.icons8.com/ios-glyphs/30/ffffff/macos-close.png" className="right-top" onClick={close} />
                    {!this.props.data.Username && <Profile src={this.props.data.Profile} />}
                    {!this.props.data.Username && <Title align="h2" title={this.props.data.Name} />}
                    {!this.props.data.Username && <Paragraph align="margin" cont={this.props.data.About} />}
                    {!this.props.data.Username && this.build() || this.scraped()}
                </div>
            );
        }
    }
}