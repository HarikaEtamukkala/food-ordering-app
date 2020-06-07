import React,{Component} from 'react';
import { FormControl } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { InputLabel } from '@material-ui/core';
import { Input } from '@material-ui/core';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

const styles = theme => ({
    formControl: {
       
        minWidth: 190,
      }
})

class NewAddress extends Component{
    render(){
        const { classes } = this.props;
        return(
            <div>
             <div>
            <FormControl>
            <InputLabel htmlFor="my-input">Flat / Building No. *</InputLabel>
            <Input id="my-input" aria-describedby="my-helper-text" />            
            </FormControl>
            </div>
            <div>
            <FormControl>
            <InputLabel htmlFor="my-input">Locality *</InputLabel>
            <Input id="my-input" aria-describedby="my-helper-text" />            
            </FormControl>
            </div>
            <div>
            <FormControl>
            <InputLabel htmlFor="my-input">City *</InputLabel>
            <Input id="my-input" aria-describedby="my-helper-text" />            
            </FormControl>
            </div>
            <div>
            <FormControl className={classes.formControl}>
            <InputLabel id="demo-simple-select-label">State *</InputLabel>
            <Select labelId="demo-simple-select-label" id="demo-simple-select"  >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
            </Select>
            </FormControl>
            </div>
            <div>
            <FormControl>
            <InputLabel htmlFor="my-input">Pincode *</InputLabel>
            <Input id="my-input" aria-describedby="my-helper-text" />            
            </FormControl>
            </div>
            </div>
        )
    }
}
export default withStyles(styles)(NewAddress);