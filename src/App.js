import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import LandingPage from './containers/LandingPage';
import AddComment from './containers/AddComment';
import Users from './containers/Users';
import { LogOut } from './components';
import UserProfile from './containers/UserProfile'
import NotFoundPage from './components/NotFoundPage'
import firebase from './firebase';
import PrivateRoute from './PrivateRoute';
import * as actions from './store/actions';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App(props) {

  const logout = () => {
    localStorage.removeItem('firstName');
    localStorage.removeItem('lastName');
    localStorage.removeItem('userId');
    firebase.auth().signOut();
    props.onLogOut();
  }  

  const checkAuthState = () => {
    if (!props.auth.userId && localStorage.getItem('userId')) {
      props.onPageReload({
        firstName: localStorage.getItem('firstName'),
        lastName: localStorage.getItem('lastName'),
        userId: localStorage.getItem('userId')
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
              <PrivateRoute path='/AddComment/:id' component={ AddComment }/>
              <PrivateRoute path='/UserProfile' component={ UserProfile }/>
              <Route path='/auth'
                render={() => <Users authState={ checkAuthState }/>}
                />
              <Route path='/logout'
                render={() => <LogOut logOut={ logout } />}
                />
              <Route path='/' exact component={ LandingPage } />
              
              <Route path="*" component={NotFoundPage} />
            </Switch>
         </Router>
      </div>
    
  );
}

const mapStateToProps = state => {
  return {
    auth: state.auth
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onPageReload: (authData) => dispatch(actions.setAuthOnReload(authData)),
    onLogOut: () => dispatch(actions.logOutUser())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);