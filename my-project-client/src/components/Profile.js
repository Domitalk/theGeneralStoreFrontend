import React from 'react'


export default class Profile extends React.Component {
    state = {
        carts: []
    }
    makeCreatedAtPretty = (created_at) => {
        if (this.props.user.created_at) {
            let copyString = created_at
            return copyString.substring(0, 10)
        }
    }

    componentDidMount() {
        fetch(`http://localhost:4000/users/${this.props.user.id}`)
        .then(r => r.json())
        .then((response) => {
            this.setState({
                carts: response
            })
        })
    }

    showPreviousCarts = () => {
        return (
            <ul>
                {this.mapAllCarts()}
            </ul>
        )
    }

    mapAllCarts = () => {
        if (this.state.carts.length > 0) {
            return this.state.carts.map((cart) => {
                return (
                    <li>
                        Shopping Cart Created: {this.makeCreatedAtPretty(cart.created_at)}, Updated: {this.makeCreatedAtPretty(cart.updated_at)}
                    </li>
                )
            })
        }
    }

    render() {
        // console.log(this.props)

        return (
            <div>
                
                {this.props.user.name? <h1>{this.props.user.name}</h1> : null}
                {this.props.user.name? <h3>Member Since: {this.makeCreatedAtPretty(this.props.user.created_at)}</h3> : null}
                {this.props.user.name? this.showPreviousCarts() : null }
            </div>
        )
    }
    
}