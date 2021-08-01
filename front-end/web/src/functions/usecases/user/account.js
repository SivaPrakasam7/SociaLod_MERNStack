import { render } from "react-dom";
import React from "react";
import Error from "../../../components/status/error";
import Clear from "../actions/sclear";
import Logout from "../actions/logout";

export default async function Myaccount() {
    const info = await fetch('http://192.168.43.175:5000/api/user/get', { method: "GET", headers: { 'Authorization': `Bearer ${document.cookie.replace("CID=", "")}`, 'Content-Type': 'application/json' } })
        .then(res => { return res.json() })
        .then(data => { return data })
        .catch(err => { return err });
    if (!info.err) {
        return info.message;
    } else {
        if (info.message.includes('Token not match')) {
            Logout();
        }
        render(<Error cont={JSON.stringify(info.message)} click={Clear} />, document.getElementById("status"));
        setTimeout(Clear, 3000);
    }
}