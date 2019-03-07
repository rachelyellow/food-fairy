import React, {Component} from 'react';
import axios from 'axios'; 

class Rewards extends Component {
  constructor(){
    super()
    this.state = {
      data: null
    }
  }

  componentDidMount() {
    axios.get('http://localhost:3000/results/', {
      params: {
        customer_id: 1
      }
    })
    .then(res => {

      console.log(res.data)
        this.setState({
         data: res.data
        })
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
  }
  render() {
    if (!this.state.data) {
      return (<div>Loading....</div>)
    } else {
    return(
        <div>
          <p> Based off your preferences, this is your reccomended Dish : {this.state.data.dishes.map ((dish) => {
            return dish.name 
          } ).join(", ")}  </p>
          <p> {this.state.data.dishes.map ((dish) => {
            return <img src='dish.image'/>
          } )} </p>
          <p> This is the name of the Restaurant: {this.state.data.restaurant.name}</p>
          
          <p> This is your reward: {this.state.data.restaurant.reward}</p>
        </div>
      )
    }
  }

  
}


export default Rewards