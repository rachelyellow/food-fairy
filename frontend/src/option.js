import React, { Component } from 'react';


class Option extends Component{
  render() {

    return(
      <div>
       {/* <input value={this.props.option.name} name={this.props.option.id} /> */}
       {this.props.options.map(element => {
         return <div key={element.id}> 
           <h4>{element.name} </h4>
          <input type="radio" name={element.question_id}></input> 
          </div>
       })}
      </div>
    )
  }
}

export default Option