import React, {Component} from 'react';
import NavBar from './NavBar.js';
import axios from 'axios'; 
import Statusbar from "./Statusbar.js";
import Table from 'react-bootstrap/Table'; 

class Rewards extends Component {
  constructor(){
    super()
    this.state = {
      results: null
    }
  }

  componentDidMount() {
    axios.get('http://localhost:3000/results/', {
      params: {
        customer_id: 1
      }
    })
    .then(res => {

      console.log(res.data.results)
        this.setState({
         results: res.data.results
        })
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
  }

  render() {
    if (!this.state.results) {
      return (<div>Loading....</div>)
    } else {
      return(
        <div>
          <Statusbar/>
          <NavBar/>
          <div>
              <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                      <th>#</th>
                      <th>Restaurant</th>
                      <th>Reward</th>
                      <th>Dish</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.results.map((result, idx) => (
                      <tr>
                        <td>{idx}</td>
                        <td>{result.restaurant.name}</td>
                        <td>{result.restaurant.reward}</td>
                        <td>{result.dish[0].name} <img alt='food' src={result.dish[0].image}/></td>
                      </tr>
                    ))}
                </tbody>
              </Table>
            </div>
          </div>
      );
    }
  }
}

export default Rewards