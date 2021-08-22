import Alert from '@material-ui/lab/Alert';
import { Snackbar } from '@material-ui/core';
import { render } from 'react-dom';
import Clear from '../basic/clear';

export default function Status(type,cont) {
    return render(<Snackbar open autoHideDuration={5000} onClose={Clear}><Alert onClose={Clear} severity={type}>{cont}</Alert></Snackbar>, document.getElementById('status'));
}