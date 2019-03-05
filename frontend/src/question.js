import React, { Component } from 'react';
import Option from './option.js'


class Question extends Component{
  
  render() {

    return(
      <div>
       {this.props.question.inquiry}
       {this.props.question.options.map((item, idx) => {
         return <Option option={item} key={idx} qid={item.question_id} /> 
       })}
  
      </div>
    )
  }
}

export default Question