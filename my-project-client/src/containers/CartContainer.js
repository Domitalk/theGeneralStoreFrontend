import React from 'react'
import CartItem from '../components/CartItem'
import CartColumn from '../components/CartColumns'
export default class CartContainer extends React.Component {

    state = {
        cartitems: this.props.cartitems
    }

    handleCartItemRmv = (idx)=> {
        this.state.cartitems.splice(idx, 1)
        this.setState({
            cartitems: [...this.state.cartitems]
        })
    }

    mapAllItems = () => {
        // console.log(this.props)
        return this.state.cartitems.map((cartitem, idx) => {
            // return <Item item={item} />
            // console.log(this.props)
             

            let itemToRender = this.props.itemsCatalog.find(function(element) {
                return element.id === cartitem.Item_id })
            return <CartItem item={itemToRender} quantity={1} handleCartItemRmv={() => { this.handleCartItemRmv(idx)}}/>
        })
    }



    render () {
        // console.log(this.props.currentCartItems)
        return (
            <div>
                <h2 className="py-5 col-10 mx-auto text-title3 font-weight-bold text-blue text-center">
                    {this.props.loggedIn ? "Your Cart" : null }
                </h2>
                <CartColumn/>
                {this.mapAllItems()}
            </div>
        )
    }
}