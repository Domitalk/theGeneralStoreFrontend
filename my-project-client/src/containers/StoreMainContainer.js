import React from 'react'
import Login from '../components/Login'
import ItemsContainer from './ItemsContainer'


export default class StoreMainContainer extends React.Component {

    state = {
        users: [],
        loggedIn: false,
        currentUser: {},
        currentCartItems: [],
        currentCart: {}
    }

    componentDidMount () {
        fetch('http://localhost:4000/login')
        .then(r => r.json())
        .then((response) => {
            // console.log(response)
            this.setState({
                users: response
            })
        })
    }

    loginUser = (id) => {
        // console.log(id)
        // console.log(this.state.users)
        let loggedinuser = this.state.users.find(function(user) {
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
                currentCart: response,
                loggedIn: true,
                currentUser: loggedinuser
            }, () => { console.log(this.state.currentCart) })
        })
    }

    render() {
        return (
            <div>
                {this.state.loggedIn? <ItemsContainer /> : <Login users={this.state.users} loginUser={this.loginUser} />}
            </div>
        )
    }
}