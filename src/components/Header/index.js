import React from 'react';
import withStyle from 'react-jss';
import { Wrapper, Button, Headings } from '../index';
import HeaderStyle from './style';

const Header = ({ classes, ...props }) => {
  return (
    <div className={classes.bg}>          
      <Wrapper justifyContent='space-between'>
        <Headings textColor="#FFFFFF" as='h1'>Learning of the day</Headings>        
        {props.children}
      </Wrapper>
    </div>
  )
}

export default withStyle(HeaderStyle)(Header);