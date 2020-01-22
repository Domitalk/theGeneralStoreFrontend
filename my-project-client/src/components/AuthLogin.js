import React from 'react'

export default class AuthLogin extends React.Component {

    state = {
        user: {},
        name: "",
        password: "", 
        createNew: false, 
        picture: ""
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
                        password: this.state.password,
                        picture: this.state.picture
                    }
                })
            })
            .then(r => r.json() )
            .then((response) => {

                // console.log(response.user)
                if (response.jwt) {
                    localStorage.token = response.jwt
                    localStorage.user_id = response.user.data.id
                    localStorage.name = response.user.data.attributes.name
                    localStorage.picture = response.user.data.attributes.picture
                    this.props.postAuthUser(localStorage.user_id)
                } else {
                    alert("Oops, something went wrong")
                }
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
                // console.log(response)
                if (response.jwt) {
                    localStorage.token = response.jwt
                    localStorage.user_id = response.user.data.id 
                    localStorage.name = response.user.data.attributes.name
                    localStorage.picture = response.user.data.attributes.picture
                    this.props.postAuthUser(localStorage.user_id)
                } else {
                    alert("Invalid Password or Username")
                }
            })
        }

        // postAuthUser  (when you have user created/get)
    }

    handleChange = (event) => {
        this.setState({ 
            [event.target.name]: event.target.value
        })
    }

    addPicture = () => { 
        if (this.state.createNew) {
            return (                  
            <label>
                Profile Picture: 
                <input type="text" name="picture" value={this.state.picture} onChange={this.handleChange} />
            </label>
            )
        } 
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

                    {this.addPicture()}
                    <br></br>
                    <input type="submit" value="Submit" /> 
                </form>
                <br></br>
                {this.state.createNew? <button onClick={this.swapCreate}> Logging In? </button> : <button onClick={this.swapCreate} > New User? </button>}
            </div> 
        )
    }
}