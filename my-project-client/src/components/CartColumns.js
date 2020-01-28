import React, { Component } from "react";

export default class CartColumns extends Component {
    render() {
        return (
            <div className=" text-center  d-lg-block">
                <div className="row ">
                    <div className=" mx-auto col-lg-2">
                        <p className="text-uppercase">products</p>
                    </div>
                    <div className=" mx-auto col-lg-2">
                        <p className="text-uppercase">name of product</p>
                    </div>
                    <div className=" mx-auto col-lg-2">
                        <p className="text-uppercase">price</p>
                    </div>
                    <div className=" mx-auto col-lg-2">
                        <p className="text-uppercase">quantity</p>
                    </div>
                    <div className=" mx-auto col-lg-2">
                        <p className="text-uppercase">remove</p>
                    </div>
                    <div className=" mx-auto col-lg-2">
                        <p className="text-uppercase">total</p>
                    </div>
                </div>
            </div>
        );
    }
}
