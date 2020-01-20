import React, { Component } from 'react'

export default class Item extends Component {
    render() {
        return (
             <div /*onClick={this.handleClick}*/ className="card">
                <div className="image">
                    {/* <img src={this.props.image} ></img> */}
                </div>
                <div className="content">
                    <a className="header">{this.props.name}</a>
                    <div className="meta">
                        <span className="date"></span>
                    </div>

                </div>
                <div className="extra content">
                    {this.props.price}  
                </div>
            </div>

        );
        
    }
}
