import React, { Component } from 'react';
import Option from './option.js'


class Question extends Component{
  render() {
    return(
     
      <div>
       {/* <input value={this.props.question.inquiry} name={this.props.question.id} />  */}
       {this.props.question.questions.map((element, idx) => {
         return <div key={element.id}> 
            <h2>{element.inquiry}</h2> 
            <Option key={idx} options={element.options} /> 
           </div>
       })}
       {/* {this.props.question.questions.map((item, idx) => {
         return <Option option={item} key={idx} qid={item.question_id} /> 
       })} */}
  
      </div>
    )
  }
}

export default Question