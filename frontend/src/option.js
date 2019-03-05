import React, { Component } from 'react';


class Option extends Component{
  
  render() {

    return(
      <div>
       {this.props.option.name}
       <input type="radio" name={this.props.qid}></input>
      </div>
    )
  }
}

export default Option