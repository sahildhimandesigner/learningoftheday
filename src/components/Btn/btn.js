import React from 'react'
import Headings from '../Headings';
import withStyle from 'react-jss'
import HeaderStyle from './style';

const Btn = ({classes}) => {
    return (
        <div className={classes.bg}>
          <Headings textColor="#FFFFFF" as='h1'>Learning of the day</Headings>          
        </div>
    )
}

export default withStyle(HeaderStyle)(Btn);