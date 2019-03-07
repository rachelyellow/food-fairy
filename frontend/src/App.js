import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'; 
import Login from  './login.js';
import Quiz from './quiz.js'
import QuizForm from './quizform.js'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quiz: null,
      editingQuiz: false
    };
  }

  componentDidMount() {
    axios.get('http://localhost:3000/restaurants/1/quizzes/1')
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

  toggleEditing = () => {
    this.setState({
      editingQuiz: !this.state.editingQuiz
    })
  }


  saveQuiz = (quiz) => {
    console.log('saving!');
  }

  render() {
    return (
      <div>
        {
          (this.state.quiz && !this.state.editingQuiz)
            ? <Quiz quiz={this.state.quiz} />
            : <QuizForm quiz={this.state.quiz} handleSubmit={this.saveQuiz} />
        }
            

        {/* <button onClick={this.toggleEditing}>
          { this.state.editingQuiz ? 'Cancel' : 'Edit' }
        </button> */}
      </div>
    );
  }
}

export default App;

