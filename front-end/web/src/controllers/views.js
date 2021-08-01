import Home from '../assemblers/home';
import Search from '../assemblers/search';
import Login from '../assemblers/login';
import Register from '../assemblers/register';
import React from 'react';
import Account from '../assemblers/account';
import Forget from '../assemblers/forget';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function Auth() {
    return (
        <Router>
            <Route path='/' exact>
                <Home />
            </Route>
            <Route path="/search">
                <Search />
            </Route>
            <Route path="/signin">
                <Login />
            </Route>
            <Route path="/signup">
                <Register />
            </Route>
            <Route path="/account">
                <Account/>
            </Route>
            <Route path="/forget/:id" component={Forget}>
            </Route>
        </Router>
    );
}

export default Auth;