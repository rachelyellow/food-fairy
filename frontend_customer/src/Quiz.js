import React, {Component} from 'react';
import Question from "./Question.js";
import OptionsList from "./OptionsList.js";
import axios from 'axios'; 


class Quiz extends Component {
  constructor() {
    super();
    this.state = {
      activeQuestion: 0,
      activeUser: 1,
      answerLog: [],
      quizData: { questions: [] },
      //ASSUMING RESTAURANT ID === QUIZ ID
      currentQuiz : 1
    }
  }

  componentDidMount() {
    axios(`/restaurants/${this.state.currentQuiz}/quizzes/${this.state.currentQuiz}`)
    .then(response => {
        console.log(response.data)
        this.setState({
          quizData: response.data
        })
    })
    .catch(error => console.log(error))
    
  }
  
  nextQuestion = () => {
    if (this.state.activeQuestion < this.state.quizData.questions.length) {
      this.setState({
        activeQuestion: this.state.activeQuestion + 1,
        answerLog: this.state.answerLog.concat("answer")
      })
    } 
  }

  render() {
    return (
      <div>
        {this.state.quizData.questions.map((item, idx) => {
          const display = this.state.activeQuestion === idx;
          return <Question question={item} key={idx} display={display} nextQuestion={this.nextQuestion} />
       })}
      </div>
    );
  }
}

export default Quiz;


