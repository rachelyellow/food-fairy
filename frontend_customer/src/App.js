import React, { Component } from 'react';
import logo from './logo.svg';
import axios from 'axios'; 
import './App.css';
import Quiz from "./Quiz.js";

class App extends Component {

  constructor () {
    super();
    this.state = {
      quizData: { questions: [] }
    }
  }
  
  componentDidMount() {
    axios('/restaurants/1/quizzes/1')
    .then(response => {
        console.log(response.data)
        this.setState({
            quizData: response.data
        })
    })
    .catch(error => console.log(error))
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Quiz data={this.state.quizData} />
        </header>
      </div>
    );
  }
}

export default App;
