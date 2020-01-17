import React from 'react'
import Login from '../components/Login'


export default class StoreMainContainer extends React.Component {

    state = {
        users: [],
        loggedIn: false,
        currentUser: {},
        currentCartItems: []
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
        console.log("after find", loggedinuser)
        this.setState({
            currentUser: loggedinuser,
            loggedIn: true
        })
    }



    render() {
        return (
            <div>
                {this.state.loggedIn? null : <Login users={this.state.users} loginUser={this.loginUser} />}
            </div>
        )
    }


}