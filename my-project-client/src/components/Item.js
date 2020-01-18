import React from 'react'

export default class Item extends React.Component {

    handleClick = () => {
        
    }

    render() {
        return (
            <div onClick={this.handleClick} className="itemComponent">
                <h1>{this.props.item.name}</h1>
                <h2>{this.props.item.price}</h2>
                <div className="itemPictureContainer">
                <img className="itemPicture" src={this.props.item.picture} alt=""/>
                </div>
            </div>
        )
    }
    
}