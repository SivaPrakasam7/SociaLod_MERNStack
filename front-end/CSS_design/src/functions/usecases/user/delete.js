import { render } from "react-dom";
import React from "react";
import Error from "../../../components/status/error";
import Clear from "../actions/sclear";
import Logout from "../actions/logout";
import Success from "../../../components/status/success";

export default async function DeleteAccount() {
    const info = await fetch(`${window.env.BURL}/api/user/delete`, { method: "GET", headers: { 'Authorization': `Bearer ${document.cookie.replace("CID=", "")}`, 'Content-Type': 'application/json' } })
        .then(res => { return res.json() })
        .then(data => { return data })
        .catch(err => { return err });
    if (!info.err && info.message !== "Failed to fetch") {
        render(<Success cont={JSON.stringify(info.message)} click={Clear} />, document.getElementById("status"));
        setTimeout(Clear, 3000);
        Logout();
    } else {
        if ((info.message === 'Token not match') || (info.message === "Failed to fetch")) {
            Logout();
        }
        render(<Error cont={JSON.stringify(info.message)} click={Clear} />, document.getElementById("status"));
        setTimeout(Clear, 3000);
    }
}