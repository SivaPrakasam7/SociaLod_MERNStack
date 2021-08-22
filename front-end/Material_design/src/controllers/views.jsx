import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../components/assemblers/home';
import SignIn from '../components/assemblers/signin';
import SignUp from '../components/assemblers/signup';
import Forget from '../components/assemblers/forget';
import Register from '../components/assemblers/register';
import Search from '../components/assemblers/search';
import Account from '../components/assemblers/account';
import Contact from '../components/assemblers/contact';
import Reset from '../components/assemblers/reset';
import PageNotFound from '../components/assemblers/pagenotfound';

export default function Views() {
    return (
        <Router>
            <Switch>
                <Route path='/' component={Home} exact />
                <Route path='/signin' component={SignIn} />
                <Route path='/signup' component={SignUp} />
                <Route path='/register/:id' component={Register} />
                <Route path='/forget' component={Forget} />
                <Route path='/reset/:id' component={Reset} />
                <Route path='/search' component={Search} />
                <Route path='/account' component={Account} />
                <Route path='/contact' component={Contact} />
                <Route path='*' component={PageNotFound} />
            </Switch>
        </Router>
    );
};
