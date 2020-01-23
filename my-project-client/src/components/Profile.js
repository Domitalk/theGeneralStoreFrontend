import React from 'react'

export default class Profile extends React.Component {
    state = {
        carts: [], 
        loadeverything: false, 
        picture: ""
    }
    makeCreatedAtPretty = (created_at) => {
        // console.log(created_at)
        let copyString = created_at
        return copyString.substring(0, 10)
        
    }


        /// for some reason this was crashing my authlogin

    // componentDidMount() {
    //     if (this.state.carts === 0) {
    //         fetch(`http://localhost:4000/carts/${localStorage.user_id}`)
    //         .then(r => r.json())
    //         .then((response) => {
    //             this.setState({
    //                 carts: response
    //             }, () => {console.log(this.state)})
    //         })
    //     }
    // }

    // checkme = () => {
    //     if (this.state.carts === 0) {
    //         fetch(`http://localhost:4000/carts/${localStorage.user_id}`)
    //         .then(r => r.json())
    //         .then((response) => {
    //             this.setState({
    //                 carts: response
    //             }, () => {console.log(this.state)})
    //         })
    //     }
    // }

    // showPreviousCarts = () => {
    //     // this.checkme()
    //     return (
    //         <ul>
    //             {this.mapAllCarts()}
    //         </ul>
    //     )
    // }

    // mapAllCarts = () => {
    //     if (this.state.carts.length > 0) {
    //         return this.state.carts.map((cart) => {
    //             return (
    //                 <li>
    //                     Shopping Cart Created: {this.makeCreatedAtPretty(cart.created_at)}, Updated: {this.makeCreatedAtPretty(cart.updated_at)}
    //                 </li>
    //             )
    //         })
    //     }
    // }


    //// come back and finish showing all the profile elements

    componentDidMount() {
        if (!!localStorage.user_id) {
            fetch(`http://localhost:4000/carts/${localStorage.user_id}`, {
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
                    carts: response, 
                    loadeverything: true
                })
            })
        }
    }

    mapAllCarts = () => {
        return (this.state.carts.map((cart) => {
            // console.log(cart)
            return <li>Shopped on: {this.makeCreatedAtPretty(cart.created_at)}</li>
            })
        )
    }
    
    handleSubmit = (event) => {
        event.preventDefault() 
        
        fetch(`http://localhost:4000/items/${localStorage.user_id}`, {
            method: "PATCH", 
            headers: {
                'Content-Type': 'application/json',
                'Authorization': localStorage.token
            }, 
            body: JSON.stringify({
                picture: this.state.picture
            })
        })
        .then(r => r.json() )
        .then((response) => {

            // console.log(response)
            if (response.picture) {
                localStorage.picture = response.picture
                this.setState({
                    picture: ""
                })
            } else {
                alert("Oops, something went wrong")
            }
        })
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    loadstuff = () => {
        return (
            <div>
                <h1>{localStorage.name}</h1>
                <div className="profileDiv">
                    <img className="profileImg" src={localStorage.picture} />
                </div>
                <h3>Want to upload a profile pic?</h3>
                <form onSubmit={this.handleSubmit}>
                    <label for="picture">Picture</label>
                    <input type="text" name="picture" placeholder="URL HERE" value={this.state.picture} onChange={this.handleChange} />
                    <input type="submit" name="submit"/>
                </form>
                <ul>
                    {this.mapAllCarts()}
                </ul>
            </div>
        )
    }

    render() {
        // console.log(this.props)
        // console.log(this.state)

        return (
            <div>
                {this.state.loadeverything ? this.loadstuff() : null}
            </div>
        )
    }
    
}