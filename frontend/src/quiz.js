import React, { Component } from 'react';
import axios from 'axios'
import Question from './question.js'

class Quiz extends Component{

  state = {
    questions: []
  }

  componentDidMount() {
    axios.get('http://localhost:3000/restaurants/1/quizzes/2')
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
      if (res.status === 200)
      {
        this.setState({
          questions: res.data.questions
        })
      }
      

    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
  }
  
  render() {
    
    
    return(
      <div>
        { this.state.questions.length > 0 ? 
            this.state.questions.map((item, idx) => {
              return <Question question={item} key={idx} />
            }) 
          : <h1>No data</h1> 
        }

      </div>
    )
  }
}

export default Quiz 