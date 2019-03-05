import React, { Component } from 'react';

class CreateQuiz extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHidden: true
    }
    this.toggleHidden = this.toggleHidden.bind(this)
  }
  
  toggleHidden() {
    this.setState({
      isHidden: !this.state.isHidden
    })

  }
  render() {
    const child = <div className='modal'>
        Hello, World!
    </div>

    return(
      <div>
        <h2>You don't have a quiz, create one here.</h2>
        <button onClick={this.toggleHidden} >Create Quiz</button>
        {!this.state.isHidden && child}
      </div>
    )
  } 
}

export default CreateQuiz