import { render } from "react-dom";
import React from "react";
import Error from "../../../components/status/error";
import Clear from "../actions/sclear";
import Success from "../../../components/status/success";
import Process from "../../../components/status/proccess";
import Validate from "../../validation/validate";

export default async function Forgetsubmit(token) {
    const form = document.getElementById('forget');
    if (Validate(form)) {
        render(<Process />, document.getElementById("status"));
        if (form.password.value === form.cpassword.value) {
            const info = await fetch(`${window.env.BURL}/api/auth/reset`, { method: "POST", headers: { 'Authorization': `Bearer ${token}`, 'Content-Type': 'application/json' }, body: JSON.stringify({ password: form.password.value }) })
                .then(res => { return res.json() })
                .then(data => { return data })
                .catch(err => { return err });
            if (!info.err && info.message !== "Failed to fetch") {
                render(<Success cont="Password reset successful" click={Clear} />, document.getElementById("status"));
                setTimeout(Clear, 3000);
                window.location = "#/signin";
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