import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Home from './screens/home/Home';
import Details from './screens/details/Details';
import Checkout from './screens/checkout/Checkout'
import {BrowserRouter as Router, Route} from 'react-router-dom';

ReactDOM.render(
    <Router>
        <Route exact path='/' component={Home}/>
        <Route exact path='/details/:id' render={({history}, props) => <Details {...props} history={history}/>} />
        <Route exact path='/checkout' render={({history}, props) => <Checkout {...props} history={history}/>} />
    </Router>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
