import React, { Component } from 'react';
import Map from './Map.js'
import Rewards from './Rewards.js'
import NavBar from './NavBar.js'
import FakeQuiz from './FakeQuiz.js'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends Component {

  render() {
    return (
    <div className="App">
    <Router>
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
        <Route path="/maps" component={Map} />
        <Route path="/restauant/:restaurant_id/quiz/:quiz_id" component={FakeQuiz} />
        <Route path="/rewards" component={Rewards} />
      </div>
    </Router>
      {/*
      <NavBar/>
      <Map/>
      */}
      </div>
    );
  }
}

export default App;
