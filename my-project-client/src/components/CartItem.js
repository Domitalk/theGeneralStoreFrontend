import React, { Component } from "react";
export default class CartItem extends Component {

    state={
            price: this.props.item.price,
            quantity: this.props.quantity,
            total: this.props.item.price
    }

   
    
    handleIncrement = () => {
        
        let newQuant = this.state.quantity + 1
        let newTotal = this.state.price * newQuant

            this.setState({ 
                quantity: newQuant,
                total: newTotal 
            })
            
            this.props.handleTotal(this.state.price)
        

    }



    handleDecrement = () => {

        let newQuant = this.state.quantity - 1
        let newTotal = this.state.price * newQuant

        if (this.state.quantity != 0) 
        {       
            this.setState({
                quantity: newQuant,
                total: newTotal
            })

            this.props.handleTotal((this.state.price * -1))
        }
        
    }

    render() {
        
        return (
            <div className="row my-1 text-capitalize text-center">
                <div className="col-10 mx-auto col-lg-2 absolute">
                    <img
                        src={this.props.item.picture}
                        style={{
                            width: "5rem", heigth: "5rem",right: "50px" }}
                        className="img-fluid"
                        alt=""
                    />
                </div>
                <div className="col-10 mx-auto col-lg-2 ">
                    <span className="d-lg-none">product :</span> {this.props.item.name}
                </div>
                <div className="col-10 mx-auto col-lg-2 ">
                    <strong>
                        <span className="d-lg-none">price :</span> ${this.props.item.price}
                    </strong>
                </div>
                <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0 ">
                    <div className="d-flex justify-content-center">
                        <div>
                            <span
                                className="btn btn-black mx-1"
                                onClick={() => { this.handleDecrement() }}
                            >
                                -
              </span>
                            <span className="btn btn-black mx-1">{this.state.quantity}</span>
                            <span
                                className="btn btn-black mx-1"
                                onClick={() => {this.handleIncrement()}}
                            >
                                +
              </span>
                        </div>
                    </div>
                </div>
                <div className="col-10 mx-auto col-lg-2 ">
                    <div className=" cart-icon" onClick={() => this.props.handleCartItemRmv() }>
                        <i className="fas fa-trash" />
                    </div>
                </div>

                <div className="col-10 mx-auto col-lg-2 ">
                    <strong>item total : ${this.state.total} </strong>
                </div>
            </div>
        );
    }
}
