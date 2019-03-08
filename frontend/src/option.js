import React, { Component } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';


class Option extends Component{
  render() {

    return(
      <div>
       {/* <input value={this.props.option.name} name={this.props.option.id} /> */}
       {this.props.options.map(element => {
         return <ListGroup.Item key={element.id}>{element.name}</ListGroup.Item>
       })}
      </div>
    )
  }
}

export default Option