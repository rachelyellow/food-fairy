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
      quiz: [],
      editingQuiz: false
    };
  }

  componentDidMount() {
    console.log("hkhk")
    axios.get('http://localhost:3000/restaurants/2/quizzes')
    .then(res => {
      console.log("this is the response", res.data)
      
        this.setState({
          quiz: res.data.quizzes
        })
    
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
  }

  // toggleEditing = () => {
  //   this.setState({
  //     editingQuiz: !this.state.editingQuiz
  //   })
  // }

  render() {
    console.log("this is state", this.state.quiz)
    return (
      <div>
         { (this.state.quiz.length > 0)
             ? 
            <Quiz quiz={this.state.quiz} />
             : 
             <QuizForm quiz={this.state.quiz}  />
         }
        
            

        {/* <button onClick={this.toggleEditing}>
          { this.state.editingQuiz ? 'Cancel' : 'Edit' }
        </button> */}
      </div>
    );
  }
}

export default App;

