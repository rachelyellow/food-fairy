import React, { Component } from 'react';

 class CustomerLogin extends Component {
    render()    {
        return (
            <div>
                <h1>Login</h1>
                <form action='http://localhost:3001/maps'>
                <input type="email" name="email" placeholder="Email" />
                <input type="password" name="password" placeholder="Password" />
                <button onChange={this.handleChange} type="submit">Submit</button>
                </form>
            </div>
        )
    }
 }

 export default CustomerLogin