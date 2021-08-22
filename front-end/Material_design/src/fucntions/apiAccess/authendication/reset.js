import Validate from "../../basic/validate";
import { LinearProgress } from '@material-ui/core';
import { render } from 'react-dom';
import Status from "../../basic/status";

export default async function ResetSubmit(token) {
    const form = document.getElementById('reset');
    if (Validate(form)) {
        render(<LinearProgress />, document.getElementById('status'));
        if (form.password.value === form.cpassword.value) {
            const info = await fetch(`${process.env.REACT_APP_BURL}/api/auth/reset`, { method: "POST", headers: { 'Authorization': `Bearer ${token}`, 'Content-Type': 'application/json' }, body: JSON.stringify({ password: form.password.value }) })
                .then(res => { return res.json() })
                .then(data => { return data })
                .catch(err => { return err });
            if (!info.err && info.message !== "Failed to fetch") Status("success", `Password resetted successfully!`);
            else Status("error", info.message);
        }
    } else Status("error", "Password mismatch!");
}