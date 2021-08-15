import { render } from "react-dom";
import React from "react";
import Error from "../../../components/status/error";
import Clear from "../actions/sclear";
import Logout from "../actions/logout";
import Viewplate from "../actions/viewplate";

export default async function GetUser(id) {
    console.log(id);
    const info = await fetch(`${window.env.BURL}/api/service/view_user`, { method: "POST", headers: { 'Authorization': `Bearer ${document.cookie.replace("CID=", "")}`, 'Content-Type': 'application/json' }, body: JSON.stringify({ userid: id }) })
        .then(res => { return res.json() })
        .then(data => { return data })
        .catch(err => { return err });
    if (!info.err && (info.message !== "Failed to fetch")) {
        Viewplate(info.message);
    } else {
        if ((info.message === 'Token not match') || (info.message === "Failed to fetch")) {
            Logout();
        }
        render(<Error cont={JSON.stringify(info.message)} click={Clear} />, document.getElementById("status"));
        setTimeout(Clear, 3000);
    }
}