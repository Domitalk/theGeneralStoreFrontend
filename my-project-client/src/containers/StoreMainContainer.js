import React from 'react'
import Login from '../components/Login'
import ItemsContainer from './ItemsContainer'


export default class StoreMainContainer extends React.Component {

    state = {
        users: [],
        loggedIn: false,
        currentUser: {},
        currentCartItems: []
    }


    loginUser = (id) => {
        // console.log(id)
        // console.log(this.state.users)
        let loggedinuser = this.state.users.find(function(user) {
            return user.id === parseInt(id)
        })
        console.log("after find", loggedinuser)
        this.setState({
            currentUser: loggedinuser,
            loggedIn: true
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