import React, { Component } from "react";
import QuantityPicker from "./quantityPicker";
import "./item.css";
import thumb from "./img/cafeph.jpg";
import StoreContext from "../context/storeContext";

class Item extends Component {
  static contextType = StoreContext;

  state = {
    quantity: 1,
  };

  render() {
    return (
      <div className="item">
        <img src={thumb} alt="Coffee Beans" />

        <h6>{this.props.prod.title}</h6>

        <div className="prices">
          <label className="info">Total </label>
          <label className="info">Price </label>
          <label className="total-value"> ${this.getTotal()}</label>
          <label className="price-value">
            {" "}
            ${this.props.prod.price.toFixed(2)}
          </label>
        </div>

        <div className="item-controls">
          <p>Quantity: </p>
          <QuantityPicker
            onValueChange={this.handleQuantityChange}
          ></QuantityPicker>

          <button
            onClick={this.handleAddButton}
            className="btn btn-sm btn-light btn-add"
          >
            <i className="fa fa-cart-plus" aria-hidden="true"></i>
          </button>
        </div>
      </div>
    );
  }
  handleAddButton = () => {
    //copy of prod
    var copy = {
      ...this.props.prod, // copy every property from the prod object
      quantity: this.state.quantity,
    };

    //send copy to the cart
    this.context.addProdToCart(copy);
  };

  getTotal = () => {
    let total = this.props.prod.price * this.state.quantity;
    return total.toFixed(2);
  };
  handleQuantityChange = (quantity) => {
    console.log("Quantity Changed", quantity);
    this.setState({ quantity: quantity });
  };
}

export default Item;
