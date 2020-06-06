import React,{Component} from 'react';
import { FormControl } from '@material-ui/core';
import { InputLabel } from '@material-ui/core';
import { Input } from '@material-ui/core';
import { FormHelperText } from '@material-ui/core';

class NewAddress extends Component{
    render(){
        return(
            <div>
             <div>
            <FormControl>
            <InputLabel htmlFor="my-input">Flat / Building No.</InputLabel>
            <Input id="my-input" aria-describedby="my-helper-text" />            
            </FormControl>
            </div>
            <div>
            <FormControl>
            <InputLabel htmlFor="my-input">Locality</InputLabel>
            <Input id="my-input" aria-describedby="my-helper-text" />            
            </FormControl>
            </div>
            <div>
            <FormControl>
            <InputLabel htmlFor="my-input">City</InputLabel>
            <Input id="my-input" aria-describedby="my-helper-text" />            
            </FormControl>
            </div>
            <div>
            <FormControl>
            <InputLabel htmlFor="my-input">State</InputLabel>
            <Input id="my-input" aria-describedby="my-helper-text" />            
            </FormControl>
            </div>
            <div>
            <FormControl>
            <InputLabel htmlFor="my-input">Pincode</InputLabel>
            <Input id="my-input" aria-describedby="my-helper-text" />            
            </FormControl>
            </div>
            </div>
        )
    }
}
export default NewAddress;