import React from 'react'
import Item from '../components/Item'

export default class CartContainer extends React.Component {

    mapAllItems = () => {
        // console.log(this.props)
        return this.props.cartitems.map((cartitem) => {
            // return <Item item={item} />
            // console.log(this.props)
            let itemToRender = this.props.itemsCatalog.find(function(element) {
                return element.id === cartitem.Item_id })
            return <Item item={itemToRender} quantity={cartitem.quantity} />
        })
    }

    render () {
        // console.log(this.props.currentCartItems)
        return (
            <div>
                {this.mapAllItems()}
            </div>
        )
    }
}