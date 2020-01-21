import React from 'react'

export default class AuthLogin extends React.Component {

    state = {
        user: {},
        name: "",
        password: "", 
        createNew: false 
    }
    swapCreate = () => {
        this.setState({
            createNew: !this.state.createNew
        })
    }

    handleSubmit = (event) => {
        event.preventDefault() 

        if (this.state.createNew) {
            fetch('http://localhost:4000/api/v1/users', {
                method: "POST", 
                headers: {
                    'Content-Type': 'application/json'
                }, 
                body: JSON.stringify({
                    user: {
                        name: this.state.name, 
                        password: this.state.password
                    }
                })
            })
            .then(r => r.json() )
            .then((response) => {

                console.log(response.user)
                localStorage.token = response.jwt
                localStorage.user_id = response.user.data.id
                localStorage.name = response.user.data.attributes.name
                this.props.postAuthUser(localStorage.user_id)
            })
        } else {
            fetch('http://localhost:4000/api/v1/auth', {
                method: "POST", 
                headers: {
                    'Content-Type': 'application/json'
                }, 
                body: JSON.stringify({
                    user: {
                        name: this.state.name, 
                        password: this.state.password
                    }
                })
            }) 
            .then(r => r.json() )
            .then((response) => {
                localStorage.token = response.jwt
                localStorage.user_id = response.user.data.id 
                localStorage.name = response.user.data.attributes.name
                this.props.postAuthUser(localStorage.user_id)
            })
        }

        // postAuthUser  (when you have user created/get)
    }

    handleChange = (event) => {
        this.setState({ 
            [event.target.name]: event.target.value
        })
    }

    render() {
        return (
            <div> 
                <h1>Log In</h1>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Username: 
                        <input type="text" name="name" value={this.state.name} onChange={this.handleChange} />
                    </label>
                    <br></br>
                    <label>
                        Password:
                        <input type="password" name="password" value={this.state.password} onChange={this.handleChange} /> 
                    </label>
                    <br></br>
                    <input type="submit" value="Submit" /> 
                </form>
                <br></br>
                {this.state.createNew? <button onClick={this.swapCreate}> Logging In? </button> : <button onClick={this.swapCreate} > New User? </button>}
            </div> 
        )
    }
}