import React, { Component } from "react";
import Item from "./item";
import "./catalog.css";
import ItemService from "../services/itemService";

class Catalog extends Component {
  state = {
    items: [],
    categories: [],
    selectedCategory: "",
  };

  // display e-lements on the screen
  render() {
    let itemsToDisplay = this.state.items;

    if (this.state.selectedCategory) {
      //filter your items array NOTE!!!!!!!! item.category = itemsToDisplay.category  MAYBE
      itemsToDisplay = itemsToDisplay.filter(
        (item) => item.category === this.state.selectedCategory
      );
    }

    return (
      <div className="catalog-page">
        <h3 className="catalog-header">
          {" "}
          Browse through our catalog of Coca Coffee: {
            this.state.items.length
          }{" "}
          Seasonal and Year round items to choose from.{" "}
        </h3>

        <div className="filter-buttons">
          <button onClick={() => this.filterItems("")} className="btn btn-info">
            All items
          </button>

          {this.state.categories.map((cat) => (
            <button
              onClick={() => this.filterItems(cat)}
              className="btn btn-info"
              key={cat}
            >
              {cat}
            </button>
          ))}
        </div>
        <div className="item-container">
          {itemsToDisplay.map((prod) => (
            <Item key={prod._id} prod={prod}></Item>
          ))}
        </div>
      </div>
    );
  }

  filterItems = (category) => {
    console.log("Filtering", category);
    this.setState({ selectedCategory: category });
  };

  componentDidMount() {
    console.log("Catalog did Mount");

    // call the service to get the list of items
    var itemService = new ItemService();
    var items = itemService.getCatalog();
    console.log(items);
    this.setState({ items: items });

    // ID unique categories
    let cats = [];
    for (let i = 0; i < items.length; i++) {
      let cat = items[i].category;

      if (!cats.includes(cat)) {
        cats.push(cat);
      }
    }

    this.setState({ categories: cats });
  }
}

export default Catalog;
