import React, {Component} from 'react';
import Question from "./Question.js";
import OptionsList from "./OptionsList.js";

class Quiz extends Component {
  constructor() {
    super();
    this.state = {
      activeQuestion: 0
    }
  }

  nextQuestion = () => {
    this.setState({
      activeQuestion: this.state.activeQuestion + 1
    })
  }

  // componentDidMount() {
  //   this.nextQuestion();
  // }

  render() {
    return (
      <div>
        {this.props.data.questions.map((item, idx) => {
          const display = this.state.activeQuestion === idx;
          return <Question question={item} key={idx} display={display} nextQuestion={this.nextQuestion} />
       })}
      </div>
    );
  }
}
export default Quiz;


