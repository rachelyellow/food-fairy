import React, { Component } from 'react';

import axios from 'axios'; 

class Quizform extends Component {
  constructor(props) {
    super(props);
    this.state = {
      question: null
    }
    this.toggleHidden = this.toggleHidden.bind(this)
  }
  
  toggleHidden() {
    this.setState({
      isHidden: !this.state.isHidden
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    //console.log(event.target.elements.question.value)

    const data = {}

    for (let entry of new FormData(event.target).entries()) {
        data[entry[0]] = entry[1]
    }

    console.log("for loop data", data)
    axios.post('http://localhost:3000/restaurants/1/quizzes/',
      data
     )
  }

  render() {
    const child = <div className='modal'>
        Hello, World!
    </div>

    return(
      <div>

      <form onSubmit={this.handleSubmit}>
        Question 1: <input type="text" name="question[1][name]"/>
        Option 1: <input type="text" name="question[1][options][1]"/>
        Dish 1:<input type="text" name="question[1][options][1][dish][1]"/>
        Option 2: <input type="text" name="question[1][options][2]"/>
        Dish 2:<input type="text" name="question[1][options][2][dish][2]"/>
        Option 3: <input type="text" name="question[1][options][3]"/>
        Dish 3:<input type="text" name="question[1][options][3][dish][3]"/>
    
        Question 2: <input type="text" name="question[2][name]"/>
        Option 1: <input type="text" name="question[2][options][1]"/>
        Dish 1:<input type="text" name="question[2][options][1][dish][1]"/>
        Option 2:<input type="text" name="question[2][options][2]"/>
        Dish 2:<input type="text" name="question[2][options][2][dish][2]"/>
        Option 3:<input type="text" name="question[2][options][3]"/>
        Dish 3:<input type="text" name="question[2][options][3][dish][3]"/>

        Question 3: <input type="text" name="question[3][name]"/>
        Option 1: <input type="text" name="question[3][options][1]"/>
        Dish 1:<input type="text" name="question[3][options][1][dish][1]"/>
        Option 2: <input type="text" name="question[3][options][2]"/>
        Dish 2:<input type="text" name="question[3][options][2][dish][2]"/>
        Option 3: <input type="text" name="question[3][options][3]"/>
        Dish 3:<input type="text" name="question[3][options][3][dish][3]"/>
         <button type="submit"> Submit </button>

      </form>
        {/* quiz map questions */}
        {/* {
          this.props.quiz.questions.map(q => 
            <input value={q.inquiry} onChange={this.updateQuestion}/>
          )
        } */}
      </div>
    )
  } 
}

export default Quizform