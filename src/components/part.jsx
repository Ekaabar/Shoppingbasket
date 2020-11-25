import React, { Component } from "react";

class Part extends Component {
  getBadgeClasses = () => {
    let classes = "badge m-2 badge-";
    if (this.props.amount === 0) {
      classes += "warning";
    } else {
      classes += "primary";
    }
    return classes;
  };

  styles = {
    width: 70,
    height: 25,
    fontSize: 15,
    fontWeight: "bold"
  };

  render() {
    return (
      <React.Fragment>
            <h3 id="number">
              {this.props.id} 
            </h3>
            <h5>
            {this.props.name}
            </h5>
            &nbsp;
            <img
              src={this.props.url}
              width="200"
              height="180"
              alt={this.props.name}
            />
            <div>Our price: {this.props.price.toFixed(2)}€</div>
         
            <span style={this.styles} className="badge m-2 badge-primary">
              {(this.props.price * this.props.amount).toFixed(2)}
            </span>
            <span
              style={{ width: 40, height: 25, fontSize: 15, fontWeight: "bold" }}
              className={this.getBadgeClasses()}
            >
              {this.props.amount}
            </span>{" "}
            <button
              className="btn btn-success btn-sm"
              onClick={() => this.props.onIncrement(this.props.id)}
              style={{ fontSize: 13, fontWeight: "bold" }}
            >
              +
            </button>
            &nbsp;
            <button
              className="btn btn-warning btn-sm"
              onClick={() => this.props.onDecrement(this.props.id)}
              style={{ fontSize: 13, fontWeight: "bold" }}
            >
              -
            </button>
            &nbsp;
            <button
              className="btn btn-danger btn-sm"
              onClick={() => this.props.onDelete(this.props.id)}
            >
              Reset
            </button>
      </React.Fragment>
    );
  }
}

export default Part;
