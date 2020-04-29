import React from 'react'
import Login from '../components/Login'
import ItemsContainer from './ItemsContainer'
import Navbar from '../components/NavBar'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import CartContainer from './CartContainer'
import Profile from '../components/Profile'
import AuthLogin from '../components/AuthLogin'


export default class StoreMainContainer extends React.Component {

    state = {
        users: [],
        loggedIn: false,
        currentUser: 0,
        currentCartItems: [], 
        currentCart: {}, 
        items: [], 
        previousCarts: []
    }

    reverseOrder = () => {
        let reverseArray = this.state.items 
        reverseArray.reverse()
        

        this.setState({ 
            items: reverseArray
        })
    }

        // also crashing 

    // componentDidMount() {
    //     fetch('http://localhost:4000/login')
    //         .then(r => r.json())
    //         .then((response) => {
    //             // console.log(response)
    //             this.setState({
    //                 users: response
    //             })
    //         })
    // }
    componentDidMount() {
        if (window.performance) {
            if (performance.navigation.type == 1) {
                localStorage.removeItem("user_id")
                localStorage.removeItem("name")
                localStorage.removeItem("token")
                localStorage.removeItem("picture")
                window.location = "http://localhost:3000"
            }
        }
    }



    addItemToCart = (itemToAdd) => {
        fetch('http://localhost:4000/cart_items', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                "Authorization": localStorage.token
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
            })
        })
    }

    postAuthUser = (arg) => {
        // console.log(arg)
        fetch('http://localhost:4000/carts', {
            method: "POST", 
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json', 
                "Authorization": localStorage.token
            }, 
            body: JSON.stringify({
                id: arg 

            })
        })
        .then( r => r.json())
        .then((response) => {
            console.log(response)
            this.setState({
                currentCart: response.cart,
                loggedIn: true,
                currentUser: arg,
                items: response.items
            })
        })
        .then( 
            fetch(`http://localhost:4000/carts/${arg}`, {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json', 
                    "Authorization": localStorage.token
                }
            })
            .then(r => r.json())
            .then((response) => {
                this.setState({
                    previousCarts: response
                })
            })
        )
    }

    checkout = () => {
        console.log('chekout fetch trigger')

    let cart = this.state.currentCart
    let user = this.state.currentUser

        let oldCart = {
            id: user.id,
            cart_open: false
        }


        // })
        //     .then
        fetch('http://localhost:4000/carts', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                "Authorization": localStorage.token
            },
            body: JSON.stringify(oldCart)
        })

        .then(r=>r.json())
        .then((response) => { 
            console.log("before set state"+response)
        
            this.setState({   
                currentCartItems: [],
                currentCart: response.cart
            }, () => { console.log(this.state) } ) 

        })
            // .then(fetch('http://localhost:4000/carts', {
            //     method: "POST",
            //     headers: {
            //         'Content-Type': 'application/json',
            //         'Accept': 'application/json',
            //         "Authorization": localStorage.token
            //     },
            //     body: JSON.stringify({
            //         id: user.id

            //     })
            // })
            //     .then(r => r.json())
            //     .then((response) => {
            //         //console.log(response)
            //         this.setState({
            //             currentCart: response.cart
            //         })
            //     }))

    }

    // loginUser = (id) => {
    //     // console.log(id)
    //     // console.log(this.state.users)
    //     let loggedinuser = this.state.users.find(function (user) {
    //         return user.id === parseInt(id)
    //     })
    //     // console.log("after find", loggedinuser)
    //     fetch('http://localhost:4000/carts', {
    //         method: "POST",
    //         headers: {
    //             'Content-Type': 'application/json',
    //             'Accept': 'application/json'
    //         },
    //         body: JSON.stringify({
    //             user: loggedinuser
    //         })
    //     })
    //     .then(r => r.json())
    //     .then((response) => {
    //         // console.log(response)
    //         this.setState({
    //             currentCart: response.cart,
    //             loggedIn: true,
    //             currentUser: loggedinuser,
    //             items: response.items
    //         })
    //     })
    // }

    render() {
        return (
            <Router> 
                <div>
                    {/* <Route path="/" render={routerProps => this.state.loggedIn? <Navbar/> : <Login users={this.state.users} loginUser={this.loginUser} /> } /> */}
                    <Route path="/" render={routerProps => this.state.loggedIn ? <Navbar reverseOrder={this.reverseOrder}/> : <AuthLogin postAuthUser={this.postAuthUser} /> } />    
                    <Route exact path="/browse" render={routerProps => <ItemsContainer {...routerProps} items={this.state.items} addItemToCart={this.addItemToCart} loggedIn={this.state.loggedIn} />} />
                    <Route exact path="/cart"  render={routerProps => <CartContainer {...routerProps} itemsCatalog={this.state.items} loggedIn={this.state.loggedIn} cartitems={this.state.currentCartItems} checkout={this.checkout}/>} />
                    <Route exact path="/profile" render={routerProps => <Profile {...routerProps} user={this.state.currentUser} loggedIn={this.state.loggedIn} />}/>
                    <Route exact path="/log in" render={routerProps => <AuthLogin {...routerProps} /> } />
                    {/* {this.state.loggedIn? <ItemsContainer items={this.state.items} /> : <Login users={this.state.users} loginUser={this.loginUser} />} */}
                </div>
            </Router>
        )
    }
}
