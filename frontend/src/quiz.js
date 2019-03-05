import React, { Component } from 'react';
import axios from 'axios'
import Question from './question.js'


class Quiz extends Component{

  constructor(props) {
    super(props);
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

export default Quiz 