import React, { Component } from "react";

class OrderForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      purchaser: "",
      style: { display: "visible" }
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ name: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    let name = this.state.name;
    this.setState({ purchaser: "Purchaser: " + name });
    this.setState({ style: { display: "none" } });
  }

  render() {
    const buy = this.props.buy;

    if (buy) {
      return (
        <div>
          <h3>Your order has been placed</h3>
        </div>
      );
    } else {
      return (
        <React.Fragment>
          <div id="welcome">
            <div id="login">
          <h4 >Welcome to our online shopping platform</h4>
         <br></br>
          <form onSubmit={this.handleSubmit} style={this.state.style}>
            <label>Enter your name:</label> &nbsp;
            <input
              type="text"
              onChange={this.handleChange}
              value={this.state.name}
            />
            &nbsp;
            <input type="submit" value="Submit" />
          </form>
          </div>
          </div>
          <p>{this.state.purchaser}</p>
        </React.Fragment>
      );
    }
  }
}
export default OrderForm;
