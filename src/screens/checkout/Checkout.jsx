import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Header from '../../common/Header';
import VerticalLinearStepper from '../checkout/Stepper';

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
    card:{
        minWidth: 275,
        marginTop:40,
        marginRight:40,
      },
    pos: {
        marginBottom: 12,
    },
    margin: {
        margin: theme.spacing(4),
        padding:theme.spacing(1),
        width:220,
    },
})


class Checkout extends Component {
    constructor () {
        super();
        this.state = {
            steps: ["Delivery", "Payment"],
            activeStep: '',
        }
    }


    render() {
        const { classes } = this.props;
        return (
            <React.Fragment>
                <Header />
                <Grid container>
                    <Grid item xs>
                        <VerticalLinearStepper />
                    </Grid>
                    <Grid item xs="auto" >
                    <Card className={classes.card}>
                        <CardContent>
                            <Typography className={classes.title} variant="h5"color="textPrimary" gutterBottom>
                               Summary
                            </Typography>
                           
                            <Typography className={classes.pos} color="textSecondary">
                                Restaurant Name
                             </Typography>
                            <Typography variant="body2" component="p">
                                well meaning and kindly.
                                 <br />
                                {'"a benevolent smile"'}
                            </Typography>
                        </CardContent>
                        <CardActions color="primary">
                        <Button variant="contained" className={classes.margin} color="primary" href="#contained-buttons" size="large">
                         Place Order
                        </Button>
                        </CardActions>
                    </Card>
                    </Grid>
                    
                </Grid>
            </React.Fragment>
        )
    }
}
export default withStyles(styles)(Checkout);