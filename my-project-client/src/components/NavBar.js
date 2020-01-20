import React from 'react'
import { NavLink } from 'react-router-dom'

const link = {
    width: '100px',
    padding: '12px',
    margin: '0 6px 6px',
    background: 'blue',
    textDecoration: 'none',
    color: 'white',
  }

export default class Navbar extends React.Component {
    
    render () {
        return (
            <div> 
                <NavLink 
                    to="/browse"
                    exact 
                    style={link}
                    activeStyle={{
                        background: 'darkblue'
                    }}
                >Browse Items</NavLink>
                <NavLink 
                    to="/cart"
                    exact 
                    style={link}
                    activeStyle={{
                        background: 'darkblue'
                    }}
                >Shopping Cart</NavLink>

            </div>
        )
    }
}