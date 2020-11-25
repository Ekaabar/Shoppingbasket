import React, { Component } from "react";
import Part from "./part";

class Cart extends Component {
  render() {
    const { parts } = this.props;

    if (this.props.buy) {
      return null;
    }
    return (
      <div className="container">
        <h4 style={{ textAlign: "center" }}>
          Choose your favorite items and add them into your basket!
        </h4>
        <br></br>
        {parts.map(part => (
          <div className={"part"} key={part.id}>
            <Part
              onIncrement={this.props.onIncrement}
              onDecrement={this.props.onDecrement}
              onDelete={this.props.onDelete}
              amount={part.amount}
              id={part.id}
              name={part.name}
              price={part.price}
              url={part.url}
              current_prices={this.props.current_prices}
            />
          </div>
        ))}
      </div>
    );
  }
}

export default Cart;
