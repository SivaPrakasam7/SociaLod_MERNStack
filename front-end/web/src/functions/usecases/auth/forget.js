import { render } from "react-dom";
import React from "react";
import Error from "../../../components/status/error";
import Clear from "../actions/sclear";

export default async function Forgetsubmit(token) {
    const form = document.getElementById('forget');
    if (form.fpassword.value === form.fcpassword.value) {
        const info = await fetch(`http://192.168.43.175:5001/api/auth/reset/${token}`, { method: "POST", headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ password: form.fpassword.value }) })
            .then(res => { return res.json() })
            .then(data => { return data })
            .catch(err => { return err });
        if (!info.err) {
            document.cookie = `CID=${info.message.token}; path=/`;
            window.location = "/";
        } else {
            render(<Error cont={JSON.stringify(info.message)} click={Clear} />, document.getElementById("status"));
            setTimeout(Clear, 3000);
        }
    } else {
        render(<Error cont="Password Mismatch" click={Clear} />, document.getElementById("status"));
        setTimeout(Clear, 3000);
    }
}