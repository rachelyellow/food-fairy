import React, {Component} from 'react';
import Button from 'react-bootstrap/Button';

class NavBar extends Component {
  render() {
    return (
      <nav class="navbar navbar-light bg-light" style={{backgroundColor: "#f4a742", height: "3em"}} >
          <img src="/docs/4.0/assets/brand/bootstrap-solid.svg" width="30" height="30" class="d-inline-block align-top" alt=""/>
          Gagan's Res
        <Button type="button" class="btn btn-light" style={{float: "right", height: "2.5em", margin: "1em 3em"}} >Log Out</Button>
      </nav>
      
    );
  }
}
export default NavBar;