import React, { useState, useEffect } from 'react';
import LandingPage from './containers/LandingPage';
import AddComment from './containers/AddComment';
import Users from './containers/Users';
import { LogOut } from './components';
import UserProfilePage from './containers/UserProfilePage'
import NotFoundPage from './components/NotFoundPage'
import firebase from './firebase';
import PrivateRoute from './PrivateRoute';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  const initialState = {
      firstName: '',
      lastName: '',
      userId: '',
      loginButtonValue: 'Login'
    };

  const [currentState, setCurrentState] = useState(initialState);

  const logout = () => {
    localStorage.removeItem('firstName');
    localStorage.removeItem('lastName');
    localStorage.removeItem('userId');
    setCurrentState(initialState);
    firebase.auth().signOut();
  }
  

  const checkAuthState = () => {
    const userId = localStorage.getItem('userId');
    if (!userId) {
      logout();
    } else {
      const userId = localStorage.getItem('userId');
      const firstName = localStorage.getItem('firstName');
      const lastName = localStorage.getItem('lastName');
      
      setCurrentState({
        firstName: firstName,
        lastName: lastName,
        userId: userId,
        loginButtonValue: 'Logout'          
      })
    }
  }

  useEffect(() => {
    checkAuthState()
  }, []);

  return (
    
      <div className="App">
        <Router>
            <Switch>            
              <PrivateRoute currentState={currentState} path='/AddComment/:id'
                component={AddComment}/>
              <PrivateRoute currentState={currentState} path='/UserProfilePage'
                component={UserProfilePage}/>
              <Route path='/auth'
                render={() => <Users authState={checkAuthState}/>}
                />
              <Route path='/logout'
                render={() => <LogOut logOut={logout} />}
                />
              <Route path='/' exact
                render={() => <LandingPage currentState={currentState} />} />
              
              <Route path="*" component={NotFoundPage} />
            </Switch>
         </Router>
      </div>
    
  );
}

export default App;

