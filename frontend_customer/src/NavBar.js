import React, { Component } from 'react';

export class NavBar extends Component {

    render(){
        return (
            <div className="sidenav">
            <a href="#about">Map</a>
            <a href="#services">MyRewards</a>
          </div>
        );
    }

    
}

export default NavBar