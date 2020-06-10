import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Checkout from './checkout/Checkout';

const headers = () => {
    const h = new Headers();
    h.append('Content-Type','application/json');
    const session ={
        token:localStorage.getItem('token')
    }
    if(session.token){
        h.append('authorization',session.token )
    }
    return h;
}
class Controller extends Component{
    constructor() {
        super();
        this.baseUrl = "http://localhost:8080/api/";
        this.headers = headers();
      }
    render(){
        return(
                <Router>
                    <div>
                        <Route exact path="/checkout" render={(props)=> <Checkout {...props} baseUrl={this.baseUrl} headers={this.headers}/>}></Route>
                    </div>
                </Router>
        )
    }
}
export default Controller;