import { render } from "react-dom";
import React from "react";
import Error from "../../../components/status/error";
import Clear from "../actions/sclear";
import Success from "../../../components/status/success";

export default async function Loginsubmit() {
    const form = document.getElementById('login');
    const info = await fetch('http://192.168.43.175:5000/api/auth/login', { method: "POST", headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ email: form.email.value, password: form.password.value }) })
        .then(res => { return res.json() })
        .then(data => { return data })
        .catch(err => { return err });
    if (!info.err) {
        render(<Success cont="Login successful" click={Clear} />, document.getElementById("status"));
        setTimeout(Clear, 3000);
        document.cookie = `CID=${info.message.token}; path=/`;
        window.location = "/";
    } else {
        render(<Error cont={JSON.stringify(info.message)} click={Clear} />, document.getElementById("status"));
        setTimeout(Clear, 3000);
    }
}