import React from 'react'
import {Link} from "react-router-dom"
import styled from "styled-components"
import { Card, Icon, Image } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom'


export default class Item extends React.Component {
    
    state = {
        purchased: false
    }

    handleClick = () => {
        if(this.props.addItemToCart) {
            this.props.addItemToCart(this.props.item)
        }
    }

    

    render() {
        let purchased = this.state.purchased; 
        
        return (

            <div className="column five wide" onClick={()=>console.log("clicked on this div")}>
                <Card>
                <NavLink to="/details" >
                    <Image src={this.props.item.picture} />
                </NavLink>
                <Card.Content>
                    <Card.Header>{this.props.item.name}</Card.Header>
                    <Card.Meta className= "text-blue font-italic">${this.props.item.price}</Card.Meta>
                    <Card.Description>
                        {/* Daniel is a comedian living in Nashville. */}
                    </Card.Description>
                </Card.Content>
                <Card.Content extra>   
                                    
                                        
                                    {purchased ? 
                                        (<button>
                                            <p className="text-capitalize mb-0" disabled={true}>
                                                {" "}
                                                In Cart
                                            </p>
                                        </button> 
                                        ) 
                                            : 
                                        (<button onClick={() => this.handleClick()} className="checkout-button">
                                            <span className="mr-2">
                                                <i className="fas fa-cart-plus" />      
                                            </span> 
                                        </button>
                                        )
                                    }
                               
                                    
                                
                          
                    {this.props.item.quantity ? <h2>QTY: {this.props.item.quantity}</h2> : null}
                </Card.Content>
            </Card> 
            </div>        
        )
    }
    
}

{/* <div onClick={this.handleClick} className="itemComponent">
    <h1>{this.props.item.name}</h1>
    <h2>${this.props.item.price}</h2>
    <div className="itemPictureContainer">
        <img className="itemPicture" src={this.props.item.picture} alt="" />
    </div>
</div> */}
