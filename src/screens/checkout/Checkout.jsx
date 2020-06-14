import React, {Component} from 'react';

class Checkout extends Component {

    componentDidMount(){

        console.log(sessionStorage.getItem("cart"));
    }
    render(){
        return(
            <div></div>
        )
    }
}

export default Checkout;