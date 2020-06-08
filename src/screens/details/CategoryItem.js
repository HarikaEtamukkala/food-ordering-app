import React, {Component} from 'react';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import MenuItem from './MenuItem';
class CategoryItem extends Component {

    render(){
       return(
            <div style={{padding:"1%"}}>
            <Typography variant="caption" gutterBottom style={{fontWeight:"bold", textTransform:"uppercase"}}> {this.props.item.category_name} </Typography>
            <Divider />
            {this.props.item.item_list.map(menuItem =>
              <div key={menuItem.id}>
                <MenuItem item={menuItem} this={this} />
              </div>
            )}
          </div>
        )
    }
}

export default CategoryItem;