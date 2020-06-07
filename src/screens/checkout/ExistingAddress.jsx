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
  paper: {
    width: theme.spacing(30),
    height: theme.spacing(50),
    padding: theme.spacing(1),
    textAlign: '',
    color: '#000000',
  },
  checkCircle: {
    marginLeft: theme.spacing(12),
    marginTop: theme.spacing(2),
    color: '#000000',
  },
  addressGridTitle: {
    height: '100% !important',
    paddingBottom: 5,
  },
  addressButton: {
    padding: 0,
    width: "100%",
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
  }

  handleAddressSelect = (index) => {
    this.setState({
      selectedIndex: index
    });
  }

  render() {
    const { selectedIndex } = this.state;
    const { classes } = this.props;
    const tileData = [{
      flat: "Alta 503 ",
      locality: "SJR Fiesta Homes",
      city: 'Bangalore',
      state: 'Karanataka',
      pincode: '548909'
    }, {
      flat: "Alta 503 ",
      locality: "SJR Fiesta Homes asdf asdfasdf adf we efasdf adfwawef dfsadf asdfasdfasdfasdfadfasdfadfadfadsf asdfadasdf adsfasdfadsf asdfa fasf asdfadsfasd",
      city: 'Bangalore',
      state: 'Karanataka',
      pincode: '548909'
    }, {
      flat: "Alta 503 ",
      locality: "SJR Fiesta Homes asdfa sdfasdfa edfawe fasdasdfsadf adsfasdf ",
      city: 'Bangalore',
      state: 'Karanataka',
      pincode: '548909'
    }];


    return (
      <div className={classes.root}>
        <GridList spacing={2} className={classes.gridList} cols={3}>
          {tileData.map((tile, index) => (
            <GridListTile key={index} className={classes.addressGridTitle}>
              <Button className={classes.addressButton}>
                <Card onClick={() => this.handleAddressSelect(index)} className={
                    clsx(classes.addressCard, {
                      [classes.addressCardSelected]: (selectedIndex === index),
                    })
                  }
                >
                  <CardContent>
                    <Typography gutterBottom>{tile.flat}</Typography>
                    <Typography >{tile.locality}</Typography>
                    <Typography variant="body2" component="p">{tile.city}</Typography>
                    <Typography variant="body2" component="p">{tile.state}</Typography>
                    <Typography variant="body2" component="p">{tile.pincode}</Typography>
                    <Typography className={classes.addressStateIcon} aria-label="add to favorites" onClick={() => this.handleChange()}>
                      <CheckCircleIcon style={{ color: (selectedIndex === index) ? green[500]: grey[900] }} />
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
