import React from 'react';
import withStyle from 'react-jss';
import { Wrapper, Headings } from '../index';
import HeaderStyle from './style';

const Header = ({ classes, ...props }) => {
  return (
    <div className={classes.bg}>          
      <Wrapper justifyContent='space-between'>
        <Headings textColor="#FFFFFF" as='h1'>Learning of the day</Headings>        
        <div className={classes.navItems}>{props.children}</div>
      </Wrapper>
    </div>
  )
}

export default withStyle(HeaderStyle)(Header);