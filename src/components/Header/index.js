import React from 'react';
import withStyle from 'react-jss';
import { Wrapper, Headings, LoginButton } from '../index';
import HeaderStyle from './style';
import { Link } from 'react-router-dom'
import HomeIcon from '@material-ui/icons/Home';

const Header = ({ classes, ...props }) => {
  
	const loginButton = props.location.pathname !== '/auth' ?
		<LoginButton
			loginButtonValue={props.currentState.loginButtonValue}
      {...props}
    /> : null;

    const loggedInText = typeof props.currentState !== 'undefined' && props.currentState.userId ?
    (<span className={classes.userInfo}>
      Logged in as {props.currentState.firstName} {props.currentState.lastName}
    </span>) : null;
    
  return (
    <div className={classes.bg}>
      <Wrapper justifyContent='space-between'>
        <Headings textColor="#FFFFFF" as='h1'>
          <Link 
            className={classes.logo} 
            to="/">
              Learning of the day
          </Link>
        </Headings>

        <div className={classes.navItems}>
          {props.children}
        	{loginButton}    
      	</div>        
      </Wrapper>
      <div className={classes.whiteBar}>        
        <div className={classes.innerContainer}>
          <Link className={classes.whiteNavLink} to='/'><HomeIcon />Home</Link>
          {loggedInText}
        </div>
      </div>
    </div>
  )
}

export default withStyle(HeaderStyle)(Header);