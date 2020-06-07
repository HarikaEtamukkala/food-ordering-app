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
import {createMuiTheme,responsiveFontSizes,MuiThemeProvider,Typography} from "@material-ui/core";
  
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
        }
    }


    render() {
        const { classes } = this.props;
        return (
            <React.Fragment>
                <Header />
                <MuiThemeProvider theme={theme}>
                <Grid container>
                    <Grid item xs>
                        <VerticalStepper/>
                    </Grid>
                    <Grid >                   
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
                                <Button variant="contained" className={classes.margin} color="primary" href="#contained-buttons" size="large">
                                    Place Order
                                </Button>
                            </CardActions>
                        </Card>                       
                    </Grid>
                </Grid>
                </MuiThemeProvider>
            </React.Fragment>
        )
    }
}
export default withStyles(styles)(Checkout);