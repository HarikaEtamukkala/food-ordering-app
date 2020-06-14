import React, {Component} from 'react';
import Icon from '@material-ui/icons/RadioButtonCheckedOutlined';
import IconButton from '@material-ui/core/IconButton';
import Add from '@material-ui/icons/Add';
import Remove from '@material-ui/icons/Remove';
class CartItem extends Component {

    render(){
        const color = this.props.cartItem.item.item_type === "NON_VEG" ? "red" : "green";
        return(
    <div style={{display:"flex", flexDirection:"row", width:"100%", padding:"1%"}}>
      <div style={{width:"10%", display:"flex", alignItems:"center"}}><Icon style={{color:color}} fontSize="small">circle</Icon></div>
      <div style={{width:"40%", display:"flex", alignItems:"center", textTransform:"capitalize"}}><span style={{color:"grey"}}> {this.props.cartItem.item.item_name} </span></div>
      <div style={{display:"flex", alignItems:"center"}}>
        {/* <i  className="cartButton fa fa-minus" aria-hidden="true" onClick = {(event) => this.props.removeItem(this.props.cartItem)}></i> */}
        <IconButton onClick = {(event) => this.props.removeItem(this.props.cartItem)} aria-hidden="true"><Remove style={{height:"100%"}} /></IconButton>
      </div>
      <div style={{display:"flex", alignItems:"center"}}> {this.props.cartItem.quantity} </div>
      <div style={{display:"flex", alignItems:"center", paddingRight:"17%" }}>
        {/* <i  className="cartButton fa fa-plus" aria-hidden="true" onClick = {(event) => this.props.addItem(this.props.cartItem)}></i> */}
        <IconButton onClick = {(event) => this.props.addItem(this.props.cartItem)} aria-hidden="true"><Add style={{height:"100%"}} /></IconButton>
      </div>
      <div style={{display:"flex", alignItems:"center", float:"right"}}><i className="fa fa-rupee-sign" aria-hidden="true"><span style={{color:"grey"}}> {this.props.cartItem.item.price.toFixed(2)} </span></i></div>
    </div>
        )
    }
}
export default CartItem;