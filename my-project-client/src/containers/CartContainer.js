import React from 'react'
import CartItem from '../components/CartItem'
import CartColumn from '../components/CartColumns'
import CartTotal from '../components/CartTotal'
export default class CartContainer extends React.Component {

    

    constructor(props){
        super(props)

        this.state = {
            cartitems: this.props.cartitems,
            cartTotal: 0
        }
        
        let total = []

        this.state.cartitems.map((cartitem, idx) => {
            let item= this.props.itemsCatalog.filter(function (element) {
                return element.id === cartitem.Item_id
            })
            total.push(item)
        })

        let currentTotal = total.map((item, idx) => { return item[0].price })

        var sum = 0;
        for (var i = 0; i < currentTotal.length; i++) {

            sum += currentTotal[i]
        }
        
        this.state = {...this.state, cartTotal: sum}
        
    }

   

    handleCartItemRmv = (idx)=> {
        let total = []

        this.state.cartitems.splice(idx, 1)
        this.state.cartitems.map((cartitem, idx) => {
            let item = this.props.itemsCatalog.filter(function (element) {
                return element.id === cartitem.Item_id
            })
            total.push(item)
        })

        let currentTotal = total.map((item, idx) => { return item[0].price })

        var sum = 0;
        for (var i = 0; i < currentTotal.length; i++) {

            sum += currentTotal[i]
        }

        this.setState({
            cartitems: [...this.state.cartitems],
            cartTotal: sum
        })


    }

    handleTotal = (priceChange) => {
        console.log("ewefbgfc")

        this.setState({ cartTotal: this.state.cartTotal +  priceChange})

    }

    mapAllItems = () => {
        // console.log(this.props)
        return this.state.cartitems.map((cartitem, idx) => {
            // return <Item item={item} />
            // console.log(this.props)
             

            let itemToRender = this.props.itemsCatalog.find(function(element) {
                return element.id === cartitem.Item_id })
            return <CartItem handleTotal={this.handleTotal} item={itemToRender} quantity={1} handleCartItemRmv={() => { this.handleCartItemRmv(idx)}}/>
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
                <div>   
                    {this.state.cartitems.length === 0 ? 
                    <h2 className="py-5 col-10 mx-auto text-title3 font-weight-bold text-yellow text-center"> There's nothing in your cart!!!</h2>
                    :      
                    <CartTotal total={this.state.cartTotal}/>
                    }
                </div>
            </div>
        )
    }
}