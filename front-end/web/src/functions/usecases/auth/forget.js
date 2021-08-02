import { render } from "react-dom";
import React from "react";
import Error from "../../../components/status/error";
import Clear from "../actions/sclear";
import Success from "../../../components/status/success";
import Process from "../../../components/status/proccess";

export default async function Forgetsubmit(token) {
    const form = document.getElementById('forget');
    render(<Process />, document.getElementById("status"));
    if (form.fpassword.value === form.fcpassword.value) {
        const info = await fetch(`http://192.168.43.175:5000/api/auth/reset`, { method: "POST", headers: { 'Authorization': `Bearer ${token}`, 'Content-Type': 'application/json' }, body: JSON.stringify({ password: form.fpassword.value }) })
            .then(res => { return res.json() })
            .then(data => { return data })
            .catch(err => { return err });
        if (!info.err && info.message !== "Failed to fetch") {
            render(<Success cont="Password reset successful" click={Clear} />, document.getElementById("status"));
            setTimeout(Clear, 3000);
            window.location = "/signin";
        } else {
            render(<Error cont={JSON.stringify(info.message)} click={Clear} />, document.getElementById("status"));
            setTimeout(Clear, 3000);
        }
    } else {
        render(<Error cont="Password Mismatch" click={Clear} />, document.getElementById("status"));
        setTimeout(Clear, 3000);
    }
}