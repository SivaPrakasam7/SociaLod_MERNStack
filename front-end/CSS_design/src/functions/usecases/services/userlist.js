import { render } from "react-dom";
import React from "react";
import Error from "../../../components/status/error";
import Clear from "../actions/sclear";
import Process from "../../../components/status/proccess";
import ListUser from "../../../components/views/luser";
import Logout from "../actions/logout";

export default async function Buildsearch() {
    let dt = document.getElementById('search');
    if (/[a-zA-Z0-9-_]+/g.test(dt.value)) {
        render(<Process />, document.getElementById("status"));
        const info = await fetch(`${window.env.BURL}/api/service/search`, { method: "POST", headers: { 'Authorization': `Bearer ${document.cookie.replace("CID=", "")}`, 'Content-Type': 'application/json' }, body: JSON.stringify({ username: dt.value }) })
            .then(res => { return res.json() })
            .then(data => { return data })
            .catch(err => { return err });
        var template = [];
        if (!info.err && info.message !== "Failed to fetch") {
            for (var u of Object.values(info.message)) {
                template.push(<ListUser key={u._id} id={btoa(u._id)} img={u.Profile} time="" name={u.Name} mail={u.Email} about={u.About} />);
            }
            Clear();
            render(template, document.getElementById('listview'));
        } else {
            if ((info.message.includes('Token not match')) || (info.message === "Failed to fetch")) {
                Logout();
            }
            render(<Error cont={JSON.stringify(info.message)} click={Clear} />, document.getElementById("status"));
            setTimeout(Clear, 3000);
        }
    } else { dt.focus() }
}