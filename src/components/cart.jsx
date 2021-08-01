import React, { Component } from 'react';
import storeContext from "../context/storeContext";
import "./cart.css"
import ItemInCart from "ItemInCart.jsx"
import ItemService from '../services/itemService';

class Cart extends Component {
    static contextType = storeContext;

    state = {};
    render() { 
        return (
            <div className="cart-page">
                <h4>This is the cart page</h4>
                
                <div className="product-container">
                    {this.context.cart.map((prod) => (
                        <ItemInCart key={prod._id} prod={prod}></ItemInCart>
                ))}</div>

                <div className="total-container">
                    <div>Total: {this.getTotal()}</div>
                        <div>
                        <input type="text" placeholder="Discount Code"></input>
                        <button className="btn btn-sm btn-dark">
                            Validate Code
                        </button>
                    </div>
                </div>
            </div>

        );
    }
}

validateCode = async () => {
    console.log(this.state.couponCode);
    let service = new ItemService();
    let res = await service.validateCode(this.state.couponCode);
    console.log(res)
    if (res.error) {
        alert("Invalid Code");
    } else {
        console.log("You got a discount for" + res.discount +"%");
        //TO DO: Apply the discount to the total (decrease the total)
        this.setState({ discount: res.discount });
    }
};


handleInputChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
};
getTotal = () => {
    let total = 0;
    for (let i = 0;  i < this.context.cart.length; i++) {
        let product = this.context.cart[i];
        total += product.quantity * product.price;
    }

    return total.toFixed(2);
}
 
export default Cart;

/**
 * 
 *   1 - create a component (itemInCart)
 *   2 - map the cart array to the new component
 *   3 - pass the data as prop
 *   4 - in itemInCart read the and display the item info
 * 
 * 
 */
