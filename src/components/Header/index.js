import React from 'react';
import withStyle from 'react-jss';
import { Wrapper, Headings, LoginButton } from '../index';
import HeaderStyle from './style';
import { Link } from 'react-router-dom'
import WhiteBar from './whiteBar'

const Header = ({ classes, ...props }) => {
  
	const loginButton = props.location.pathname !== '/auth' ?
		<LoginButton
			loginButtonValue={props.currentState.loginButtonValue}
      {...props}
    /> : null;

    
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
      <WhiteBar {...props} />
    </div>
  )
}

export default withStyle(HeaderStyle)(Header);