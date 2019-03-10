import React, {Component} from 'react';

class Statusbar extends Component {
  render() {
    return (
      <div style={{display:'flex', backgroundColor:'#230f04', height:'4em'}} >
        <h4 style={{flex: '0 90%', color:'white', padding:'.75em'}} >Anisa Tahlil</h4>
        <a href="http://localhost:3001/login" style={{padding:'1em'}} >
          <button style={{borderRadius:'5px', padding:'5px 8px'}} >Logout</button>
        </a>
      </div>
    );
  }
}
export default Statusbar;
