import { render } from "react-dom";
import React from "react";
import Error from "../../../components/status/error";
import Clear from "../actions/sclear";
import Process from "../../../components/status/proccess";
import ListUser from "../../../components/views/luser";
import Viewplate from "../../../functions/usecases/actions/viewplate";
import Logout from "../actions/logout";

export default async function Buildsearch() {
    render(<Process />, document.getElementById("status"));
    const info = await fetch('http://192.168.43.175:5000/api/service/search', { method: "POST", headers: { 'Authorization': `Bearer ${document.cookie.replace("CID=", "")}`, 'Content-Type': 'application/json' }, body: JSON.stringify({ username: document.getElementById('search').value }) })
        .then(res => { return res.json() })
        .then(data => { return data })
        .catch(err => { return err });
    var template = [];
    if (!info.err) {
        for (var u of Object.values(info.message)) {
            template.push(<ListUser click={()=>{Viewplate(u)}} img={u.Profile} time="" name={u.Name} mail={u.Email} about={u.About} />);
        }
        Clear();
        render(template, document.getElementById('listview'));
    } else {
        if (info.message.includes('Token not match')) {
            Logout();
        }
        render(<Error cont={JSON.stringify(info.message)} click={Clear} />, document.getElementById("status"));
        setTimeout(Clear, 3000);
    }
}