import React, { useState, useEffect } from 'react';
import LandingPage from './containers/LandingPage';
import AddComment from './containers/AddComment';
import Users from './containers/Users';
import { Footer } from './components';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  const [currentState, setCurrentState] = useState({});

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('expirationDate');
    localStorage.removeItem('userId');
    setCurrentState({
      token: '',
      userId: '',
      loginButtonValue: 'Login'
    });
  }

  const checkAuthState = () => {
    const token = localStorage.getItem('token');
    if (!token) {
      logout();
    } else {
      if (new Date() >= new Date(localStorage.getItem('expirationDate'))) {
        logout();
      } else {
        const token = localStorage.getItem('token');
        const userId = localStorage.getItem('userId');
        setCurrentState({
          token: token,
          userId: userId,
          loginButtonValue: 'Logout'
        })
      }
    }
  }
  
  return (
    
      <div className="App">
        <Router>
            <Switch>            
              <Route path='/AddComment/:id'
                render={() => <AddComment currentState={currentState} /> } />
              <Route path='/auth'
                render={() => <Users authState={checkAuthState}/>}
                />
              <Route path='/' exact
                render={ () => <LandingPage currentState={currentState} /> } />
            </Switch>
        </Router>
      <Footer />
      </div>
    
  );
}

export default App;
