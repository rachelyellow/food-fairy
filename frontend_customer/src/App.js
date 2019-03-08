import React, { Component } from 'react';
import Map from './Map.js'
import Quiz from './Quiz';
import CustomerLogin from './CustomerLogin';
import Rewards from './Rewards.js'
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Switch } from 'react-router'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
            <Switch>
              <Route path="/login" component={CustomerLogin} />  
              <Route path="/maps" component={Map} />
              <Route path="/restauant/:restaurant_id/quiz/:quiz_id" component={Quiz} />
              <Route path="/rewards" component={Rewards} />
            </Switch>
        </Router>
      </div>
    );
  }
}
export default App

