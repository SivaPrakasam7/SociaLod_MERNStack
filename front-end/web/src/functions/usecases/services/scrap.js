import { render } from "react-dom";
import React from "react";
import Error from "../../../components/status/error";
import Clear from "../actions/sclear";
import Process from "../../../components/status/proccess";
import Viewpanel from "../actions/view";
import Logout from "../actions/logout";

export default async function Scrap() {
    let dt = document.getElementById('scrap');
    if (/(https?:\/\/)?[a-z.-]+\.[a-z]{2,6}[/\w.-]*\/?/g.test(dt.value)) {
        const scrap = dt.value.replace('https://', '').replace('www.', '').replace('.com', '').replace('/users', '').replace('/in', '').replace('/c', '').replace('@', '').split('/');
        render(<Process />, document.getElementById("status"));
        const info = await fetch(`${window.env.BURL}/api/service/scrap`, { method: "POST", headers: { 'Authorization': `Bearer ${document.cookie.replace("CID=", "")}`, 'Content-Type': 'application/json' }, body: JSON.stringify({ username: scrap.slice(1).join('/'), site: scrap[0] }) })
            .then(res => { return res.json() })
            .then(data => { return data })
            .catch(err => { return err });
        if (!info.err && info.message !== "Failed to fetch") {
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
    } else { dt.focus() }
}