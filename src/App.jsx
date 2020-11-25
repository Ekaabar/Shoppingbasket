import React, { Component } from "react";
import "./App.css";
import OrderForm from "./components/orderForm";
import NavBar from "./components/navBar";
import Cart from "./components/cart";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      buy: false,
      title: "Cart",
      initial_prices: [71.84, 151.13, 91.22, 16.8, 65.7, 20.11],
      current_prices: [71.84, 151.13, 91.22, 16.8, 65.7, 20.11],
      price_url: "https://cache.marieclaire.fr/data/photo/w700_c17/49/makeup.jpg",
      shell_url:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvtP-h0nsQMHLOg_LPyrA7TpNgnoSIrWdGnA&usqp=CAU",
      parts: [
        {
          id: 1,
          name: "Natasha Contouring Palette",
          amount: 0,
          price: 71.84,
          url:
            "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTDillHzE6otz-YwRADi5YB0-xnUOBWYwTkoOpLO6Hftt0cLKMDeeudF37Yzy5Sb5wBOgh7h_y78PmpzdTsJraWX8ZkEwAKxjg4zT_gZcRZS7_iyQue-spQDQ&usqp=CAE"
        },
        {
          id: 2,
          name: "Viseart Eyeshadow Palette",
          amount: 0,
          price: 151.13,
          url:
            "https://img01.ztat.net/article/spp-media-p1/489ae070dcb73b89a0bc90bc89a1d13b/d12664f768c64bd79e499e8ad94b1934.jpg?imwidth=1800&filter=packshot"
        },
        {
          id: 3,
          name: "Bobbi Brown Gloss",
          amount: 0,
          price: 91.22,
          url:
            "https://www.bobbibrown.de/media/export/cms/products/v2_1080x1080/bb_sku_EPL401_1080x1080_0.jpg"
        },
        {
          id: 4,
          name: "Mac Matte Lipstick ",
          amount: 0,
          price: 16.8,
          url: "https://img01.ztat.net/article/spp-media-p1/6a91f58158b7344185829b7d53b93357/6ace92b78a0c42b3811a33cf45fb9725.jpg?imwidth=1800&filter=packshot"
        },
        {
          id: 5,
          name: "Charlotte Tilbury Skin Secrets ",
          amount: 0,
          price: 65.7,
          url:
            "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRPPEy_HDVMpCnLBM48KCF1xrrG-KCH97y9NYLrLY63kM4H6L81-lBej8fbwEa3u3qhFaSYG6erj_3dc8deM5A0ZrOQUbKwB9dsVQU6Ssjv-cC8P4rIckEAbg&usqp=CAE"
        },
        {
          id: 6,
          name: "Mac Fix Fluid Foundation",
          amount: 0,
          price: 20.11,
          url:
            "https://img01.ztat.net/article/spp-media-p1/3023715c354739dfaf8e122e040aa296/ebe708d575c44e97b07036f2faaba588.jpg?imwidth=762&filter=packshot"
        }
      ]
    };
    this.handleIncrement = this.handleIncrement.bind(this);
    this.handleDecrement = this.handleDecrement.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.handleBuy = this.handleBuy.bind(this);
    this.countShares = this.countShares.bind(this);
    this.partsValue = this.partsValue.bind(this);
  }

  handleIncrement(part_id) {
    const parts = this.state.parts;
    parts[part_id - 1].amount = parts[part_id - 1].amount + 1;
    this.setState({ parts: parts });
  }

  handleDecrement(part_id) {
    const parts = this.state.parts;
    if (parts[part_id - 1].amount !== 0) {
      parts[part_id - 1].amount = parts[part_id - 1].amount - 1;
    }
    this.setState({ parts });
  }

  handleDelete(part_id) {
    const parts = this.state.parts;
    parts[part_id - 1].amount = 0;
    this.setState({ parts: parts });
  }

  countShares() {
    const parts = this.state.parts;
    let sum = 0;
    for (let i = 0; i < parts.length; i++) {
      sum = sum + this.state.parts[i].amount;
    }
    return sum;
  }

  partsValue() {
    const parts = this.state.parts;
    let sum = 0;
    for (let i = 0; i < parts.length; i++) {
      sum = sum + this.state.parts[i].amount * this.state.parts[i].price;
    }
    return sum;
  }

  handleBuy() {
    this.setState({ buy: true, name: "Summary" });
  }

  handleReset() {
    const parts = this.state.parts;
    for (let i = 0; i < parts.length; i++) {
      parts[i].amount = 0;
    }
    this.setState({
      parts: parts,
      buy: false,
      name: "Cart"
    });
  }

  componentDidMount() {
    const url = this.state.price_url;
    const prices = this.state.initial_prices;

    fetch(url)
      .then(response => response.json())
      .then(result =>
        this.setState({
          current_prices: result.data.map(function(x) {
            if (x > 100) {
              return (
                Math.round((prices[result.data.indexOf(x)] + x / 100) * 100) /
                100
              );
            } else {
              return (
                Math.round((prices[result.data.indexOf(x)] - x / 100) * 100) /
                100
              );
            }
          })
        })
      );
  }

  render() {
    return (
      <React.Fragment>
        <NavBar
          onBuy={this.handleBuy}
          onReset={this.handleReset}
          title={this.state.title}
          total_shares={this.countShares()}
          total_value={this.partsValue()}
        />
        <OrderForm buy={this.state.buy} shell_url={this.state.shell_url} />
        <Cart
          buy={this.state.buy}
          parts={this.state.parts}
          current_prices={this.state.current_prices}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
          onDelete={this.handleDelete}
        />
      </React.Fragment>
    );
  }
}
export default App;
