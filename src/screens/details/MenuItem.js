import React, {Component} from 'react';
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';
import Add from '@material-ui/icons/Add';
class MenuItem extends Component {
   

   
    render(){
       const color = this.props.item.item_type === "NON-VEG" ? "red" : "green";
       return(
        <div style={{display:"flex", flexDirection:"row", width:"100%", padding:"2%"}}>
        <div style={{width:"5%", display:"flex", alignItems:"center"}}><Icon style={{color:color}} fontSize="small">circle</Icon></div>
        <div style={{width:"65%", display:"flex", alignItems:"center", textTransform:"capitalize"}}> {this.props.item.item_name} </div>
        <div style={{width:"20%", display:"flex", alignItems:"center"}}><i className="fa fa-rupee-sign" aria-hidden="true"> {this.props.item.price.toFixed(2)} </i></div>
        <div style={{width:"10%", display:"flex", alignItems:"center"}}>
        <IconButton><Add style={{height:"100%"}} /></IconButton>
        </div>
      </div>
       )
   }

}

export default MenuItem;