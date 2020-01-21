import React from 'react'
import {Link} from "react-router-dom"
import styled from "styled-components"

export default class Item extends React.Component {

    handleClick = () => {
        if(this.props.addItemToCart) {
            this.props.addItemToCart(this.props.item)
        }
    }

    render() {
        return (

            <div className="col-9 mx-auto col-md-6 col-lg-3 my-3">
                <div onClick={this.handleClick} className="card">
                    <h1>{this.props.item.name}</h1>
                    <h2>{this.props.item.price}</h2>
                    <div className="img-container p-5" >
                        {/* <Link to="/details"> */}
                            <img src={this.props.item.picture} className="card-img-top"></img>
                        {/* </Link> */}
                    </div>
                    {this.props.quantity ? <h2>QTY: {this.props.quantity}</h2> : null}
                </div>
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
