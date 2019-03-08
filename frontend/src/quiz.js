import React, { Component } from 'react';
import axios from 'axios'
import Question from './question.js'

// Quiz component is responsible for displaying quiz to users
class Quiz extends Component{

  render() {
    
    console.log("data",this.props.quiz)
    
    return(
      <div>

        {
          this.props.quiz.map((item, idx) => {
            console.log("item", item)
            return <Question question={item} key={idx} />
          })
        }
      </div>
    )
  }
}

export default Quiz;

