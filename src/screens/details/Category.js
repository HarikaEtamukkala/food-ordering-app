import React, {Component} from 'react';
import CategoryItem from './CategoryItem';
class Category extends Component {

    render(){
        console.log(this.props.categories);
        return(
        <div className='menu'>
          <div style={{padding:'3%'}}>
            {this.props.categories.map(categoryItem =>
              <div key={categoryItem.id}>
                <CategoryItem item={categoryItem} this={this} />
              </div>
            )}
          </div>
        </div>

        );
    }
}

export default Category;