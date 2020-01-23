import React, { Component } from 'react'

export default class CartTotal extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right ">
                        <h5>
                            <span className="text-title"> subtotal :</span>{" "}
                            <strong>${this.props.total} </strong>
                        </h5>
                        <h5>
                            <span className="text-title"> tax :</span>{" "}
                            <strong>${(this.props.total * .085).toFixed(2)} </strong>
                        </h5>
                        <h5>
                            <span className="text-title"> total :</span>{" "}
                            <strong>{((this.props.total) * .085) + this.props.total }</strong>
                        </h5>
                        <button className="checkout-button">
                            Checkout
                        </button>    
                    </div>
                </div>
            </div>

        )
    }
}
