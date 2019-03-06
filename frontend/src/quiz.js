import React, { Component } from 'react';
import axios from 'axios'
import Question from './question.js'

// Quiz component is responsible for displaying quiz to users
class Quiz extends Component{

  constructor(props) {
    super(props);
    this.state = {
      quiz: {
        questions: []
      }
    }
  }

  render() {
    
    
    return(
      <div>
        {
          this.props.quiz.questions.map((item, idx) => {
            return <Question question={item} key={idx} />
          })
        }
      </div>
    )
  }
}

export default Quiz;

