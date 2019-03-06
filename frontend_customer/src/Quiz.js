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
        this.setState({
          quizData: response.data
        })
    })
    .catch(error => console.log(error))
    
  }
  
  nextQuestion = (option) => {
    if (this.state.activeQuestion < this.state.quizData.questions.length - 1) {
      let optionDishIds = this.logAnswer(option)
      this.setState({
        activeQuestion: this.state.activeQuestion + 1,
        answerLog: this.state.answerLog.concat(optionDishIds)
      })
    } else {
      console.log('calculating dish preference..')
      this.calculateDishPreference()
      console.log('redirecting to results page..')
      // **INSERT FUNCTION TO REDIRECT TO RESULTS PAGE
    }
  }

  logAnswer = (option) => {
    let optionDishes = [];
    option.dishes.forEach((dish) => optionDishes.push(dish.id))
    return optionDishes;
  }

  calculateDishPreference = () => {
    const dishPreferences = this.state.answerLog
    const dishRecomendation = this.mostFrequent(dishPreferences)
    // logs recommended dish to DB
    axios.post('/results', {
      dishRecomendation: dishRecomendation,
      customerId: this.state.activeUser,
      quizId: this.state.currentQuiz
    })
    .then((response) => {
      console.log("posted!")
      this.setState({ answerLog: [] })
    })
  }

  mostFrequent = (dishIdArr) => {
    let count = {}
    dishIdArr.forEach(function (dishId) {
      if (count[dishId]) {
        count[dishId] += 1
      } else {
        count[dishId] = 1
      }
    })
    let mostFrequentDishId
    let highest = 0
    for (let dishId in count) {
      // console.log("dish id:", dishId, "frequency:", count[dishId])
      if (count[dishId] > highest) {
        mostFrequentDishId = dishId
        highest = count[dishId]
      }
    }
    // console.log("recommendation:" ,mostFrequentDishId)
    return mostFrequentDishId
  }

  render() {
    return (
      <div>
        {this.state.quizData.questions.map((item, idx) => {
          const display = this.state.activeQuestion === idx;
          return <Question 
          totalQuestions={this.state.quizData.questions.length}
          currentQuestion={this.state.activeQuestion + 1}
          question={item} 
          key={idx} 
          display={display} 
          nextQuestion={this.nextQuestion} 
          logAnswer={this.logAnswer} />
       })}
      </div>
    );
  }
}

export default Quiz;


