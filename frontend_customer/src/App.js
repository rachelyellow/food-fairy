import React, { Component } from 'react';
import Quiz from './Quiz';
import Results from './results.js'

class App extends Component {


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Results/>
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