import React from 'react'
import {Link} from "react-router-dom"
import styled from "styled-components"
import { Card, Icon, Image } from 'semantic-ui-react'

export default class Item extends React.Component {

    handleClick = () => {
        if(this.props.addItemToCart) {
            this.props.addItemToCart(this.props.item)
        }
    }

    

    render() {
        return (
            <div className="column five wide" >
            <Card onClick={()=> this.handleClick()}>
                    <Image src={this.props.item.picture} />
                <Card.Content>
                    <Card.Header>{this.props.item.name}</Card.Header>
                    <Card.Meta>${this.props.item.price}</Card.Meta>
                    <Card.Description>
                        {/* Daniel is a comedian living in Nashville. */}
                    </Card.Description>
                </Card.Content>
                <Card.Content extra>
                <a>
                    <Icon name="cart arrow down" />
                </a>
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
