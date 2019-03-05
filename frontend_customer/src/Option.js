import React, {Component} from 'react';

class Option extends Component {
  constructor() {
    super();
  }

  
  render() {
    console.log(this.props.nextQuestion)
    return (
      <li>
        <button onClick={this.props.nextQuestion} >{this.props.answer.name}</button>
      </li>
    );
  }
}
export default Option;


