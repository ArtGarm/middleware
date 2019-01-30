import React , { Component } from 'react'
import ItemStyled from './item.styled'
import NameItem from './name.styled'


class Item extends Component {
    render (){
        var categories = this.props.categories.map( (item, index) => {
            return (
                <span key={index} > { item } </span>
            ) 
        })
        return (
            <ItemStyled className="item" key={this.props.id} >
                <NameItem> { this.props.joke } </NameItem>
                <div className="category"> {categories} </div>
            </ItemStyled>
        )
    }
}
export default Item