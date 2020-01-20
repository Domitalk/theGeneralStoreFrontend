import React from 'react'

export default class Login extends React.Component {

    state = {
        user: {}
    }

    handleChange = (event) => {
        // console.log("inside handleChange", event.target.value)
        this.setState({
            user: event.target.value
        })
    }

    mapAllValues = () => {
        return this.props.users.map((user) => {
            // console.log("inside map", user)
            return  <option name="user" value={user.id}>{user.name}</option>
        })
    }

    handleSubmit = (event) => {
        event.preventDefault() 
        // console.log(event.target.value)
        // console.log(this.state.user)

        this.props.loginUser(this.state.user)

        // send up the this.state.user 
        // it will be id number of user 
    }

    render() {
        return (
            <div> 
                <select value={this.state.user} onChange={this.handleChange}>
                    <option value="" selected>Select your option</option>
                   {this.mapAllValues()}
                </select> 
                <input type="submit" name="submit" onClick={this.handleSubmit} />
            </div> 
        )
    }
}