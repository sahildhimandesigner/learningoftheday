import React from 'react'
import HomeIcon from '@material-ui/icons/Home';
import { Link } from 'react-router-dom'
import HeaderStyle from './style';
import withStyle from 'react-jss'

const WhitBar = ({ classes, ...props }) => {

    const loggedInText = typeof props.currentState !== 'undefined' && props.currentState.userId ?
    (<span className={classes.userInfo}>
      Logged in as {props.currentState.firstName} {props.currentState.lastName}
    </span>) : null;

    const navLinks = typeof props.currentState !== 'undefined' && props.currentState.userId ?
    (<div className={classes.linkContainer}><Link className={classes.whiteNavLink} to='/'><HomeIcon />Home</Link>
    <Link to="/UserProfile" className={classes.whiteNavLink}>User Profile</Link></div>) : null;
    
    return(
     <div className={classes.whiteBar}>        
        <div className={classes.innerContainer}>
          {navLinks}
          {loggedInText}
        </div>
      </div>
    )
}
export default withStyle(HeaderStyle)(WhitBar);