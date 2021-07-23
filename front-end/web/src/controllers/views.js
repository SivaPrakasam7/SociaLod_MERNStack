import Main from '../assemblers/main';
import Login from '../assemblers/login';
import Register from '../assemblers/register';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function Auth() {
    return (
        <Router>
            <Route path='/' exact>
                <Main />
            </Route>
            <Route path='/signin' exact>
                <Login />
            </Route>
            <Route path="/signup">
                <Register />
            </Route>
        </Router>
    );
}

export default Auth;