import React from 'react'
import Login from '../components/Login'
import ItemsContainer from './ItemsContainer'
import Navbar from '../components/NavBar'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import CartContainer from './CartContainer'


export default class StoreMainContainer extends React.Component {

    state = {
        users: [],
        loggedIn: false,
        currentUser: {},
        currentCartItems: [],
        currentCart: {}, 
        items: []
    }

    componentDidMount() {
        fetch('http://localhost:4000/login')
            .then(r => r.json())
            .then((response) => {
                // console.log(response)
                this.setState({
                    users: response
                })
            })
    }


    addItemToCart = (itemToAdd) => {
        fetch('http://localhost:4000/cart_items', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                cart: this.state.currentCart,
                item: itemToAdd
            })
        })
        .then(r => r.json())
        .then((response) => {
            
            let tempfalse = false 


            let newArr = [...this.state.currentCartItems]

            newArr.forEach((cartitem) => {
                if (cartitem.id === response.id) {
                    tempfalse = true 
                }
            })

            if (tempfalse) {

                let replaceindex = newArr.map(function(el) {
                    return el.id
                }).indexOf(response.id)

                newArr.splice(replaceindex, 1, response)

            } else {
                newArr = [...newArr, response]
            }


            
            this.setState({
                currentCartItems: newArr
            }, () => {console.log("after set state", this.state.currentCartItems)})
        })
    }

    loginUser = (id) => {
        // console.log(id)
        // console.log(this.state.users)
        let loggedinuser = this.state.users.find(function (user) {
            return user.id === parseInt(id)
        })
        // console.log("after find", loggedinuser)
        fetch('http://localhost:4000/carts', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
            user: loggedinuser
            })
        })
        .then(r => r.json())
        .then((response) => {
            // console.log(response)
            this.setState({
                currentCart: response.cart,
                loggedIn: true,
                currentUser: loggedinuser,
                items: response.items
            })
        })
            
    }

    render() {
        return (
            <Router> 
                <div>
                    {this.state.loggedIn? <Navbar/> : <Login users={this.state.users} loginUser={this.loginUser} /> }
                    <Route exact path="/browse" render={routerProps => <ItemsContainer {...routerProps} items={this.state.items} addItemToCart={this.addItemToCart} />} />
                    <Route exact path="/cart" render={routerProps => <CartContainer {...routerProps} currentCartItems={this.state.currentCartItems} />} />
                    {/* {this.state.loggedIn? <ItemsContainer items={this.state.items} /> : <Login users={this.state.users} loginUser={this.loginUser} />} */}
                </div>
            </Router>
        )
    }
}
