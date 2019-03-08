import React, { Component } from 'react';
import { Link } from "react-router-dom";
export class NavBar extends Component {
    render(){
        return (
        
            <div>
              <ul>  
                <li>
                <Link to="/maps">Maps</Link>
                </li>
                <li>
                <Link to="/rewards">Rewards</Link>
                </li>
              </ul>
              <hr />
              </div>

        );
    }

    
}

export default NavBar