import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Checkout from './checkout/Checkout';
import Details from './details/Details';
import Home from './home/Home';


class Controller extends Component{
    constructor() {
        super();
        this.baseUrl = "http://localhost:8080/api/";
        this.accessToken =sessionStorage.getItem('access-token');     
      }
    render(){
        return(
                <Router>
                    <div>
                    <Route exact path='/' component={Home}/>
                    <Route exact path='/details/:id' render={({history}, props) => <Details {...props} history={history}/>} />
                     <Route exact path='/checkout' render={({history}, props) => <Checkout {...props} baseUrl={this.baseUrl} accessToken={this.accessToken} history={history}/>} />
                    {/* <Route exact path="/checkout" render={(props)=> <Checkout {...props} baseUrl={this.baseUrl} headers={this.headers}/>}></Route> */}
                    </div>
                </Router>
        )
    }
}
export default Controller;