import React, { Component } from 'react';


class Option extends Component{

  constructor(props) {
    super(props);
  }
  render() {

    return(
      <div>
       {/* <input value={this.props.option.name} name={this.props.option.id} /> */}
       {this.props.option.name}
       <input type="radio" name={this.props.qid}></input>
      </div>
    )
  }
}

export default Option