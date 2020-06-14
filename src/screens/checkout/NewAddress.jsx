import React, { Component } from 'react';
import { FormControl } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { InputLabel } from '@material-ui/core';
import { Input } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

const styles = theme => ({
    formControl: {
        minWidth: 190,
    }
})

class NewAddress extends Component {
    constructor () {
        super();
        this.state = {
            address:
            {
                flat: '',
                locality: '',
                city: '',
                state: '',
                pincode: ''
            }

        }
    }
    stateChangeHandler = event => {
        this.setState({
            state: event.target.value
        })
    }
    flatChangeHandler = event => {
        console.log("flat" + event.target.value)
        this.setState({
            flat: event.target.value
        })
    }
    localityChangeHandler = event => {
        this.setState({
            locality: event.target.value
        })
    }
    cityChangeHandler = event => {
        this.setState({
            city: event.target.value
        })
    }
    pincodeChangeHandler = event => {
        this.setState({
            pincode: event.target.value
        })
    }
    render() {
        const { classes } = this.props;

        return (
            <div>
                <div>
                    <FormControl>
                        <InputLabel htmlFor="flat">Flat / Building No. *</InputLabel>
                        <Input id="flat" aria-describedby="my-helper-text" flat={this.state.address.flat} onChange={this.flatChangeHandler} />
                    </FormControl>
                </div>
                <div>
                    <FormControl>
                        <InputLabel htmlFor="locality">Locality *</InputLabel>
                        <Input id="locality" aria-describedby="my-helper-text" locality={this.state.address.locality} onChange={this.localityChangeHandler} />
                    </FormControl>
                </div>
                <div>
                    <FormControl>
                        <InputLabel htmlFor="city">City *</InputLabel>
                        <Input id="city" aria-describedby="my-helper-text" city={this.state.address.city} onChange={this.cityChangeHandler} />
                    </FormControl>
                </div>
                <div>
                    <FormControl className={classes.formControl}>
                        <InputLabel id="state">State *</InputLabel>
                        <Select value={this.state.address.state} onChange={this.stateChangeHandler}>
                            {this.props.states.states.length && this.props.states.states.map((state, index) => (
                                <MenuItem key={index} value={state.state_name}>{state.state_name}</MenuItem>
                            ))}

                        </Select>
                    </FormControl>
                </div>
                <div>
                    <FormControl>
                        <InputLabel htmlFor="pincode">Pincode *</InputLabel>
                        <Input id="pincode" aria-describedby="my-helper-text" value={this.state.address.pincode} onChange={this.pincodeChangeHandler} />
                    </FormControl>
                </div>

                <div>
                    <Button variant="contained" color="secondary">Save Address</Button>
                </div>
            </div>
        )
    }
}
export default withStyles(styles)(NewAddress);