import React from 'react'

export default class Item extends React.Component {

    handleClick = () => {
        if(this.props.addItemToCart) {
            this.props.addItemToCart(this.props.item)
        }
    }

    render() {
        return (
            <div onClick={this.handleClick} className="itemComponent">
                <h1>{this.props.item.name}</h1>
                <h2>{this.props.item.price}</h2>
                <div className="itemPictureContainer">
                <img className="itemPicture" src={this.props.item.picture} alt=""/>
                {this.props.quantity ? <h2>QTY: {this.props.quantity}</h2> : null}
                </div>
            </div>
        )
    }
    
}