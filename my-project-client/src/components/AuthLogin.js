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

        fetch('')



        // postAuthUser  (when you have user created/get)
    }

    handleChange = (event) => {
        this.setState({ 
            [event.target.name]: event.target.value
        }, console.log(this.state))
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