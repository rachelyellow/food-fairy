import React, {Component} from 'react';

class NavBar extends Component {
  render() {
    return (
      <nav class="navbar navbar-light bg-light" style={{backgroundColor: "#f4a742"}} >
          <img src="/docs/4.0/assets/brand/bootstrap-solid.svg" width="30" height="30" class="d-inline-block align-top" alt=""/>
          Gagan's Res
        <button type="button" class="btn btn-light">Log Out</button>
      </nav>
      
    );
  }
}
export default NavBar;