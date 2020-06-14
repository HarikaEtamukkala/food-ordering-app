import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import StopIcon from '@material-ui/icons/Stop';
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
import Header from '../../common/Header';
import VerticalStepper from './VerticalStepper';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRupeeSign } from '@fortawesome/free-solid-svg-icons';
import { createMuiTheme, responsiveFontSizes, MuiThemeProvider, Typography } from "@material-ui/core";
import SnackbarContent from '@material-ui/core/SnackbarContent';

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);


const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    title: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    card: {
        minWidth: 275,
        margin: 40,

    },
    pos: {
        marginBottom: 12,
    },
    margin: {
        margin: theme.spacing(4),
        padding: theme.spacing(1),
        width: 220,
    },
})


class Checkout extends Component {
    constructor () {
        super();
        this.state = {
            steps: ["Delivery", "Payment"],
            activeStep: '',
            addresses: [],
            paymentMethods: [],
            selectedPayment: '',
            selectedAddress: '',
            states: '',
            address: [
                {
                    flat: '',
                    locality: '',
                    city: '',
                    state: '',
                    pincode: ''
                }

            ],
            order: '',
            snackBar: false,
            message:'',
            messageInfo:false,
            open:false
        }
        this.handleAddressSelect.bind(this);
    }
    componentDidMount(){

        console.log(sessionStorage.getItem("cart"));
    }

    componentWillMount() {
        let that = this;
        let addressesData = null;
        let xhrAddress = new XMLHttpRequest();
        xhrAddress.addEventListener("readystatechange", function () {
            if (this.readyState === 4) {               
                that.setState({
                    addresses: JSON.parse(this.responseText).addresses
                });
            }
        });

        xhrAddress.open("GET", this.props.baseUrl + "address/customer");
        xhrAddress.setRequestHeader("Cache-Control", "no-cache");
        xhrAddress.setRequestHeader('Content-Type', 'application/json');
        xhrAddress.setRequestHeader('authorization', "Bearer access");
        xhrAddress.send(addressesData);

        let paymentData = null;
        let xhrPayment = new XMLHttpRequest();
        xhrPayment.addEventListener("readystatechange", function () {

            if (this.readyState === 4) {
                that.setState({
                    paymentMethods: JSON.parse(this.responseText).paymentMethods
                });
            }
        });

        xhrPayment.open("GET", this.props.baseUrl + "payment");
        xhrPayment.setRequestHeader("Cache-Control", "no-cache");
        xhrPayment.setRequestHeader('Content-Type', 'application/json');
        xhrPayment.setRequestHeader('authorization', "Bearer access");
        xhrPayment.send(paymentData);

        let states = null;
        let xhrStates = new XMLHttpRequest();
        xhrStates.addEventListener("readystatechange", function () {

            if (this.readyState === 4) {            
                that.setState({
                    states: JSON.parse(this.responseText)
                });
            }
        });

        xhrStates.open("GET", this.props.baseUrl + "states");
        xhrStates.setRequestHeader("Cache-Control", "no-cache");
        xhrStates.setRequestHeader('Content-Type', 'application/json');
        xhrStates.setRequestHeader('authorization', "Bearer access");
        xhrStates.send(states);

    }
    handleChange = (event) => {
        console.log("payment"+event.target.value)
        this.setState({
            selectedPayment: event.target.value
        })
    }
    handleAddressSelect = (index) => {
        console.log("address"+index)
        this.setState({
            selectedAddress: index
        });
    }

    onSubmitOrderHandler = () => {
        
        let data = JSON.stringify({
            "address_id": this.state.selectedAddress,
            "payment_id": this.state.selectedPayment,
            "bill":250,
            "discount":50,
            "coupon_id":"2ddf6284-ecd0-11e8-8eb2-f2801f1b9fd1",
            "restaurant_id":"246165d2-a238-11e8-9077-720006ceb890",
            "item_quantities":[{
                "item_id":"c860e78a-a29b-11e8-9a3a-720006ceb890",
                "quantity":1,
                "price":"20"
            }
            ]

        });
        let that = this;
        let xhr = new XMLHttpRequest();

        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === 4) {
                that.setState({ order: JSON.parse(this.responseText) });
                that.showSnanckBar();
            }
        });

        xhr.open("POST", this.props.baseUrl + "order");
        xhr.setRequestHeader("Authorization", "Bearer access");
        xhr.setRequestHeader("Cache-Control", "no-cache");
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.send(data);
        this.setState({ open: true });

    }
    showSnanckBar = () =>{
        this.setState({
            message:"Order placed successfully! Your order ID is "+this.state.order.id+".",
            snackBar:true,
            messageInfo:true,
            open:true
        })
    }
     handleClose = (event, reason) => {
         console.log("clicked"+reason);
        if (reason === 'clickaway') {
          return;
        }
        this.setState({
            open:false,
            snackBar:false
        })        
      };
    render() {
        const { classes } = this.props;

        return (
            <React.Fragment>
                <Header />
                <MuiThemeProvider theme={theme}>
                    <Grid container>
                        <Grid item xs={12} sm={8}>
                            <VerticalStepper
                                baseUrl={this.props.baseUrl}
                                paymentMethods={this.state.paymentMethods}
                                handleChange={() => this.handleChange}
                                handleAddressSelect={this.handleAddressSelect}
                                selectedAddress={this.state.selectedAddress}
                                states={this.state.states}
                                onNewAddress={this.handleNewAddress} />
                        </Grid>
                        <Grid item xs={10} sm={4}>
                            <Card className={classes.card}>
                                <CardContent>
                                    <Typography variant="h5" gutterBottom>
                                        Summary
                            </Typography>
                                    <Typography className={classes.pos} color="textSecondary">
                                        Restaurant Name
                             </Typography>
                                    <Typography variant="body2" component="span">
                                        <Box display="flex" flexDirection="row" >
                                            <Box p={2}>
                                                <StopIcon color="secondary"></StopIcon>
                                            </Box>
                                            <Box p={2}>
                                                <Typography> Menu Item</Typography>
                                            </Box>
                                            <Box p={2}>
                                                <Typography> 1</Typography>
                                            </Box>
                                            <Box p={2}>
                                                <FontAwesomeIcon icon={faRupeeSign} />
                                            </Box>
                                        </Box>
                                    </Typography>
                                    <Divider light />
                                </CardContent>
                                <CardActions color="primary">
                                    <Button variant="contained" className={classes.margin} color="primary" href="#contained-buttons" size="large" onClick={this.onSubmitOrderHandler}>Place Order </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    </Grid>
                    
                </MuiThemeProvider>
                {this.state.snackBar && 
                    <SnackbarContent     
                    open={this.state.open}                    
                    onClose={this.handleClose}  
                    message={<span id="message-id">{this.state.messageInfo ? this.state.message : undefined}</span>}
                    action={[
                      <Button key="undo" color="secondary" size="small" onClick={this.handleClose}>
                        UNDO
                      </Button>                      
                    ]}
                  /> }
            </React.Fragment>
        )
    }
}
export default withStyles(styles)(Checkout);
