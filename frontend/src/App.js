import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'; 
import Login from  './login.js';
import Quiz from './quiz.js'

class App extends Component {

  componentDidMount() {
    axios.get('http://localhost:3001/api/v1/lists.json')
    .then(response => {
        console.log(response)
        this.setState({
            data: response.data
        })
    })
    .catch(error => console.log(error))
  }

  render() {

    return (
      <div>
        <Quiz />
      </div>
    );
  }
}

export default App;
