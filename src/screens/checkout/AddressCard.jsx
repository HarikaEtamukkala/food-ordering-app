import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function AddressCard() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  const tileData = [
    {
      flat: "the dshjfd sdsjfdsn 22 ",
      locality:"dfdsk ,dnj,jndfjk",
      city: 'Bangalore',
      state: 'Karanataka',
      pincode:'548909'
    },
    {
      flat: "the dshjfd sdsjfdsn 22 ",
      locality:"dfdsk ,dnj,jndfjk",
      city: 'Bangalore',
      state: 'Karanataka',
      pincode:'548909'
    },
    {
      flat: "the dshjfd sdsjfdsn 22 ",
      locality:"dfdsk ,dnj,jndfjk",
      city: 'Bangalore',
      state: 'Karanataka',
      pincode:'548909'
    }
  ];
  
  return (
   <div>
    { tileData.map((tile,index) => (
    <Card className={classes.root} variant="outlined" >     
      <CardContent component={'span'}>
        <Typography variant="display4" className={classes.title} color="textSecondary" gutterBottom>
          Word of the Day
        </Typography>
        <Typography  variant="display3">
          be{bull}nev{bull}o{bull}lent
        </Typography>
        <Typography variant="display2" className={classes.pos} color="textSecondary">
          adjective
        </Typography>
        <Typography  variant="display1">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
     
    </Card>  ))}
    </div>
  );
  
}