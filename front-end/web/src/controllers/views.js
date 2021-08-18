import Home from '../assemblers/home';
import Search from '../assemblers/search';
import Login from '../assemblers/login';
import Register from '../assemblers/register';
import RegisterReq from '../assemblers/registerreq';
import React from 'react';
import Account from '../assemblers/account';
import Forget from '../assemblers/forget';
import PageNotFound from '../assemblers/pagenotfound';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import ForgetReq from '../assemblers/forgetreq';

function Auth() {
    return (
        <Router>
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path="/search" component={Search} />
                <Route path="/signin" component={Login} />
                <Route path="/signup" component={RegisterReq} />
                <Route path="/register/:id" component={Register} />
                <Route path="/account" component={Account} />
                <Route path="/forget" component={ForgetReq} />
                <Route path="/reset/:id" component={Forget} />
                <Route path="*" component={PageNotFound} />
            </Switch>
        </Router>
    );
}

export default Auth;