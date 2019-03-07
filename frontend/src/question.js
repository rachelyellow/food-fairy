import React, { Component } from 'react';
import Option from './option.js'


class Question extends Component{
  constructor(props) {
    super(props);
  }
  render() {

    return(
      <div>
       {/* <input value={this.props.question.inquiry} name={this.props.question.id} />  */}
       {this.props.question.inquiry}
       {this.props.question.options.map((item, idx) => {
         return <Option option={item} key={idx} qid={item.question_id} /> 
       })}
  
      </div>
    )
  }
}

export default Question