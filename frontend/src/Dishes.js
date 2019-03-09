import React, { Component } from 'react';
import Table from 'react-bootstrap/Table'

class Dishes extends Component {


  render() {
    return (

      <form>
        <Table striped bordered hover >
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Image Link</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td><input type="text" name="restaurant[2]dish[1]"/></td>
              <td><input type="text" name="restaurant[2][dishimg][1]"/></td>
            </tr>
            <tr>
              <td>2</td>
              <td><input type="text" name="restaurant[2]dish[2]"/></td>
              <td><input type="text" name="restaurant[2][dishimg][2]"/></td>
            </tr>
            <tr>
              <td>3</td>
              <td><input type="text" name="restaurant[2]dish[3]"/></td>
              <td><input type="text" name="restaurant[2][dish][1]"/></td>
            </tr>
            <tr>
              <td>4</td>
              <td><input type="text" name="restaurant[2]dish[4]"/></td>
              <td><input type="text" name="restaurant[2][dishimg][1]"/></td>
            </tr>
            <tr>
              <td>5</td>
              <td><input type="text" name="restaurant[2]dish[5]"/></td>
              <td><input type="text" name="restaurant[2][dishimg][1]"/></td>
            </tr>
          </tbody>
        </Table>
        <button type="submit"> Submit </button>
      </form>

    );
  }
}

export default Dishes