import React from 'react';
import {Card, CardContent, CardMedia} from '@material-ui/core';
import {withStyles} from '@material-ui/core/styles';
import './Home.css';

// import Header from './../../common/header/Header';

function styles() {
    return {
        media: {
            height: 140
        }
    };
}

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            restaurants: []
        };
    }

    componentDidMount() {
        let getAllRestaurantsUrl = `http://localhost:8080/api/restaurant`;
        fetch(getAllRestaurantsUrl)
            .then(result => result.json())
            .then(response => this.setState({restaurants: response.restaurants}));
    }

    redirectToDetailsPage = id => window.location = `/details/${id}`;

    render() {
        const {classes} = this.props;
        const {restaurants} = this.state;
        return <>
            {/*<Header/>*/}
            <div className='cardContainer'>
                {!(restaurants && 0 < restaurants.length) ? null : restaurants.map(this.restaurantList(classes))}
            </div>
        </>;
    }

    restaurantList(classes) {
        return restaurant => {
            return <Card className='restaurantCard' key={restaurant.id}
                         onClick={() => this.redirectToDetailsPage(restaurant.id)}>
                <CardMedia className={classes.media} title='restaurantImage' image={restaurant.photo_URL}/>
                <CardContent className='cardContent'>
                    <h3>{restaurant.restaurant_name}</h3>
                    <p>{restaurant.categories}</p>
                    <div className='footer'>
                        <div className='ratingContainer'>
                            <p>
                                <i className='fa fa-star' aria-hidden='true'/>
                                <span>&nbsp;{restaurant.customer_rating}&nbsp;({restaurant.number_customers_rated})</span>
                            </p>
                        </div>
                        <div className='costContainer'>
                            <p>
                                <i className='fa fa-inr' aria-hidden='true'/>
                                <span>&nbsp;{restaurant.average_price} for two</span>
                            </p>
                        </div>
                    </div>
                </CardContent>
            </Card>;
        };
    }
}

export default withStyles(styles)(Home);
