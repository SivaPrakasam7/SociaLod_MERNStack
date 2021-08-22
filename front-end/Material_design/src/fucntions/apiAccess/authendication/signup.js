import Validate from "../../basic/validate";
import { LinearProgress } from '@material-ui/core';
import { render } from 'react-dom';
import Status from "../../basic/status";


export default async function SignUpSubmit() {
    const form = document.getElementById('signup');
    if (Validate(form)) {
        render(<LinearProgress />, document.getElementById('status'));
        const info = await fetch(`${process.env.REACT_APP_BURL}/api/auth/mailverify`, { method: "POST", headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ email: form.email.value }) })
            .then(res => { return res.json() })
            .then(data => { return data })
            .catch(err => { return err });
        if (!info.err && info.message !== "Failed to fetch") {
            Status("success", `Registration link send to your mail ${form.email.value}`);
            window.location = "/";
        } else Status("error", info.message);
    }
}