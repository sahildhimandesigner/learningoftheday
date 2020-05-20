import React, { useState, useEffect } from 'react';
import axios from './axios-instance';
import LandingPage from './containers/LandingPage';
import AddComment from './containers/AddComment';
import Users from './containers/Users';
import { Footer, LogOut } from './components';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  const initialState = {
      firstName: '',
      lastName: '',
      token: '',
      userId: '',
      loginButtonValue: 'Login'
    };

  const [currentState, setCurrentState] = useState(initialState);

  const logout = () => {
    localStorage.removeItem('firstName');
    localStorage.removeItem('lastName');
    localStorage.removeItem('token');
    localStorage.removeItem('expirationDate');
    localStorage.removeItem('userId');
    setCurrentState(initialState);
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
        const firstName = localStorage.getItem('firstName');
        const lastName = localStorage.getItem('lastName');
        
        setCurrentState({
          firstName: firstName,
          lastName: lastName,
          token: token,
          userId: userId,
          loginButtonValue: 'Logout'          
        })
      }
    }
  }

  useEffect(() => {
    checkAuthState()
  }, []);

  return (
    
      <div className="App">
        <Router>
            <Switch>            
              <Route path='/AddComment/:id'
                render={() => <AddComment currentState={currentState} />} />
              <Route path='/auth'
                render={() => <Users authState={checkAuthState}/>}
                />
              <Route path='/logout'
                render={() => <LogOut logOut={logout}/>}
                />
              <Route path='/' exact
                render={() => <LandingPage currentState={currentState} />} />
            </Switch>
        </Router>
      <Footer />
      </div>
    
  );
}

export default App;
