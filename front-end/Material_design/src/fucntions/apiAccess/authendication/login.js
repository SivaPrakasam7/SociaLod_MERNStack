import Validate from '../../basic/validate';
import { LinearProgress } from '@material-ui/core';
import { render } from 'react-dom';
import Status from '../../basic/status';

export default async function LoginSubmit() {
    const form = document.getElementById('login');
    if (Validate(form)) {
        render(<LinearProgress />, document.getElementById('status'));
        const info = await fetch(`${process.env.REACT_APP_BURL}/api/auth/login`, { method: "POST", headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ email: form.email.value, password: form.password.value }) })
            .then(res => { return res.json() })
            .then(data => { return data })
            .catch(err => { return err });
        if (!info.err && info.message !== "Failed to fetch") {
            Status("success", "Login successful!");
            document.cookie = `CID=${info.message.token}; path=/`;
            window.location = "/";
        } else Status("error", info.message);
    }
}