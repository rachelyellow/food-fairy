import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'; 
import Login from  './login.js';
import Quiz from './quiz.js'

class App extends Component {
  render() {

    return (
      <div>
        <Quiz />
      </div>
    );
  }
}

export default App;
