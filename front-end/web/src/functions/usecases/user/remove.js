import { render } from "react-dom";
import React from "react";
import Error from "../../../components/status/error";
import Clear from "../actions/sclear";
import Process from "../../../components/status/proccess";

export default async function Remove() {
    const scrap = document.getElementById('media').value.replace('https://', '').replace('www.', '').replace('.com', '').replace('/users', '').replace('/in', '').replace('/c', '').replace('@', '').split('/');
    render(<Process />, document.getElementById("status"));
    const info = await fetch('http://192.168.43.175:5000/api/service/remove_media', { method: "POST", headers: { 'Authorization': `Bearer ${document.cookie.replace("CID=", "")}`, 'Content-Type': 'application/json' }, body: JSON.stringify({ username: scrap.slice(1).join('/'), site: scrap[0] }) })
        .then(res => { return res.json() })
        .then(data => { return data })
        .catch(err => { return err });
    if (!info.err) {
        Clear();
        return info.message;
    } else {
        render(<Error cont={JSON.stringify(info.message)} click={Clear} />, document.getElementById("status"));
        setTimeout(Clear, 3000);
    }
}