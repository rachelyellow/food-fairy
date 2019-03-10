import React, { Component } from 'react';
import {Redirect } from 'react-router';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

 class CustomerLogin extends Component {
     constructor(){
         super()
         this.state = {
            login: false
         }
         this.handleChange = this.handleChange.bind(this);
     }


    handleChange(e) {
        this.setState({login: true})
    }


    render()    {
        return (
            <div>
                <h1>Login</h1>
                <input type="email"  placeholder="Email" />
                <input type="password" placeholder="Password" />
                 <button onClick={this.handleChange}> Submit  
                 </button>
                 {this.state.login && <Redirect to='/maps'/>}
            </div>
        )
    }
 }

 export default CustomerLogin