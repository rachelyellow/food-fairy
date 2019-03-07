import React, {Component} from 'react';
import axios from 'axios'; 


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
         {this.state.results.map((result) => (
           <div>
             <span>Restaurant: {result.restaurant.name}</span>
            <span>Reward: {result.restaurant.reward} </span>
            <span>Reccomended dish: {result.dish[0].name}</span>
            <img src={result.dish[0].image}/>
           </div>

         ))}
        </div>
    );
    
  }

  
}

}

export default Rewards