import React, { Component } from 'react';


class Option extends Component{
  render() {

    return(
      <div>
       {/* <input value={this.props.option.name} name={this.props.option.id} /> */}
       {this.props.options.map(element => {
         return <div key={element.id}> 
           <h4>{element.name} </h4>
          </div>
       })}
      </div>
    )
  }
}

export default Option