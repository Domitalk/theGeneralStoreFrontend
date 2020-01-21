import React from 'react'
import Item from '../components/Item'

export default class CartContainer extends React.Component {

    mapAllItems = () => {
        // console.log(this.props)
        return this.props.currentCartItems.map((item) => {
            return <Item item={item} />
        })
    }

    render() {
        // console.log(this.props.currentCartItems)
        return (
            <div>
                {this.mapAllItems()}
            </div>
        )
    }
}