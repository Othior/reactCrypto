import React, { Component,useEffect } from "react";
import Axios from "axios";

class Searchcrypto extends Component {
    constructor(){
        super();
        this.state = {
            searchValue : null,
        }
    }
    searchElement (){
        const searchInput = document.getElementById("search")
        Axios.get("https://api.coingecko.com/api/v3/coins/"+ searchInput.value)
        .then(response => {
            this.setState({ searchValue: response.data });
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        });
    }
    searchAffiche(){
        if(this.state.searchValue === null){
            return 
        }
        const {name,image,id} = this.state.searchValue;
          return (
              <div className="searchBlockTable">
                  <table className="searchTable">
                      <thead>
                          <tr>
                              <th>#</th>
                              <th>Name</th>
                              <th>Picture</th>
                          </tr>
                      </thead>
                      <tbody>
                          <tr>
                              <td className="index">{id}</td>
                              <td className="name">{name}</td>
                              <td className="image"><img className="picture" src={image.thumb} alt="yes"/></td>
                          </tr>
                      </tbody>
                  </table>
              </div>
          )
    }
    render(){
        return(
            <div className="searchBlock">
                <h2>Search Crypto</h2>
                <div>
                    <input type="text" id="search"/>
                    <button onClick={() => this.searchElement()}>Search</button>
                    {this.searchAffiche()}
                </div>
            </div>
        );
    }
}
export default Searchcrypto;