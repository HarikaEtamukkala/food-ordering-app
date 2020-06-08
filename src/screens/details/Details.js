import React, {Component} from 'react';
import Header from '../../common/header/Header';
import './Details.css';
import Category from './Category';
import Cart from './Cart';
import RestaurantDetails from './RestaurantDetails';


class Details extends Component{

    constructor(){
        super();
        this.state={
            restaurantName : "",
            restaurantLocality : "",
            photoUrl : "",
            categories: [],
            rating : "",
            numberOfCustomers : "",
            averagePrice : "" ,

        }
    }

    componentDidMount(){
      
        fetch('http://localhost:8080/api/restaurant/246165d2-a238-11e8-9077-720006ceb890',{
          method: 'GET',
        })
        .then(res => res.json())
        .then((body) => {
          this.setState({ restaurantName: body.restaurant_name,
            restaurantLocality : body.address.locality,
            photoUrl : body.photo_URL,
            categories : body.categories,
            rating : body.customer_rating,
            numberOfCustomers : body.number_customers_rated,
            averagePrice: body.average_price

        })
        })
        .catch(console.log)
    }
    render(){
        return(
            <div>
                <Header/>
                <div className="restaurant-section">
                <RestaurantDetails restaurantName={this.state.restaurantName} restaurantLocality={this.state.restaurantLocality} photoUrl={this.state.photoUrl} rating={this.state.rating} numberOfCustomers={this.state.numberOfCustomers} averagePrice={this.state.averagePrice} categories={this.state.categories}/>
                    
                </div>
                <div className="menu-cart-section">
                <Category categories={this.state.categories} this={this}/>
                <Cart/>
                </div>
            </div>
        )
    }
}
export default Details;