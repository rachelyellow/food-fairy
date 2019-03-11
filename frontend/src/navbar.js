import React, {Component} from 'react';

class NavBar extends Component {
  render() {
    return ( 
      <div style={{display:'flex', backgroundColor:'#230f04', height:'5em'}} >
        <a href="http://localhost:5000/restaurants/quizzes" style={{flex: '0 90%', color:'white', paddingTop:'1.8em', paddingLeft:'2em', fontFamily: 'Sacramento'}}>
          <h3>🧚 Food Fairy</h3>
        </a>
        <h5 style={{flex: '0 15%', color:'white', padding:'1.3em 0em', width:'150px'}} >Marty's Cuisine</h5>
        <a style={{padding:'1em'}} >
          <button style={{borderRadius:'5px', padding:'5px 8px', marginRight:'2em', marginTop:'7px'}} >Logout</button>
        </a>
      </div>
    );
  }
}
export default NavBar;