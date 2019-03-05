import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'; 
import Login from  './login.js';
import Quiz from './quiz.js'
import CreateQuiz from './createquiz.js'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quiz: null
    };
  }

  componentDidMount() {
    axios.get('http://localhost:3000/restaurants/1/quizzes/2')
    .then(res => {
      if (res.status === 200)
      {
        this.setState({
          quiz: res.data
        })
      }
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
  }
  render() {
    return (
      <div>
        { (this.state.quiz) ? <Quiz quiz={this.state.quiz} /> : <CreateQuiz />}
      </div>
    );
  }
}

export default App;

