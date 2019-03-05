import React, {Component} from 'react';
import Question from "./Question.js";
import OptionsList from "./OptionsList.js";

class Quiz extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <Question/>
        <OptionsList/>
      </div>
    );
  }
}
export default Quiz;


