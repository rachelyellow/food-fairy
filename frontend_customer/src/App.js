import React, { Component } from 'react';
import Map from './Map.js'
import NavBar from './NavBar.js'
import Quiz from './Quiz';
import Results from './results.js'
import Statusbar from "./Statusbar.js";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Switch } from 'react-router'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Statusbar />
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
            <Switch>
              <Route path="/maps" component={Map} />
              <Route path="/restauant/:restaurant_id/quiz/:quiz_id" component={Quiz} />
              <Route path="/rewards" component={Results} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}
export default App

