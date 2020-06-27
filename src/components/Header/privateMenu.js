import React from 'react'
import { Link } from 'react-router-dom'
import HeaderStyle from './style';
import withStyle from 'react-jss'
import HomeIcon from '@material-ui/icons/Home';

const PrivateMenu = ({classes}) => {
    return (
        <div className={classes.linkContainer}>
            <Link className={classes.whiteNavLink} to="/"><HomeIcon />ome</Link>
            <Link className={classes.whiteNavLink} to="/UserProfile">My Profile</Link>
            <Link className={classes.whiteNavLink} to="/mentors">Mentors</Link>
        </div>
    )
}

export default withStyle(HeaderStyle)(PrivateMenu);