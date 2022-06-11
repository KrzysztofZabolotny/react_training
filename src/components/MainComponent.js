import React from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import NotFound from './NotFound';
import BarChart from './BarChart';
import CoinComponent from './CoinComponent';
import Home from './HomeComponent'
import { Route, withRouter, BrowserRouter, Switch } from 'react-router-dom'
import Login from './LoginComponent';
import CreateUserComponent from './CreateUserComponent';



function Main() {
    return (
        <React.Fragment>
            <Header />
            <BrowserRouter>
                <Switch>
                    <Route path='/home' component={Home} />
                    <Route path='/chart' component={BarChart} />
                    <Route path='/coins' component={CoinComponent} />
                    <Route path='/login' component={Login} />
                    <Route path='/register' component={CreateUserComponent} />

                    <Route component={NotFound} />
                </Switch>
            </BrowserRouter>
            <Footer />
        </React.Fragment>
    )
}

export default withRouter(Main);;