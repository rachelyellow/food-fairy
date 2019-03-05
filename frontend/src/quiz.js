import React, { Component } from 'react';
import axios from 'axios'
import Question from './question.js'

class Quiz extends Component{
  state = {
    questions: []
  }

  componentDidMount() {
    axios.get('http://localhost:3000/restaurants/3/quizzes/1')
    .then(res => {
      // var questions = res.data.questions.map(element => {
      //   return element.inquiry
      // })

      // var options = res.data.questions.map(element => {
      //   return element.options
      // })

      // var arrayOfOptions = options.map(element => {
      //   return element.map(element => {
      //     return element.name
      //   })
      // })
      // console.log("this is the options state", arrayOfOptions)
      // console.log("this is questions state", questions)
    
      this.setState({
        questions: res.data.questions
      })

    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
  }
  
  render() {

    return(

      <div>
       {this.state.questions.map((item, idx) => {
         return <Question question={item} key={idx} />
       })}
      </div>
    )
  }
}

export default Quiz 