import React, {Component} from 'react';
import axios from 'axios'; 

class Results extends Component {
  constructor(){
    super()
  }

  componentDidMount() {
    axios.get('http://localhost:3001/results/1/dishes/1')
    .then(res => {
      if (res.status === 200)
      {
        // this.setState({
        //   quiz: res.data
        // })
      }
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
  }
  render() {
    return(
      <div>
        <p> Based off your preferences, this is your reccomended Dish : (DISH)</p>
        <p> This is the name of the Restaurant: (RESTAURANT)</p>
        <p> This is your reward: (REW</p>
      </div>
    )
  }

  
}


export default Results 