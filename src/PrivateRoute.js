import  React, { useState, useEffect } from 'react';
import { getAuth } from './utilities/FirebaseAuth';
import Spinner from './components/UI/Spinner';

import {
    Route,
    Redirect
  } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAuth().then(response => {
      setCurrentUser(response);
      setLoading(false);
    }).catch(error => {
      setLoading(false);
      setCurrentUser(null);
    })
  }, []);

    let body = !loading ? (<Route {...rest} render={(props) => (
        currentUser ? 
        <Component {...rest}/>
        : <Redirect to={{
            pathname: '/auth',
            state: { from: props.location }
          }} />
    )} />) : <Spinner />;
  
    return (
      <div>{body}</div>        
    )    
}

export default PrivateRoute;