import React, {Component} from 'react';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';

class NavBar extends Component {
  render() {
    return ( 
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand>
          <strong fontSize="3em" >Gagan's Res</strong>
          <img src="/docs/4.0/assets/brand/bootstrap-solid.svg" width="30" height="30" className="d-inline-block align-top" alt=""/>
        </Navbar.Brand>
        <Button id="logout" type="button" className="btn btn-light float-right" style={{float: "right", height: "2.5em", margin: "1em"}} >Log Out</Button>
      </Navbar>
      
    );
  }
}
export default NavBar;