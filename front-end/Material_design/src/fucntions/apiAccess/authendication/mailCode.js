import { LinearProgress } from '@material-ui/core';
import { render } from 'react-dom';
import Status from '../../basic/status';
import Validate from '../../basic/validate';

export default async function MailCode() {
    const form = document.getElementById('mail');
    if (Validate(form)) {
        render(<LinearProgress />, document.getElementById('status'));
        const info = await fetch(`${process.env.REACT_APP_BURL}/api/auth/secret`, { method: "POST", headers: { 'Authorization': `Bearer ${document.cookie.replace("CID=", "")}`, 'Content-Type': 'application/json' }, body: JSON.stringify({ email: form.email.value }) })
            .then(res => { return res.json() })
            .then(data => { return data })
            .catch(err => { return err });
        if (!info.err && (info.message !== "Failed to fetch")) {
            Status("success", `Confirmation code sended to this mail ${form.email.value}`);
            return true;
        } else Status("error", info.message);
    }
}