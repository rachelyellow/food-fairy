import React, {Component} from 'react';
import OptionsList from "./OptionsList.js";

class Question extends Component {
  constructor() {
    super();
  }

  render() {
    if (this.props.display) {
      return (
        <div>
          <p>{this.props.question.inquiry}</p>
          <OptionsList options={this.props.question.options} nextQuestion={this.props.nextQuestion} />
        </div>
      );
    }
  return null;
  }
}
export default Question;