import React from 'react'
import {Link} from "react-router-dom"
import styled from "styled-components"
import { Button, Header, Card, Icon, Image, Modal } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom'

export default class Item extends React.Component {
    
    state = {
        purchased: false,
        open: true 
    }
    

    show = (dimmer) => () => this.setState({ dimmer, open: true })
    close = () => this.setState({ open: false })

    handleClick = () => {
        this.setState({
            purchased: true
        })

        if(this.props.addItemToCart) {
            this.props.addItemToCart(this.props.item)
        }
    }

    

    

    render() {
        const { open, dimmer } = this.state;
        let purchased = this.state.purchased; 
        
        return (

            <div className="column five wide" /*where and onClick needs to go*/>
                <Card>
                <NavLink to="/details" >
                        <Image className = "img-container" src={this.props.item.picture} />
                </NavLink>
                <Card.Content>
                    <Card.Header>{this.props.item.name}</Card.Header>
                    <Card.Meta className= "text-blue font-italic">${this.props.item.price}</Card.Meta>
                    <Card.Description>
                        {/* Daniel is a comedian living in Nashville. */}
                    </Card.Description>
                </Card.Content>
                <Card.Content extra>   
                                    
                                <row> 
                                    {purchased ? 
                                        (<button>
                                            <p className="text-capitalize mb-0" disabled={true}>
                                                {" "}
                                                In Cart
                                            </p>
                                        </button> 
                                        ) 
                                            : 
                                (<button className="checkout-button" onClick={this.show('blurring')} >
                                            <span className="mr-2">
                                                <i className="fas fa-cart-plus" />      
                                            </span> 
                                        </button>
                                        )
                                    }
                                    <div style={{ display: "flex" }}>
                                            {/* <button className="checkout-button-yellow" style={{ marginLeft: "auto" }}>
                                            Details Page
                                        </button> */}
                                    </div>
                                </row> 
                    {this.props.item.quantity ? <h2>QTY: {this.props.item.quantity}</h2> : null}
                </Card.Content>
            </Card> 
            
            
                <Modal  size = 'tiny' dimmer={dimmer} open={open} onClose={this.close}>
                    <Modal.Header>Item Added To Cart!</Modal.Header>
                    <Modal.Content image>
                        <Image
                            wrapped
                            size='medium'
                            src={this.props.item.picture}
                        />
                        <Modal.Description>
                            <Header>{this.props.item.name}</Header>
                            <p>${this.props.item.price}</p>
                            
                        </Modal.Description>
                    </Modal.Content>
                    <Modal.Actions>
                        <button className="checkout-button" onClick={() => { this.handleClick(); this.close();}}>
                            Continue Shopping
                        </button>
                        {/* <button onClick={() => { this.handleClick() }} className="checkout-button-yellow">
                        <NavLink to="/cart" >
                            Go To Cart
                        </NavLink>
                        </button> */}
                            
                             {/* onClick={this.close} */}
                       
                    </Modal.Actions>
                </Modal>
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
