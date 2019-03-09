import React, { Component } from 'react';
import Table from 'react-bootstrap/Table'
import axios from 'axios'; 

class Dishes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      question: null
    }
  }


  handleSubmit = (event) => {
    event.preventDefault()
    //console.log(event.target.elements.question.value)

    const data = {}

    for (let entry of new FormData(event.target).entries()) {
        data[entry[0]] = entry[1]
    }

    console.log("for loop data", data)
    axios.post('http://localhost:3000/restaurants/2/dishes',
      data
     )
  }
  


  render() {
    return (
      <div>
      <form onSubmit={this.handleSubmit}>
        <Table striped bordered hover >
          <thead>
            <tr>
              <th>#</th>
              <th>Dish</th>
              <th>Image Link</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td><input type="text" name="dish[1]"/></td>
              <td><input type="text" name="dish[1][img][1]"/></td>
            </tr>
            <tr>
              <td>2</td>
              <td><input type="text" name="dish[2]"/></td>
              <td><input type="text" name="dish[2][img][2]"/></td>
            </tr>
            <tr>
              <td>3</td>
              <td><input type="text" name="dish[3]"/></td>
              <td><input type="text" name="dish[3][img][3]"/></td>
            </tr>
            <tr>
              <td>4</td>
              <td><input type="text" name="dish[4]"/></td>
              <td><input type="text" name="dish[4][img][4]"/></td>
            </tr>
            <tr>
              <td>5</td>
              <td><input type="text" name="dish[5]"/></td>
              <td><input type="text" name="dish[5][img][5]"/></td>
            </tr>
          </tbody>
        </Table>
        <button type="submit"> Submit </button>
      </form>
      </div>

    );
  }
}

export default Dishes