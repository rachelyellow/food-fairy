import React, {Component} from 'react';
import Option from "./Option.js";

class OptionsList extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <ul>
        {this.props.options.map((answer, index) => {
          return <Option answer={answer} nextQuestion={this.props.nextQuestion} key={answer.id} />
        })}
      </ul>
    );
  }
}
export default OptionsList;