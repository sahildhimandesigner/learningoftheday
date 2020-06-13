import React from 'react';
import { connect } from 'react-redux';
import HeaderStyle from './style';
import withStyle from 'react-jss'
import PrivateMenu from './privateMenu'
import PublicMenu from './publicMenu'

const WhitBar = ({ classes, ...props }) => {

    const loggedInText = props.auth.loggedIn ?
    (<span className={classes.userInfo}>
      Logged in as {props.auth.firstName} {props.auth.lastName}
    </span>) : null;

    const navLinks = props.auth.loggedIn ?
    (<div><PrivateMenu {...props} /></div>) : <PublicMenu />;
    
    return(
     <div className={classes.whiteBar}>        
        <div className={classes.innerContainer}>
          {navLinks}
          {loggedInText}
        </div>
      </div>
    )
}

const mapStateToProps = state => {
  return {
    auth: state.auth
  }
}

export default connect(mapStateToProps)(withStyle(HeaderStyle)(WhitBar));