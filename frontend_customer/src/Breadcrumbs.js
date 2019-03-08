import React, {Component} from 'react';

class Breadcrumbs extends Component {
  render() {
    return (
      <div>
        {this.props.currentQuestion}/{this.props.totalQuestions}
      </div>
    );
  }
}
export default Breadcrumbs;
