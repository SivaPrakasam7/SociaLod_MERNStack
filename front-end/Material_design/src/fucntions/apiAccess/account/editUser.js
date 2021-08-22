import Validate from "../../basic/validate";
import { LinearProgress } from '@material-ui/core';
import { render } from 'react-dom';
import Status from "../../basic/status";
import Logout from "./logout";

export default async function EditUser() {
    const form = document.getElementById('edit');
    if (Validate(form)) {
        render(<LinearProgress />, document.getElementById('status'));
        const info = await fetch(`${process.env.REACT_APP_BURL}/api/user/edit`, { method: "POST", headers: { 'Authorization': `Bearer ${document.cookie.replace("CID=", "")}`, 'Content-Type': 'application/json' }, body: JSON.stringify({ profile: document.getElementById("profile").src, name: form.name.value, mobileno: form.mobile.value, about: form.about.value }) })
            .then(res => { return res.json() })
            .then(data => { return data })
            .catch(err => { return err });
        if (!info.err && info.message !== "Failed to fetch") return true;
        else if (info.message === "Token not match") Logout();
        else {
            Status("error", info.message);
            return false;
        }
    }
}