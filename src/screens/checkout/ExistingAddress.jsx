import clsx from 'clsx';
import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import GridList from '@material-ui/core/GridList';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import GridListTile from '@material-ui/core/GridListTile';
import { green, grey, pink } from '@material-ui/core/colors';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';


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
    transform: 'translateZ(0)',
    paddingBottom: 10,
  },
  title: {
    color: theme.palette.primary.light,
  },
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
  
  checkCircle: {
    marginLeft: theme.spacing(12),
    marginTop: theme.spacing(2),
    color: '#000000',
  },
  addressGridTitle: {
    height: '100% !important',   
    paddingBottom: 5,
    width:'30% !important',
    wordWrap: "break-word",
  },
  addressButton: {
    padding: 0,
    width: "100% !important",
  },
  addressCard: {
    textAlign: "left",
    width: "100%",
    border: "none",
    borderRadius: 5,
    boxShadow: "none",
    border: `1px solid white`,
    borderRight: `3px solid white`,
    borderBottom: `3px solid white`,
    "&:hover": {
      backgroundColor: "transparent"
    },
    wordWrap: "break-word",
  },
  addressCardSelected: {
    textAlign: "left",
    width: "100%",
    border: `1px solid ${pink[500]}`,
    borderRight: `3px solid ${pink[500]}`,
    borderBottom: `3px solid ${pink[500]}`,
  },
  addressStateIcon: {
    float: "right",
  },
  addressStateIconSelected: {
    backgroundColor: "green",
  }
})

class ExistingAddress extends Component {

  constructor () {
    super();
    this.state = {
      color: '',
      selectedIndex: -1,
      
    }
    this.selectAddress.bind(this);
  }

  selectAddress = (index) => {
    this.setState({
      selectedIndex: index
    });
  }

  render() {
    const { selectedIndex } = this.state;
    const { classes } = this.props;    
      
    return (
      <div className={classes.root}>
        <GridList spacing={2} className={classes.gridList} cols={3}>
          {this.props.addresses && this.props.addresses.map((address) => (
            <GridListTile key={address.id} className={classes.addressGridTitle}>
              <Button className={classes.addressButton}>
                <Card onClick={() => {this.props.handleAddressSelect(address.id);this.selectAddress(address.id)}} className={
                    clsx(classes.addressCard, {
                      [classes.addressCardSelected]: (selectedIndex === address.id),
                    })
                  }
                >
                  <CardContent >
                    <Typography variant="body2" component="p" gutterBottom>{address.flat_building_name}</Typography>
                    <Typography >{address.locality}</Typography>
                    <Typography variant="body2" component="p">{address.city}</Typography>
                    <Typography variant="body2" component="p">{address.state.state_name}</Typography>
                    <Typography variant="body2" component="p">{address.pincode}</Typography>
                    <Typography className={classes.addressStateIcon} aria-label="add to favorites">
                      <CheckCircleIcon style={{ color: (selectedIndex === address.id) ? green[500]: grey[900] }} />
                    </Typography>
                  </CardContent>
                </Card>
              </Button>
            </GridListTile>
          ))}
        </GridList>
      </div>
    );
  }
}

export default withStyles(styles)(ExistingAddress);
