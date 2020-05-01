
import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { Card, Icon, Image } from 'semantic-ui-react'

const link = {
    width: '100px',
    padding: '12px',
    margin: '0 6px 6px',
    background: 'blue',
    textDecoration: 'none',
    color: 'white',
  }

export default class Navbar extends React.Component {
    
    // reverseOrder = ()=> 
    // {
    //     let itemArray = this.props.itemArray
    //     itemArray.reverse()
    //     console.log(itemArray)
    // }
    render () {
        return (

            
                <nav className="navbar navbar-expand-sm navbar-style ">   
                <h3 className="text-title2">The Generic Store</h3>
                    <ul className="navbar-nav align-items-center">
                    <li className="ml-5">
                        <NavLink exact to="/" >
                            About Us
                        </NavLink>
                    </li>
                    <li className="ml-5">
                        <NavLink exact to="/" >
                            Testimonials
                        </NavLink>
                    </li>
                    <li className="ml-5">
                        <NavLink exact to="/" >
                            Charity Involvement
                        </NavLink>
                    </li>
                    <li className="ml-5">
                        <NavLink to="/browse" >
                            Products
                        </NavLink>
                    </li>
                    <li className="ml-5">
                        <NavLink to="/profile" >
                           My Profile
                        </NavLink>
                    </li>
                    <li className="ml-5">
                        <NavLink to="/log in" >
                            Log Out
                        </NavLink>
                    </li>
                    
                    </ul>
                     <NavLink exact to='/cart' className="ml-auto">
                     <button className="checkout-button">
                        <span className="mr-2">
                            <Icon className="cart arrow down" />
                        </span>
                        My Cart
                     </button>  
                    </NavLink>  
                </nav>
            
            // <div> 
            //     <NavLink 
            //         to="/browse"
            //         exact 
            //         style={link}
            //         activeStyle={{
            //             background: 'darkblue'
            //         }}
            //     >Browse Items</NavLink>
            //     <NavLink 
            //         to="/cart"
            //         exact 
            //         style={link}
            //         activeStyle={{
            //             background: 'darkblue'
            //         }}
            //     >Shopping Cart</NavLink>


            // </div>
        )
    }
}



