import Home from '../assemblers/home';
import Search from '../assemblers/search';
import Login from '../assemblers/login';
import Register from '../assemblers/register';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function Auth() {
    return (
        <Router>
            <Route path='/' exact>
                <Home />
            </Route>
            <Route path='/search' exact>
                <Search />
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