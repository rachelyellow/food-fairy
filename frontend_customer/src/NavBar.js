import React, { Component } from 'react';
import { Link } from "react-router-dom";
export class NavBar extends Component {
    render(){
        return (
            <div style={{width:'79px'}}>
              <button style={{paddingRight:'29px'}}>
                <Link to="/maps">Maps</Link>
              </button>
              <br/>
              <button>
                <Link to="/rewards">Rewards</Link>
              </button>
              <hr />
              </div>
        );
    }

    
}

export default NavBar