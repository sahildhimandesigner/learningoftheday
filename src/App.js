import React from 'react';
import LandingPage from './containers/LandingPage';
import UserComments from './components/UserComments'

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/' exact component={LandingPage}  />
          <Route path='/UserComment' component={UserComments}  />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
