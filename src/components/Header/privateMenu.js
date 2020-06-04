import React from 'react'
import { Link } from 'react-router-dom'
import HeaderStyle from './style';
import withStyle from 'react-jss'
import HomeIcon from '@material-ui/icons/Home';

const PrivateMenu = ({classes}) => {
    return (
        <div className={classes.linkContainer}>
            <Link className={classes.whiteNavLink} to="/"><HomeIcon /> Home</Link>
            <Link className={classes.whiteNavLink} to="/UserProfile">UserProfile</Link>
        </div>
    )
}

export default withStyle(HeaderStyle)(PrivateMenu);