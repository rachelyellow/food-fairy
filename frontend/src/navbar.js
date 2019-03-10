import React, {Component} from 'react';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';

class NavBar extends Component {
  render() {
    return ( 
      <div style={{display:'flex', backgroundColor:'#230f04', height:'5em'}} >
        <h3 style={{flex: '0 90%', color:'white', padding:'.8em'}} >🧚 Food Fairy</h3>
        <h4 style={{flex: '0 15%', color:'white', padding:'1em 0em', width:'150px'}} >Marty's Cuisine</h4>
        <a href="http://localhost:3001/login" style={{padding:'1em'}} >
          <button style={{borderRadius:'5px', padding:'5px 8px', marginRight:'2em', marginTop:'7px'}} >Logout</button>
        </a>
      </div>
    );
  }
}
export default NavBar;