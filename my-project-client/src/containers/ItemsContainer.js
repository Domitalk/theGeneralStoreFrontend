import React from 'react'
import Item from '../components/Item'

export default class ItemsContainer extends React.Component {

    mapAllItems = () => {
        // console.log(this.props)
        return this.props.items.map((item) => {
            return <Item item={item} addItemToCart={this.props.addItemToCart} />
        })
    }
    
    render () {
        return (
            <div>
                <br></br>
                {this.mapAllItems()}
            </div>
        )
    }

}