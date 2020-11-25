import React, { Component } from "react";

class NavBar extends Component {
  render() {
    return (
      <nav className=" text-right navbar navbar-light bg-light">
        <div id="navigation">
          <span className=" navbar-brand mb-0 h1">{this.props.title}</span>
          <div>
            <div>
              Total number of items:{" "}
              <span className="badge m-2 badge-primary">
                {this.props.total_shares}
              </span>
              Total price:
              <span className="badge m-2 badge-primary">
                {this.props.total_value.toFixed(2)}
              </span>
              €
            </div>
            <div>
              <button
                onClick={this.props.onReset}
                style={{ fontSize: 17, fontWeight: "bold" }}
                className="btn btn-primary btn-sm m-2"
              >
                Reset
              </button>
              <button
                onClick={this.props.onBuy}
                style={{ fontSize: 17, fontWeight: "bold" }}
                className="btn btn-primary btn-sm m-2"
              >
                Buy
              </button>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default NavBar;
