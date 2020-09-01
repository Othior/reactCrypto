import React, { Component } from "react";
import Axios from "axios";

class Listcoins extends Component {
  constructor() {
    super();
    this.state = {
      listCoinsCrypto: [],
    };
  }
  componentDidMount() {
    Axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=50&page=1&sparkline=false")
      .then(response => {
        this.setState({ listCoinsCrypto: response.data });
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }
  
  renderList() {
    return this.state.listCoinsCrypto.map((item,index) => {
        return (
        <tr key={index}>
            <td className="index">{index+1}</td>
            <td className="image"><img className="picture" src={item.image}/></td>
            <td className="name">{item.name}</td>
            <td className="symbol">{item.symbol}</td>
            <td className="price">{item.current_price}€</td>
        </tr>
        )
    });
  }
  

  render(){
      return(
        <div className="container">
          <h2>List Crypto</h2>
            <table>
                <thead>
                    <tr>
                    <th>#</th>
                    <th>Logo</th>
                    <th>Name</th>
                    <th>Symbol</th>
                    <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {this.renderList()}
                </tbody>
            </table>
        </div>
      )
  }
}

export default Listcoins;
