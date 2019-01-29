import React , { Component } from 'react'
import ItemStyled from './item.styled'
import NameItem from './name.styled'


class Item extends Component {
    render (){
        return (
            <ItemStyled className="item" key={this.props.id} >
                <div className="con">
                    <img src={ this.props.thumbnailUrl } alt="" />
                </div>
                <NameItem> { this.props.title } </NameItem>
            </ItemStyled>
        )
    }
}
export default Item