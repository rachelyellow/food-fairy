import React, {Component} from 'react';
import Option from "./Option.js";

class OptionsList extends Component {
  render() {
    return (
      <ul>
        {this.props.options.map((option, index) => {
          return <Option 
          option={option} 
          nextQuestion={this.props.nextQuestion} 
          key={option.id}
          logAnswer={this.props.logAnswer} />
        })}
      </ul>
    );
  }
}
export default OptionsList;