import React from 'react'
import Headings from '../Headings';
import withStyle from 'react-jss'
import HeaderStyle from './style';
import Button from '../Button/button'
import Container from '../Container/container'

const Header = ({ classes }) => {
    return (
        <div className={classes.bg}>          
          <Container>
            <Headings textColor="#FFFFFF" as='h1'>Learning of the day</Headings>          
            <Button spacing='20px 0 0 0'>Add Post</Button>
          </Container>
        </div>
    )
}

export default withStyle(HeaderStyle)(Header);