import { render } from "react-dom";
import React from "react";
import Error from "../../../components/status/error";
import Clear from "../actions/sclear";
import Success from "../../../components/status/success";
import Validate from "../../validation/validate";
import Process from "../../../components/status/proccess";

export default async function RegisterReqSubmit() {
    const form = document.getElementById('registerreq');
    if (Validate(form)) { 
        render(<Process />, document.getElementById("status"));
        const info = await fetch(`${window.env.BURL}/api/auth/mailverify`, { method: "POST", headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ email: form.email.value }) })
            .then(res => { return res.json() })
            .then(data => { return data })
            .catch(err => { return err });
        if (!info.err && info.message !== "Failed to fetch") {
            Clear();
            render(<Success cont="Registration link send to your mail" click={Clear} />, document.getElementById("status"));
            setTimeout(Clear, 3000);
            window.location = "/";
        } else {
            render(<Error cont={JSON.stringify(info.message)} click={Clear} />, document.getElementById("status"));
            setTimeout(Clear, 3000);
        }   
    }
}