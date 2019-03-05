import React, { Component } from 'react';


class Option extends Component{

  constructor(props) {
    super(props);
  }
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