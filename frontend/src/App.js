import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom"
import NavBar from './navbar.js';
import { Switch } from 'react-router'
import Dishes from './Dishes.js'
import QuizWrapper from './QuizWrapper.js'



class App extends Component {

  render() {
    return (
      <div>
          <NavBar fixed="top" />
        <Router>
            <Switch>
              <Route path="/restaurants/dishes" component={Dishes} />  
              <Route path="/restaurants/quizzes" component={QuizWrapper} />  
            </Switch>
        </Router>

      </div>
    );
  }
}

export default App;

