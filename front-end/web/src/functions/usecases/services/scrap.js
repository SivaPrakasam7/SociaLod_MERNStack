import { render } from "react-dom";
import React from "react";
import Error from "../../../components/status/error";
import Clear from "../actions/sclear";
import Process from "../../../components/status/proccess";
import Viewpanel from "../actions/view";
import Logout from "../actions/logout";

export default async function Scrap() {
    const scrap = document.getElementById('scrap').value.replace('https://', '').replace('www.', '').replace('.com', '').replace('/users', '').replace('/in', '').replace('/c', '').replace('@', '').split('/');
    render(<Process />, document.getElementById("status"));
    const info = await fetch('http://192.168.43.175:5000/api/service/scrap', { method: "POST", headers: { 'Authorization': `Bearer ${document.cookie.replace("CID=", "")}`, 'Content-Type': 'application/json' }, body: JSON.stringify({ username: scrap.slice(1).join('/'), site: scrap[0] }) })
        .then(res => { return res.json() })
        .then(data => { return data })
        .catch(err => { return err });
    if (!info.err && !info === "TypeError: Failed to fetch") {
        Clear();
        info.message.Title = scrap[0];
        Viewpanel(info.message);
    } else {
        if ((info.message.includes('Token not match')) || (info.message === "Failed to fetch")) {
            Logout();
        }
        render(<Error cont={JSON.stringify(info.message)} click={Clear} />, document.getElementById("status"));
        setTimeout(Clear, 3000);
    }
}