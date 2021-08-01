import React, { Component } from "react";
import "./quantityPicker.css";

class QuantityPicker extends Component {
  state = {
    value: 1,
    name: "Jorge",
  };
  render() {
    return (
      <div className="quantity-picker">
        <button onClick={this.decrease} className="btn btn-minus btn-light btn-sm btn-info">
          -
        </button>

        <label className="value">{this.state.value}</label>

        <button onClick={this.increase} className="btn btn-sm btn-info">
          +
        </button>
      </div>
    );
  }

  increase = () => {
  
    let val = this.state.value + 1;
    this.setState({ value: val });
    this.props.onValueChange();
  };

  decrease = () => {
    let val = this.state.value - 1;
    if (val > 0) {
      this.setState({ value: val });
      this.props.onValueChange();
    }
  };
}

export default QuantityPicker;
