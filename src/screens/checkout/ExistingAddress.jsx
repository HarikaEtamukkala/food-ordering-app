import React ,{Component}from 'react';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import AddressCard from '../checkout/AddressCard';
import Button from '@material-ui/core/Button';
import { green } from '@material-ui/core/colors';
import {createMuiTheme} from "@material-ui/core";

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
    
  },
  gridList: {
    flexWrap: 'nowrap',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
    width: 'auto',
  },
  title: {
    color: theme.palette.primary.light,
  },
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
  paper: {
    width: theme.spacing(30),
    height:theme.spacing(50),
    padding:theme.spacing(1),    
    textAlign: '',
    color:'#000000',
  },
  checkCircle:{
    marginLeft:theme.spacing(12),
    marginTop:theme.spacing(2),
  }
})

 class ExistingAddress extends Component{

  constructor () {
    super();
    this.state = {
        color:''
    }
}
  handleChange=(e)=>{
    console.log("clicked")
    
  }
  render(){   
    const { classes } = this.props;
    const tileData = [
    {
      flat: "Alta 503 ",
      locality:"SJR Fiesta Homes",
      city: 'Bangalore',
      state: 'Karanataka',
      pincode:'548909'
    },
    {
      flat: "Alta 503 ",
      locality:"SJR Fiesta Homes",
      city: 'Bangalore',
      state: 'Karanataka',
      pincode:'548909'
    },
    {
      flat: "Alta 503 ",
      locality:"SJR Fiesta Homes",
      city: 'Bangalore',
      state: 'Karanataka',
      pincode:'548909'
    },

    
  ];
  
 
 return(
    <div className={classes.root}>
    <GridList className={classes.gridList} cols={3}>
      {tileData.map((tile,index) => (
        <GridListTile key={index}>
           <Paper className={classes.paper} >
           <Typography gutterBottom >
             {tile.flat}
            </Typography>
            <Typography  >
              {tile.locality}
            </Typography>
            <Typography variant="body2" component="p">
              {tile.city}
            </Typography>
            <Typography variant="body2" component="p">
              {tile.state}
            </Typography>
            <Typography variant="body2" component="p">
              {tile.pincode}
            </Typography>
            <IconButton className={classes.checkCircle} onClick={()=>this.handleChange()}><CheckCircleIcon /></IconButton>
           </Paper>
       
        </GridListTile>
      ))}
    </GridList>
  </div>
    
  );
}
}
export default withStyles(styles)(ExistingAddress);