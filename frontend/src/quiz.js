import React, { Component } from 'react';
import Question from './question.js'

// Quiz component is responsible for displaying quiz to users
class Quiz extends Component{

  render() {  
    return(
      <div>
        {
          this.props.quiz.map((item, idx) => {
            return <Question question={item} key={idx} />
          })
        }
      </div>
    )
  }
}

export default Quiz;

