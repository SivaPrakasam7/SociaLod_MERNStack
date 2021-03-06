import { render } from "react-dom";
import React from "react";
import Error from "../../../components/status/error";
import Clear from "../actions/sclear";
import Success from "../../../components/status/success";
import Process from "../../../components/status/proccess";
import Validate from "../../validation/validate";

export default async function Resetreq() {
    const form = document.getElementById('forgetreq');
    if (Validate(form)) {
        render(<Process />, document.getElementById("status"))
        const info = await fetch(`${window.env.BURL}/api/auth/forget`, { method: "POST", headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ email: form.email.value }) })
            .then(res => { return res.json() })
            .then(data => { return data })
            .catch(err => { return err });
        Clear();
        if (!info.err && info.message !== "Failed to fetch") {
            render(<Success cont={"Password reset requested. please check your mail " + form.email.value} click={Clear} />, document.getElementById("status"));
            setTimeout(Clear, 5000);
        } else {
            render(<Error cont={JSON.stringify(info.message)} click={Clear} />, document.getElementById("status"));
            setTimeout(Clear, 3000);
        }
    }
}