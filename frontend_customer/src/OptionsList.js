import React, {Component} from 'react';
import Option from "./Option.jsx";

class OptionsList extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <ul>
        <Option/>
      </ul>
    );
  }
}
export default OptionsList;