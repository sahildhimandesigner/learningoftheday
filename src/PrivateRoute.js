import  React from 'react';
import {
    Route,
    Redirect
  } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => {
    return (
        <Route {...rest} render={(props) => (
            rest.currentState.userId ? 
              <Component {...props} {...rest}/>
              : <Redirect to={{
                  pathname: '/auth',
                  state: { from: props.location }
                }} />
          )} />
    )    
}

export default PrivateRoute;