import React, {Component} from 'react';
import OptionsList from "./OptionsList.js";
import Breadcrumbs from "./Breadcrumbs.js";

class Question extends Component {
  render() {
    if (this.props.display) {
      return (
        <div>
          <Breadcrumbs currentQuestion={this.props.currentQuestion} totalQuestions={this.props.totalQuestions} />
          <p>{this.props.question.inquiry}</p>
          <OptionsList 
          options={this.props.question.options} 
          nextQuestion={this.props.nextQuestion}
          logAnswer={this.props.logAnswer} />
        </div>
      );
    }
  return null;
  }
}
export default Question;