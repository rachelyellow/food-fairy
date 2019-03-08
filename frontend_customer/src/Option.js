import React, {Component} from 'react';

class Option extends Component {
   saveAndNext = () => {
    const option = this.props.option;
    this.props.logAnswer(option)
    this.props.nextQuestion(option)
  }
  
  render() {
    return (
      <li>
        <button onClick={this.saveAndNext} >{this.props.option.name}</button>
      </li>
    );
  }
}
export default Option;


