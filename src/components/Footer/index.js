import React from 'react';
import withStyle from 'react-jss';
import { Wrapper, Headings } from '../index';
import HeaderStyle from './style';

const Footer = ({ classes }) => {
  return (
    <div className={classes.footer}>          
      <Wrapper alignItems='center' padding='12px 30px 0'>
        <Headings textColor='#FFFFFF'>A better way to learn & share.</Headings>
      </Wrapper>
    </div>
  )
}

export default withStyle(HeaderStyle)(Footer);