import { LinearProgress } from '@material-ui/core';
import { render } from 'react-dom';
import Status from '../../basic/status';
import Validate from '../../basic/validate';

export default async function MailMessage() {
    const form = document.getElementById('message'),
        form1 = document.getElementById('mail');
    if (Validate(form1) && Validate(form)) {
        render(<LinearProgress />, document.getElementById('status'));
        const info = await fetch(`${process.env.REACT_APP_BURL}/api/service/mail`, { method: "POST", headers: { 'Authorization': `Bearer ${form.code.value}`, 'Content-Type': 'application/json' }, body: JSON.stringify({ email: form1.email.value, subject: form.subject.value, message: form.message.value }) })
            .then(res => { return res.json() })
            .then(data => { return data })
            .catch(err => { return err });
        if (!info.err && (info.message !== "Failed to fetch")) {
            Status("success", `Message sended to this mail ${form1.email.value}`);
            return true;
        } else Status("error", info.message);
    }
}