import { render } from "react-dom";
import React from "react";
import Error from "../../../components/status/error";
import Clear from "../actions/sclear";
import Success from "../../../components/status/success";
import Validate from "../../validation/validate";

export default async function Registersubmit() {
    const form = document.getElementById('register');
    if (Validate(form)) {
        if (form.password.value === form.cpassword.value) {
            const info = await fetch(`${window.env.BURL}/api/auth/register`, { method: "POST", headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ profile: document.getElementById("profile").src, name: form.name.value, email: form.email.value, mobileno: form.mobile.value, about: form.about.value, password: form.password.value }) })
                .then(res => { return res.json() })
                .then(data => { return data })
                .catch(err => { return err });
            if (!info.err && info.message !== "Failed to fetch") {
                render(<Success cont="Registration successful" click={Clear} />, document.getElementById("status"));
                setTimeout(Clear, 3000);
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
}