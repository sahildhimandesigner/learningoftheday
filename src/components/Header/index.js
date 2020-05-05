import React from 'react';
import withStyle from 'react-jss';
import { Wrapper, Button, Headings } from '../index';
import HeaderStyle from './style';
import { colors } from '../../theme/colors';

const Header = ({ classes, ...props }) => {
  return (
    <div className={classes.bg}>          
      <Wrapper justifyContent='space-between'>
        <Headings textColor="#FFFFFF" as='h1'>Learning of the day</Headings>        
        <Button onClick={props.clicked} spacing='20px 0 0 0' backgroundColor='#fff' color={`${colors.primaryColor}`} >Add Post</Button>
      </Wrapper>
    </div>
  )
}

export default withStyle(HeaderStyle)(Header);