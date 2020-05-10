import React from 'react';
import LandingPage from './containers/LandingPage';
import AddComment from './containers/AddComment';
import Users from './containers/Users';

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
          <Route path='/AddComment' component={AddComment}  />
          <Route path='/auth' component={Users}  />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
