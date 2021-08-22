import Validate from "../../basic/validate";
import { LinearProgress } from '@material-ui/core';
import { render } from 'react-dom';
import Status from "../../basic/status";

export default async function ForgetSubmit() {
    const form = document.getElementById('forget');
    if (Validate(form)) {
        render(<LinearProgress />, document.getElementById('status'));
        const info = await fetch(`${process.env.REACT_APP_BURL}/api/auth/forget`, { method: "POST", headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ email: form.email.value }) })
            .then(res => { return res.json() })
            .then(data => { return data })
            .catch(err => { return err });
        if (!info.err && info.message !== "Failed to fetch") Status("success", `Password reset requested. please check your mail ${form.email.value}`);
        else Status("error", info.message);
    }
}