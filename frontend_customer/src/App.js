import React, { Component } from 'react';
import Quiz from './Quiz';

class App extends Component {


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Quiz />
        </header>
      </div>
    );
  }
}

export default App;


{/* <Router>
  <Route path="/">
    <div className="App">
      <header className="App-header">
      </header>
    </div>
  </Route>
  <Switch>
    <Route path="/quiz" component={Quiz} />
    <Route path="/results" component={Results} />
  </Switch>
</Router> */}