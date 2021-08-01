import React, { Component } from "react";
class ShoppingList extends Component {
  state = {};
  render() {
    return (
      <div className="shopping-list">
        <div className="capture">
          <input type="text" />
          <button>Add to list</button>
        </div>
      </div>
    );
  }
  handleAddToList = () => {
      this.context.addToShoppingList("The text from the input here");
  };
}

export default ShoppingList;

/**
 * handle the button click
 * call the function
 * get the text from the input field
 * connect tyour component to use the context store
 * call the function on the context
 *
 * read the shoppintList [] from the context
 * map the array into the div with the text inside
 */

/**
 *
 * handle the button click
 * call a function
 * get the text from the input field
 * connect your component to use the context store
 * call the function (addToShoppingList) on the context
 *
 * read the shoppingList [] from the context
 * map that array into div with the text inside
 *
 */
