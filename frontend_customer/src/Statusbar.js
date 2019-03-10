import React, {Component} from 'react';

class Statusbar extends Component {
  render() {
    return (
      <div style={{display:'flex', backgroundColor:'#230f04', height:'4em'}} >
        <h3 style={{flex: '0 90%', color:'white', padding:'.75em'}} >Food Fairy 🧚</h3>
        <h4 style={{flex: '0 15%', color:'white', padding:'0.8em 0em', width:'150px'}} >Anisa Tahlil</h4>
        <a href="http://localhost:3001/login" style={{padding:'1em'}} >
          <button style={{borderRadius:'5px', padding:'5px 8px', marginRight:'2em'}} >Logout</button>
        </a>
      </div>
    );
  }
}
export default Statusbar;
